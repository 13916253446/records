# 使用`margin:auto`使`flex`布局水平垂直居中

```HTML
<div class="g-container">
    <div class="g-box"></div>
</div>

<style>
.g-container {
  display: flex;
}
.g-box {
  margin: auto;
}
</style>
```

:::tip
上面的 `display: flex` 替换成 `display: inline-flex | grid | inline-grid` 也是可以的。
:::

# 在`block`布局中，为什么可以水平居中，而不能垂直居中?

`disaply:block`BFC(**块格式化上下文**也就是`block formatting context`),`margin: auto`只能使水平居中而不能使垂直居中。

查看CSS 文档，发现原因如下：

> If both margin-left and margin-right are auto, their used values are equal, causing horizontal centring.</br>
> [—CSS2 Visual formatting model details: 10.3.3](https://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins)

:::tip
简单翻译下，在块格式化上下文中，如果`margin-left`和`margin-right`都是`auto`，则它们的表达值相等，则`margin`的计算值就是平均分配剩余空间，所以造成水平居中
:::

> If margin-top, or margin-bottom are auto, their used value is 0.</br>
> [CSS2 Visual formatting model details: 10.6.3](https://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins)

:::tip
简单翻译下，在块格式化上下文中，而如果`margin-top`和`margin-bottom`都是`auto`则`margin`的计算值就是`0`，当然也就无法造成垂直居中。
:::

# 在`flex`不居中，为什么可以水平垂直居中?

`disaply:flex`FFC(**块格式化上下文**也就是`block formatting context`)、`display: grid`GFC(`grid formatting context`)中,`margin: auto`可以水平垂直居中。

查看CSS 文档，发现原因如下：

> Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.
> [CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins)

:::tip
简单翻译一下，大意是在`FFC`中，设置了 `margin: auto` 的元素，任何正处于空闲的空间都会分配到该方向的自动`margin`中去</br>
而且是在通过`justify-content`和`align-items`进行对齐之前</br>
`justify-content`和`align-items`的对齐方式，也是基础剩余空间的，比如`justify-content: center`，就是水平方向的两侧`main-start`和`main-end`平分剩余空间。[w3c文档](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#justify-content-property)
:::

![flex-margin](https://mp1.oss-cn-beijing.aliyuncs.com/blog/flex-pack.svg)

:::warning
`FFC`中设置了`margin`，那么就会先把剩余空间分配给`margin`使用，然后再有的剩余空间才会分配给`justify-content`和`align-items`使用。
:::

例如：在`flex`布局中实现一个**右对齐**

<div class="flex-wrapper">
  <div>测试</div>
</div>

<style>
.flex-wrapper {
  width: 100px;
  height: 50px;
  border: 1px solid gray;
  display: flex;
}
.flex-wrapper div {
  margin-left: auto;
}
</style>

```HTML
<div class="flex-wrapper">
  <div>测试</div>
</div>

<style>
.flex-wrapper {
  width: 100px;
  height: 50px;
  border: 1px solid gray;
  display: flex;
}
.flex-wrapper div {
  margin-left: auto;
}
</style>
```

:::tip
理解了原理之后，可以处理更多布局。
:::

## 参考：

- [探秘 flex 上下文中神奇的自动 margin](https://juejin.im/post/5ce60afde51d455ca04361b1)