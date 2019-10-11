#### 方案1: 超出隐藏

利用一个父级元素超出隐藏，然后子元素实现阴影，利用`transform`来做`rotate`旋转，把块状元素旋转成三角形。

```HTML
<div class="triangle-with-shadow"></div>

<style>
.triangle-with-shadow {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.triangle-with-shadow:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  background: #999;
  transform: rotate(45deg); /* Prefixes... */
  top: 75px;
  left: 25px;
  box-shadow: -1px -1px 10px -2px rgba(0, 0, 0, 0.5);
}
</style>
```

![triangle](https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-11%20%E4%B8%8B%E5%8D%882.egdm835gmqq.38.57.png)

父级元素添加超过隐藏即可。
