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

![layout](https://mp1.oss-cn-beijing.aliyuncs.com/blog/Layout.png)


#### 什么是强制同步布局

渲染一帧的正常顺序应该是：

![frame](https://mp1.oss-cn-beijing.aliyuncs.com/blog/frame.jpg)

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

#### 为什么动画要使用`requestAnimationFrame`

假设使用`setTimeout`或`setInterval`来触发JS执行并修改样式从而导致视觉变化；那么会有这样一种情况，因为`setTimeout`或`setInterval`没有办法保证回调函数什么时候执行，它可能在每一帧的中间执行，也可能在每一帧的最后执行。所以会导致即便我们能保障每一帧的总耗时小于16ms，但是执行的时机如果在每一帧的中间或最后，最后的结果依然是**没有办法每隔16ms让屏幕产生一次变化**。

![requestAnimationFrame](https://mp1.oss-cn-beijing.aliyuncs.com/blog/1696b79a9fc1ddd6)

也就是说，即便我们能保证每一帧总体时间小于16ms，但如果使用定时器触发动画，那么由于定时器的触发时机不确定，所以还是会导致动画丢帧。现在整个Web只有一个API可以解决这个问题，那就是requestAnimationFrame，它可以保证回调函数稳定的在每一帧最开始触发。

![requestAnimationFrame](https://mp1.oss-cn-beijing.aliyuncs.com/blog/1696b79a9fcadb87)

### 参考：

- [避免大型、复杂的布局和布局抖动](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?hl=zh-cn#avoid-forced-synchronous-layouts)

- [前端性能优化之浏览器渲染优化 —— 打造60FPS页面](https://github.com/fi3ework/blog/issues/9)

- [让你的网页更丝滑（一）](https://juejin.im/post/5c860282e51d45531330e10e)