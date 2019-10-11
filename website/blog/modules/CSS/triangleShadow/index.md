### 方案1: 超出隐藏

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

### 方案二: `drop-shadow`

`box-shadow`顾名思意“盒阴影”，只是盒子的阴影；你想啊，这盒子中间明明是透明的，结果，阴影的时候，居然光线没有穿透；但是`drop-shadow`就符合真实世界的投影，非透明的颜色，我就有投影；透明部分，光线穿过，没投影，而什么盒子不盒子的，跟我没有任何关系。

```HTML
<div class="box drop-shadow">
    <i class="cor"></i>
    filter: drop-shadow
</div>

<style>
.box {
    margin: 40px; padding: 50px;
    background-color: #fff;
    position: relative;
    font-size: 24px;
}
.cor {
    position: absolute;
    left: -40px;
    widtd: 0; height: 0;
    overflow: hidden;
    border: 20px solid transparent;
    border-right-color: #fff;
}
.drop-shadow {
    filter: drop-shadow(5px 5px 10px black);
}
</style>
```

![drop-shadow](https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-11%20%E4%B8%8B%E5%8D%883.xp7o99h21c.58.58%20(1).png)
