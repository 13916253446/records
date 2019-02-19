# promise catch

当代码中的 `promise reject` 的时候，`onerror` 是捕获不到异常的。对于` promise reject` 的异常，除了对每个用到 `promise` 的地方都加上 `catch` 之外，我们还应该在全局环境下进行一个兜底。

我们可以监听全局 `unhandledrejection` 事件：

```javascript
window.addEventListener('unhandledrejection', (e) => {
  console.log(e)
})
```

如果要阻止异常输出到控制台上，可以加上 `e.preventDefault()`。