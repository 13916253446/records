#### 函数式组件特点：

- 组件不会被实例化，也就是说没有`this`可以访问
:::tip
不会被实例化，也就不会分配`getter,setter`方法，也就不会分配多余的内存空间，从而性能得到一定的提高
:::
- 没有状态(`data,computed`)，没有生命周期
:::tip
所谓函数式组件就只是一个**接收参数的函数**
:::
- 只能访问传入的参数比如:`props`,`listeners`,`injections`,`slots`

#### 如何使用

1. 通过`functional`申明为`true`

```javascript
Vue.component('my-component', {
  functional: true,
  // Props 可选
  props: {
  },
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: function (createElement, context) {
  }
})
```

2. 基于**模板**来申明
:::warning
在 2.5.0 及以上版本中，可以这样申明
:::

```html
<template functional>
</template>
```

#### 可以访问的数据
:::tip
组件需要的一切都是通过上下文传递，包括：
:::

- `props`: 提供所有的prop对象
- `children`: VNode子节点的数组
- `slots`: 所有插槽的对象的函数
- `scopedSlots`: 暴露传入的作用域插槽以及函数形式的普通插槽的对象
:::warning
`scopedSlots`只有在2.6.0 及以上版本可以访问
:::
- `data`: 传递给组件的[数据对象](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1)，作为`createElement`的第二个参数(`context`)传入组件
- `parent`: 对父组件的引用
- `listeners`
- `injections`

:::tip
在添加 `functional: true` 之后，锚点标题组件的 `render` 函数之间简单更新增加 `context` 参数，`this.$slots.default` 更新为 `context.children`，之后`this.level` 更新为 `context.props.level`。
:::

比如使用模板的形式:

```html
<template functional>
  <div>{{props.name}}</div>
</template>
```

比如使用渲染函数的形式:

```javascript
Vue.component('my-component', {
  functional: true,
  props: {
    name: {}
  },
  render: function (createElement, context) {
    // 通过上下文context访问
    return createElement('div', context.props.name)
  }
})
```