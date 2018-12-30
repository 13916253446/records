# 组件捕获事件里面追加局部变量

父组件捕获子组件提交的`refresh`事件,这个事件也一并传递两个参数,此时父组件是个`for`循环组件,需要拿到当前`index`

- 子组件

  ```javascript
  this.$emit('refresh', { name:  '崔海峰' })
  ```

- 父组件

  ```html
  <div  v-for="(item, index) in array]">
    <child  @refresh="refresh(index)"></child>
  </div>
  ```

#### 解决方案

- 父组件捕获事件自定义一个事件，然后调用父组件内部的方法

  ```html
  <div  v-for="(item, index) in array]">
    <child  @refresh="(model) => { refresh(model, index) }"></child>
  </div>
  ```

# 父子组件双向数据流便捷方式

子组件会因为父组件传递过来的值，初始化显示，然后子组件又存在操作行为，又要把这个值提交给父组件

- 默认情况下，我们会在子组件重新定义一个变量，子组件创建的时候，把传递进来的值，赋值给这个变量，然后监听这个变量的变化，分发事件把值再传递给父组件

  ```javascript
  // child.vue
  <template>
    <div>
      <input v-model="value" type="text">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {}
    },
    data() {
      return {
        value: ''
      }
    },
    created() {
      this.value = this.name
    },
    watch: {
      value (val) {
        this.$emit('update:name', val)
      }
    },
  }
  </script>
  ```

这样就会有很多问题：比如子组件的显示与隐藏并不是通过`v-if`来控制，而是通过`v-show`来控制的，当父组件改变了`name`的值，再次显示子组件的时候初始值就有可能不对

- 最简单有效的方式：`computed`

  ```javascript
  <template>
    <div>
      <input v-model="value" type="text">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {}
    },
    computed: {
      value: {
        set (val) {
          this.$emit('update:name', val)
        },
        get () {
          return this.name
        }
      }
    },
  }
  </script>
  
  ```

通过计算属性的`get`以及`set`方法，无论在什么情况都能初始化值以及提交子组件的值

# 自定义插件里面的上下文

默认自定义插件里面的函数是读取不到`this`的，`this`是`undefined`，但是可以通过虚拟`DOM`获取

```javascript
Vue.directive('report', {
    bind (el, binding, vnode) {
        this // undefined
        vnode.context //当前使用这个指令的组件的上下文
    }
})
```