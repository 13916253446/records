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

#### 4. 延迟渲染

<div class="flex">
<section class="flex-full">

- 普通写法

```HTML
<template>
  <div>
    <h2>I'm an heavy page</h2>

    <Heavy v-for="n in 10" :key="n"/>

    <Heavy class="super-heavy" :n="9999999"/>
  </div>
</template>
```
</section>
<div style="width: 10px;"></div>
<section class="flex-full">

- 延迟写法写法

```HTML
<template>
  <div>
    <h2>I'm an heavy page</h2>

    <template v-if="defer(2)">
      <Heavy v-for="n in 10" :key="n"/>
    </template>

    <Heavy v-if="defer(3)" class="super-heavy" :n="9999999"/>
  </div>
</template>

<script>
import Defer from '@/mixins/Defer'

export default {
  mixins: [
    Defer()
  ]
}
</script>
```

**Defer Mixin**

```javascript
export default function (count = 10) {
  return {
    data () {
      return {
        displayPriority: 0
      }
    },

    mounted () {
      this.runDisplayPriority()
    },

    methods: {
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },

      defer (priority) {
        return this.displayPriority >= priority
      }
    }
  }
}
```
</section>
</div>

#### 5. 定制不需要监听变化的属性值

<div class="flex">
<section class="flex-full">

- 普通写法

```javascript
const data = items.map(
  item => ({
    id: uid++,
    data: item,
    vote: 0
  })
)
```
</section>
<div style="width: 10px;"></div>
<section class="flex-full">

- 不让添加`get`,`set`方法的写法

```javascript
const data = items.map(
  item => optimizeItem(item)
)

function optimizeItem (item) {
  const itemData = {
    id: uid++,
    vote: 0
  }
  Object.defineProperty(itemData, 'data', {
    // Mark as non-reactive
    configurable: false,
    value: item
  })
  return itemData
}
```

:::tip
这样可以定制局部属性，不用`Vue`添加`get`,`set`方法
:::

#### 6. 虚拟滚动组件

[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)

</div>

#### 7. 临时变量

循环渲染Dom的时候, 对于一些重复用到的需要计算的变量, 可以利用`作用域插槽`来生成一个临时变量。

```HTML
// TempVar.vue
<script>
export default {
  name: 'Var',
  functional: true,
  render: (h, context) => {
    return context.scopedSlots.default && context.scopedSlots.default(context.props || {})
  }
}
</script>

// list.vue
<template
  v-for="(item, idx) in listData">
  <temp-var
    :value="{} || item.warehouseVO"
    :key="idx">
    <div  v-slot="{ value }"></div>
  </temp-var>
</template>
```

:::success
利用函数式组件的特性, 没有上下文没有生命周期来优化这个临时变量组件。
:::

### 参考:

- [9 performance secrets revealed](https://slides.com/akryum/vueconfus-2019#/)