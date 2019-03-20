#### 事件冒泡与捕获过程

一般监听事件

```javascript
document.addEventListener('click', () => {
  console.log('click')
})
```

第三个参数`useCapture`，表示是否在捕获阶段，设置处理器

要在捕获阶段捕获事件，我们需要将`addEventListener`的第三个参数设置为`true`。

最后一个参数是可选的，有两个可能的值：

- 如果为 `false`（默认值），则在冒泡阶段设置处理器。
- 如果为 `true`，则在捕获阶段设置处理器

这个参数决定了，事件处理器的执行顺序：

![capture](http://mp1.oss-cn-beijing.aliyuncs.com/blog/page_event.png)

### 参考：

- [冒泡和捕获](https://zh.javascript.info/bubbling-and-capturing)
