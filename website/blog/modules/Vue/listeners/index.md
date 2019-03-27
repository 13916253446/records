### 多个事件的绑定

比如说包装了一个input组件，但是这个组件可能分发各种类型的事件：

```HTML
<template>
    <div class="wrapper-comp">
        <label>My Label</label>
        <input type="text"
            @focus="$emit('focus')"
            @click="$emit('click')"
            @blur="$emit('blur')"
            @hover="$emit('hover')"
        />
    </div>
</template>
```

为了减少代码量，我们可以通过`$listeners`直接绑定事件：

```HTML
<template>
    <div class="wrapper-comp">
        <label>My Label</label>
        <input type="text" v-on="$listeners" />
    </div>
</template>
```

原理就是：`v-on`可以绑定一个监听器键值对的对象，这样绑定相当于发生了绑定的事件后，会直接调用监听器值的方法，而不是通过提交(`$emit`)的方式

### 子组件调用父组件绑定的事件并接收返回的参数

```HTML
// parent.vue
<template>
  <div>
    <child @test="clickHander"></child>
  </div>
</template>

<script>
export default {
  methods: {
    clickHander (val) {
      return val * 2
    }
  }
}
</script>
```

通过`$emit`的方式是不能拿到返回值的，因为`$emit`相当于是分发一个事件，父组件有一个监听事件，是个异步操作，是不能返回值

```HTML
<template>
  <div @click="handler"></div>
</template>

<script>
export default {
  methods: {
    handler () {
      this.$emit('test', 1)
    }
  }
}
</script>
```

但是通过`$listeners`对象拿到绑定的事件的方法，直接调用，就可能拿到返回值了

```HTML
<template>
  <div @click="handler"></div>
</template>

<script>
export default {
  methods: {
    handler () {
      let { test } = this.$listeners || {}
      if (test) test()
    }
  }
}
</script>
```