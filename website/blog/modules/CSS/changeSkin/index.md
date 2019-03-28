#### 目前实现换肤的大致两个方案

- 一个全局`class`控制样式切换
- 改变皮肤`link`的`href`地址

```HTML
<link id="skinLink" href="skin-default.css" rel="stylesheet" type="text/css">
<script>
  skinLink.href = 'skin-red.css'
</script>
```

都不完美。全局class控制样式提高了样式优先级，如果换肤样式很多，代码会非常啰嗦，不利于维护；使用JS改变href属性会带来加载延迟，样式切换不流畅，体验不佳。


#### 原生特性实现网站换肤

:::tip
有个非常有趣的特性，那就是`rel="stylesheet"`的`<link>`如果有`title`属性并有值，性质上就变成了一个可以控制其渲染或者不渲染的特殊元素了。
:::

**此方法借助`HTML rel`属性的`alternate`属性值实现。示意HTML如下：**

```HTML
<link href="reset.css" rel="stylesheet" type="text/css">

<link href="default.css" rel="stylesheet" type="text/css" title="默认">
<link href="red.css" rel="alternate stylesheet" type="text/css" title="红色">
<link href="green.css" rel="alternate stylesheet" type="text/css" title="绿色">
```

- 没有title属性，rel属性值仅仅是stylesheet的`<link>`无论如何都会加载并渲染，如reset.css；
- 有title属性，rel属性值仅仅是stylesheet的`<link>`作为默认样式CSS文件加载并渲染，如default.css；
- 有title属性，rel属性值同时包含alternate stylesheet的`<link>`作为备选样式CSS文件加载，默认不渲染，如red.css和green.css；

#### 怎么切换呢

:::tip
使用JS进行控制了，使用JavaScript代码修改`<link>`元素DOM对象的disabled值为false，可以让默认不渲染的CSS开始渲染。注意，必须是DOM元素对象的disabled属性，而不是HTML元素的disabled属性，`<link>`元素是没有disabled属性的
:::

```javascript
// 渲染red.css这个皮肤
document.querySelector('link[href="red.css"]').disabled = false;
```

### 参考：

- [link rel=alternate网站换肤功能最佳实现](https://www.zhangxinxu.com/wordpress/2019/02/link-rel-alternate-website-skin/)
