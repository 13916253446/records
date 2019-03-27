#### 几个高性能函数

- 节流函数
- 防抖函数
- 分时函数
- 惰性函数

:::tip
主要说一下**分时函数**:我们创建一个函数，然节点的添加分时进行，比如把在1s添加1000个节点改为每隔200ms添加20个节点。
:::

```javascript
let timeChunk = function (data, fn, count = 20, delay = 200) {
    let obj,timer
    let start = function () {
        for(let i = 0; i < Math.min(count, data.length); i++) {
            let obj = data.shift()
            fn(obj)
        }
    }
    return function () {
        timer = setInterval(function () {
            if(data.length === 0) {
                return clearInterval(timer)
            }
            start()
        }, delay)
    }
}
```

### 参考:

- [如何使用函数来优化性能](https://juejin.im/post/5c78d6dde51d453ecd049a4b)
