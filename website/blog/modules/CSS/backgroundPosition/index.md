### 理解`background-position`

```css
background-position: right bottom;
```

产生的效果如下：

![background-position](http://mp1.oss-cn-beijing.aliyuncs.com/blog/16a013b92d962365)

重点来了，**`right` `bottom` 这个值是什么意思呢？**

:::tip
正确的理解：图片的右下角与div的右下角对齐
:::

那么就可以很容易的理解百分比了

:::warning
right bottom 就是 100% 100%
:::

:::tip
所以百分比：50% 50%就是图片的50%与div的50%对齐
:::

### 参考：

- [你可能理解错了background-position](https://juejin.im/post/5cac56706fb9a0688e065ae1)
