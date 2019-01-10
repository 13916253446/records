# 创建高级组件：抽象组件

我们常用的`transition`和`keep-alive`就是一个抽象组件。抽象组件是无状态的，同样也是“不存在的”，它自己并不会被渲染为实际的DOM，而是直接返回以及操作它的子元素。

-   把函数防抖/函数节流包装成通用组件
    
    -   在`render`函数中，组件修改子VNode的事件，再将其返回回去。
        
        ```javascript
        const debounce = (func, time, ctx) => {
            let timer
            const rtn = (...params) => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(ctx, params)
                }, time)
            }
            return rtn
        }
        
        Vue.component('Debounce', {
            abstract: true,
            props: ['time', 'events'],
            created () {
              this.eventKeys = this.events.split(',')
              this.originMap = {}
              this.debouncedMap = {}
            },
            render() {
                const vnode = this.$slots.default[0]
        
                this.eventKeys.forEach((key) => {
                    const target = vnode.data.on[key]
                    if (target === this.originMap[key] && this.debouncedMap[key]) {
                        vnode.data.on[key] = this.debouncedMap[key]
                    } else if (target) {
                        this.originMap[key] = target
                        this.debouncedMap[key] = debounce(target, this.time, vnode)
                        vnode.data.on[key] = this.debouncedMap[key]
                    }
                })
                
                return vnode
            },
        })
        ```
        

使用：

```javascript
const app = new Vue({
    el: '#app',
    data () {
        return {
            val: 0,
        }
    },
    methods: {
        onClick ($ev, val) {
            this.val += val
        },
        onAdd () {
            this.val += 3
        }
    }
})
```

## 和使用指令比较

使用自定义指令也是一种思路，不过指令的bind发生在`created`的回调中，也就是晚于事件的初始化的，这样的话就不能通过修改`vnode.data.on`来改变绑定的事件回调，只能自己来绑定事件了：

```javascript
Vue.directive('debounce', {
    bind (el, { value }, vnode) {
        const [target, time] = value
        const debounced = debounce(target, time, vnode)
        el.addEventListener('click', debounced)
        el._debounced = debounced
    },
    destroy (el) {
        el.removeEventListener('click', el._debounced)
    }
})
```