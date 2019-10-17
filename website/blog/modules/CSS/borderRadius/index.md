### 百分比

> 是相对于元素占据尺寸的百分比, 也就是包含边框，`padding`后的尺寸。而不是单纯地相对于`width/height`值。

比如要实现一个正方形元素的圆角效果, 一个`50%`就解决了。而无需其他计算。

### 单值的表现

> 单值实际上是一种简写。

比如`border-radius: 300px`,实际则是

```css
border-radius: 300px 300px 300px 300px/300px 300px 300px 300px;
```

也就是:

```
border-radius: 左上角水平圆角半径大小 右上角水平圆角半径大小 右下角水平圆角半径大小 左下角水平圆角半径大小/左上角垂直圆角半径大小 右上角垂直圆角半径大小 右下角垂直圆角半径大小 左下角垂直圆角半径大小;
```

### 最大值规则

> 无论设置圆角的值是多大，只会使用能够渲染的圆角大小渲染。

比如以下是一个`width: 200px;height: 100px`的长方形, 那么水平圆角最大能渲染的值是`100px`,垂直圆角最大能渲染的值是`50px`。

![border-radius](https://raw.githubusercontent.com/13916253446/assets/master/public/image(5).apz0jfci5la.png)

:::success
所以设置一个圆方形圆角的时候,除了可以设置`50%`的时候,还可以设置一个特别大的值,达到同样的效果。
:::

比如以下是一个`width: 200px;height: 300px`的长方形, 此时值设置了左上角,那么水平圆角最大能渲染的值就是`200px`而不是`100px`了

![border-radius-max](https://raw.githubusercontent.com/13916253446/assets/master/public/2015-11-01_201759.jbbxw629ey.png)

:::warning
相对的角(**比如左上角和左下角**)都同时设置时,最大能渲染的值是宽高的一半;但是如果是只设置一个角(**比如左上角**)时,此时最大能渲染的值就是相应的宽高一样的值而不是一半。
:::

### 等比例性原则

> 水平圆角和垂直圆角,始终保持同一个比列恒定不变。

:::success
比如说有一个长方形`width: 100px;height: 200px` 当设置圆角为`border-radius: 100px`时候,也就是`border-radius: 100px/100px`水平圆角和垂直圆角的比例是`1:1`,基于**等比例性原则**那么无论怎么渲染水平角和垂直角的比例始终是`1:1`,因为宽度是`100px`又因为对角也渲染所以水平最大渲染值是`50px`,所以此时垂直角渲染值也应该是`50px`。
:::

:::success
基于等比例性原则,只要保持水平角和垂直角比例保持一定的比例,设置最大圆角和固定的圆角效果是一样的。
:::

### 简写

- 两个数字

两个值就是一对对角值: “左上角, 右下角”和“右上角, 左下角”

```css
.example {
  border-radius: 10px 20px;
}

/** 对应 */
.example {
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 20px;
}
```

## 参考

- [张鑫旭 CSS3 border-radius知多少？](https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/)