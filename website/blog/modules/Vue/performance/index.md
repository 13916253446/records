#### 1. 利用函数式组件

<div class="flex">
<section class="flex-full">

- 普通组件

```HTML
<template>
  <div class="cell">
    <div v-if="value" class="on"></div>
    <section v-else class="off"></section>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>
```
<div class="center-flex">

![vue-performace](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Screenshot_from_2019-03-21_20-13-19.png)

</div>
</section>
<div style="width: 10px;"></div>
<section class="flex-full">

- 函数式组件

```HTML
<template>
  <div class="cell">
    <div v-if="value" class="on"></div>
    <section v-else class="off"></section>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>
```
<div class="center-flex">

![vue-performace](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Screenshot_from_2019-03-21_20-13-07.png)

</div>
</section>
</div>

#### 2. 分割子组件

<div class="flex">
<section class="flex-full">

- 普通写法

```HTML
<template>
  <div :style="{ opacity: number / 300 }">
    <div>{{ heavy() }}</div>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    heavy () { /* HEAVY TASK */ }
  }
}
</script>

```
<div class="center-flex">

![vue-performace](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Screenshot_from_2019-03-21_17-06-02.png)

</div>
</section>
<div style="width: 10px;"></div>
<section class="flex-full">

- 分割写法

```HTML
<template>
  <div :style="{ opacity: number / 300 }">
    <ChildComp/>
  </div>
</template>

<script>
export default {
  props: ['number'],
  components: {
    ChildComp: {
      methods: {
        heavy () { /* HEAVY TASK */ }
      },
      render (h) {
        return h('div', this.heavy())
      }
    }
  }
}
</script>
```
<div class="center-flex">

![vue-performace](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Screenshot_from_2019-03-21_17-05-52.png)

</div>
</section>
</div>


#### 3. 使用本地属性

<div class="flex">
<section class="flex-full">

- 普通写法

```HTML
<template>
  <div :style="{ opacity: start / 300 }">{{ result }}</div>
</template>

<script>
import { heavy } from '@/utils'

export default {
  props: ['start'],
  computed: {
    base () { return 42 },
    result () {
      let result = this.start
      for (let i = 0; i < 1000; i++) {
        result += heavy(this.base)
      }
      return result
    }
  }
}
</script>
```
<div class="center-flex">

![vue-performace](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Screenshot_from_2019-03-21_17-06-18.png)

</div>
</section>
<div style="width: 10px;"></div>
<section class="flex-full">

- 本地属性写法

```HTML
<template>
  <div :style="{ opacity: start / 300 }">
    {{ result }}</div>
</template>

<script>
import { heavy } from '@/utils'

export default {
  props: ['start'],
  computed: {
    base () { return 42 },
    result () {
      const base = this.base
      let result = this.start
      for (let i = 0; i < 1000; i++) {
        result += heavy(base)
      }
      return result
    }
  }
}
</script>
```
<div class="center-flex">

![vue-performace](http://mp1.oss-cn-beijing.aliyuncs.com/blog/Screenshot_from_2019-03-21_17-06-09.png)

</div>
</section>
</div>

:::tip
因为所有绑定在this上面的属性，都会增加`get`,`set`方法，也就是说你读取`this.base`的时候，实际会走一遍`get`方法，由于堆栈的原由，就会耗费时间
:::