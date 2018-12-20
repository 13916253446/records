# 组件捕获事件里面追加局部变量

父组件捕获子组件提交的`refresh`事件,这个事件也一并传递两个参数,此时父组件是个`for`循环组件,需要拿到当前`index`

-   子组件
    
    ```javascript
    this.$emit('refresh', { name: '崔海峰' })
    ```
    
-   父组件
    ```html
    <div v-for="(item, index) in array]">
      <child @refresh="refresh(index)"></child>
    </div>
    ```

#### 解决方案

- 父组件捕获事件自定义一个事件，然后调用父组件内部的方法
    ```html
    <div v-for="(item, index) in array]">
      <child @refresh="(model) => { refresh(model, index) }"></child>
    </div>
    ```
