### 如何监听子组件的生命周期呢？

有时候，需要知道子组件的生命周期，然后做一些事情

#### 1. 通过在子组件生命周期里面分发事件

```javascript
// child.vue
mounted () {
  this.$emit('mounted')
}
```

#### 2. 捕获`vue`内部分发的事件

通过`@hooks:生命周期`来实现监听
```HTML
<child @hooks:mounted="mounted"></child>
```

### 分析`Vue`生命周期的源码

在 `_init`方法中执行的，它的定义在`src/core/instance/init.js`中：

```javascript
Vue.prototype._init = function (options?: Object) {
  // ...
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm) // resolve injections before data/props
  initState(vm)
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')
  // ...
}
```

源码中最终执行生命周期的函数都是调用`callHook`方法，它的定义在`src/core/instance/lifecycle`中：

```javascript
export function callHook (vm: Component, hook: string) {
  pushTarget()
  const handlers = vm.$options[hook]
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm)
      } catch (e) {
        handleError(e, vm, `${hook} hook`)
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```

可以看到在调用生命周期的时候，除了调用以外，还会`$emit`一个`hooks:生命周期`事件

可以看到`beforeCreate`和`created`的钩子调用是在 `initState`的前后，`initState`的作用是初始化`props`、`data`、`methods`、`watch`、`computed`等属性，之后我们会详细分析。那么显然`beforeCreate`的钩子函数中就不能获取到`props`、`data`中定义的值，也不能调用`methods`中定义的函数。

在这俩个钩子函数执行的时候，并没有渲染`DOM`，所以我们也不能够访问`DOM`，一般来说，如果组件在加载的时候需要和后端有交互，放在这俩个钩子函数执行都可以，如果是需要访问`props`、`data`等数据的话，就需要使用`created`钩子函数。