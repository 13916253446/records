### 才用`scale`缩放的方式来解决

缩放的形式来解决`12px`的问题, 但是元素本身所占的空间还是同样的大小, 在一定的场景下会存在问题。

```css
.f-16 {
  font-size: 16px;
  transform: scale(12 / 16);
}
```

### 才用`svg text`的方式

`SVG`本质上你可以看成是一张图片，图片设置`width:100%`自动就跟随容器尺寸拉伸，`SVG`也是如此，并且`SVG`由于是矢量的，因此，再怎么拉伸我们的文字效果都是清晰细腻的。

```HTML
<svg width="600" height="80" viewBox="0 0 600 80">
    <text font-family="'PingFang SC','Microsoft Yahei'" font-size="60" x="0" y="1em">CSS世界这本书不错！</text>
</svg>
```

<iframe height="265" style="width: 100%;" scrolling="no" title="解决最小12像素问题" src="https://codepen.io/13916253446/embed/RwwovZr?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/13916253446/pen/RwwovZr'>解决最小12像素问题</a> by 崔海峰
  (<a href='https://codepen.io/13916253446'>@13916253446</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 参考

- [张鑫旭-借助SVG文字尺寸自动缩放甚至突破Chrome 12px限制](https://www.zhangxinxu.com/wordpress/2018/03/svg-text-font-size-auto-scale/)
