#### 理解布局`Layout`

:::tip
布局是浏览器计算各元素几何信息的过程：元素的大小以及在页面中的位置。
:::

`Layout`的开销主要体现在：

1. 需要布局的元素数量
2. 这些布局的复杂性

当您更改样式时，浏览器会检查任何更改是否需要计算布局，以及是否需要更新渲染树。对“几何属性”（如宽度、高度、左侧或顶部）的更改都需要布局计算。

```css
.box {
  width: 20px;
  height: 20px;
}

/**
 * Changing width and height
 * triggers layout.
 */
.box--expanded {
  width: 200px;
  height: 350px;
}
```

通过`Performance`查看`Layout`的影响范围以及时间

![layout](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Layout.png)


#### 什么是强制同步布局

渲染一帧的正常顺序应该是：

![frame](http://mp1.oss-cn-beijing.aliyuncs.com/blog/frame.jpg)

:::tip
在`javascript`运行时，来至上一帧的所有布局值，都是已知的，所以在当前帧里面获取布局值是最好的做法(因为浏览器的优化可能把批量的操作统一化异步布局了，下一帧读取上一帧的布局肯定是能读到的)
:::

```javascript
// requestAnimationFrame运行于当前帧的最前面
requestAnimationFrame(logBoxHeight);

// 获取布局的最优做法
function logBoxHeight() {
  console.log(box.offsetHeight);
}
```

:::warning
但是如果在当前帧的开始又更改样式，而且又需要读取这个样式，就会引发**强制同步布局**(为了读取到正确的样式，JavaScript 强制浏览器提前执行布局)
:::

```javascript
requestAnimationFrame(logBoxHeight);

function logBoxHeight() {
  box.classList.add('super-big');
  // 为了得到正确的样式，不得不立马应用上一步的样式，触发布局
  console.log(box.offsetHeight);
}
```

:::tip
大部分情况下，并不需要应用样式然后查询值；使用上一帧的值就足够了。与浏览器同步（或比其提前）运行样式计算和布局可能成为瓶颈
:::

正确的做法：

```javascript
requestAnimationFrame(logBoxHeight);

function logBoxHeight() {
  // 上一帧的值
  console.log(box.offsetHeight);
  // 当前帧运行到Layout的时候，正好渲染
  box.classList.add('super-big');
}

```

### 参考：

- [避免大型、复杂的布局和布局抖动](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?hl=zh-cn#avoid-forced-synchronous-layouts)

- [前端性能优化之浏览器渲染优化 —— 打造60FPS页面](https://github.com/fi3ework/blog/issues/9)