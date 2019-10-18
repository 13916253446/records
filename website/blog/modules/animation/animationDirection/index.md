### `animation-direction`

指示动画是否反向播放

- `normal`

默认值。每次动画结束, 重置到起点重新播放。

- `alternate` [ˈɔ:ltəneɪt']交替

动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向，比如，`ease-in` 在反向时成为`ease-out`。

- `reverse`

从尾到头反向运行动画, 每次动画结束后, 重置到尾点重新播放。

- `alternate-reverse`

反向交替， 反向开始交替。

以下就是使用`alternate`和不使用的区别

<iframe height="265" style="width: 100%;" scrolling="no" title="ExxgEZg" src="https://codepen.io/13916253446/embed/ExxgEZg?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/13916253446/pen/ExxgEZg'>ExxgEZg</a> by 崔海峰
  (<a href='https://codepen.io/13916253446'>@13916253446</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
