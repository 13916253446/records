1. 可以设置全局指令

```javascript
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})
```

路由组件内部使用：

```html
<div v-title>标题内容</div>
```

2. 可以通过抽象组件

```javascript
export default {
  name: 'title',
  render () {
    let { text } = (this.$slots.default && this.$slots.default[0]) || {}
    document.title = text
  }
}
```

组件内部使用：

```html
<title>标题内容</title>
```