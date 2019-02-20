
# 浏览器的优化机制

现代的浏览器都是很聪明的，由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！**当你获取布局信息的操作的时候，会强制队列刷新**，比如当你访问以下属性或者使用以下方法：

- **offsetTop、offsetLeft、offsetWidth、offsetHeight**
- **scrollTop、scrollLeft、scrollWidth、scrollHeight**
- **clientTop、clientLeft、clientWidth、clientHeight**
- **getComputedStyle()**
- **getBoundingClientRect**

# 减少重绘和回流

接下来看怎么减少重绘和回流，来优化项目

### 最小化重绘和回流(重排)

由于重绘和重排可能代价比较昂贵，因此最好就是可以减少它的发生次数。为了减少发生次数，我们可以合并多次对DOM和样式的修改，然后一次处理掉。考虑这个例子：

```javascript
const el = document.getElementById('test')

el.style.padding = '5px'
el.style.marginLeft = '5px'
el.style.marginRight = '9px'
```

例子中，有三个样式属性被修改了，每一个都会影响元素的几何结构，引起回流。当然，大部分现代浏览器都对其做了优化，因此，只会触发一次重排。但是如果在旧版的浏览器或者在上面代码执行的时候，有其他代码访问了布局信息(上文中的会触发回流的布局信息)，那么就会导致三次重排。

因此，我们可以合并所有的改变然后依次处理，比如我们可以采取以下的方式：

- 使用`cssText`

```javascript
const el = document.getElementById('test')

el.style.cssText += `padding: 5px; margin-left: 5px; margin-right: 9px`
```

- 修改`class`

```javascript
const el = document.getElementById('test')

el.classList.add('active')
```

### 批量修改DOM

当我们需要对DOM对一系列修改的时候，可以通过以下步骤减少回流重绘次数：

1. **使元素脱离文档流**
2. **对其进行多次修改**
3. **将元素带回文档中**

该过程的第一步和第三步会引起回流，但是经过第一步之后，对元素进行的任何操作都不会引起重绘和回流，因为它已经不在渲染树中了

有三种方式可以让`DOM`脱离文档流

- **隐藏元素**
- **使用文档片段(document fragment)在当前DOM之外创建一个子树，再将它拷贝回文档**
- **将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素**

我们要执行一段批量插入节点的代码：

```javascript
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
    	li = document.createElement('li');
      li.textContent = 'text';
      appendToElement.appendChild(li);
    }
}

const ul = document.getElementById('list');
appendDataToElement(ul, data);
```

现在使用这三种方式来进行优化

##### 隐藏元素，拼接元素，显示元素

这样会在隐藏和重新显示元素的时候，产生两次回流

```javascript
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
    	li = document.createElement('li');
      li.textContent = 'text';
      appendToElement.appendChild(li);
    }
}

const ul = document.getElementById('list');
ul.style.display = 'none';
appendDataToElement(ul, data);
ul.style.dispaly = 'block';
```

##### 使用文档片段(document fragment)

这样只会产生一次回流

```javascript
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
    	li = document.createElement('li');
      li.textContent = 'text';
      appendToElement.appendChild(li);
    }
}

const fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
const ul = document.getElementById('list');
ul.appendChild(fragment);
```

##### 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素

这样也只会产生一次回流

```javascript
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
    	li = document.createElement('li');
      li.textContent = 'text';
      appendToElement.appendChild(li);
    }
}

const ul = document.getElementById('list')
const clone = ul.cloneNode(true)
appendDataToElement(clone, data)
ul.parentNode.replaceChild(clone, ul)
```

# 避免出发同步布局事件

上文我们说过，当我们访问元素的一些属性的时候，会导致浏览器强制清空队列，进行强制同步布局。举个例子，比如说我们想将一个p标签数组的宽度赋值为一个元素的宽度，我们可能写出这样的代码：

```javascript
function initP() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.width = box.offsetWidth + 'px';
    }
}
```

这段代码看上去是没有什么问题，可是其实会造成很大的性能问题。在每次循环的时候，都读取了box的一个offsetWidth属性值，然后利用它来更新p标签的width属性。这就导致了每一次循环的时候，浏览器都必须先使上一次循环中的样式更新操作生效，才能响应本次循环的样式读取操作。**每一次循环都会强制浏览器刷新队列**。我们可以优化为:

```javascript
const width = box.offsetWidth;
function initP() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.width = width + 'px';
    }
}
```