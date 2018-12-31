# 一个函数可接受回调函数，也可以通过`Promise`来接收

```javascript
function test (callback) {
    let _resolve
    setTimeout(() => {
        if (callback) callback()
        else _resolve()
    }, 1000)
    if (!callback) {
        return new Promise(resolve => { _resolve = resolve })
    }
}
```
