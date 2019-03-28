## 简述事件循环模型

主线程在执行完**同步任务**之后，就会去检查**微任务队列(microTask)**，如果**微任务队列(mircoTask)**为空，就会检查**宏任务(Task)**，如果**微任务队列(microTask)**不为空，就会一次性执行完队列里面所有的**微任务**。
每次单个**宏任务**执行完毕后，就会检查**微任务队列**，如果队列有任务，就会执行完所有的**微任务**。

- 看下第一个示例：

```javascript
console.log('script start');

setTimeout(function timeFn() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function fn1() {
  console.log('promise1');
}).then(function fn2() {
  console.log('promise2');
});

console.log('script end');
```

1. **同步任务执行，分配微任务，宏任务至各自的队列**

```javascript
微任务(microTask): fn1

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end'
```

2. **主线程执行完毕，检查微任务队列，微任务队列有任务，就执行微任务队列**

执行微任务队列的代码

```javascript
微任务(microTask): fn1 fn2

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end', 'promise1'
```

微任务fn1加入主线程开始执行，打印`promise1`，返回一个新的`Promise`值为`undefined`，加入微任务

3. **主线程执行执行完毕，检查微任务队列是否有任务**

```javascript
微任务(microTask): fn2

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end', 'promise1', 'promise2'
```

fn1执行完毕，从微任务队列移除掉，fn1作为同步任务执行完毕，检查微任务队列里面有fn2,于是将fn2加入主线程，开始执行，打印promise2，主线程执行完毕后，检查微任务队列，发现微任务没有了，就开始检查宏任务

4. **将宏任务timeFn加入主线程开始执行**

```javascript
微任务(microTask):

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end', 'promise1', 'promise2', 'setTimeout'
```

移除执行完毕的fn2，加入主线程的宏任务开始执行，打印setTimeout，所有的代码执行完毕


### 总结

`Task`宏任务有：

- setTimeout
- setInterval
- setImmediate
- I/O
- UI rendering
- requestAnimationFrame

`microTask`微任务有：

- process.nextTick
- promises
- Object.observe
- MutationObserver


#### 微任务(`MicroTask`)的起源

:::tip
浏览器希望为开发人员提供一种监控DOM变化的方法，但是如果发生下面的情况，你是希望想听到一次，还是100次呢
:::

```javascript
for (let i = 0; i < 100; i ++) {
  const span = document.createElement('span')
  document.body.appendChild(span)
}
```

:::tip
答案肯定就是一次了，这里浏览器就创建了一个新的队列:微任务(`microTask`),他承诺你在当前js执行完毕，也就是栈空的时候就会执行所有的微任务，微任务可能发生在事件循环的任何地方，比如在`requestAnimationFrame`回调里面启动一个微任务，这个微任务就会在`requestAnimationFrame`回调栈空之后，渲染之前执行，也说明了如果有一个一直执行的微任务队列，那么浏览器也就会卡死
:::

```javascript
function loop () {
  Promise.resolve().then(loop)
  loop()
}
```

**看个例子:**

我们给一个`DOM`绑定两个事件

```javascript
dom.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log(1)
  })
  console.log(2)
})
dom.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log(3)
  })
  console.log(4)
})
```

:::tip
当我们点击`DOM`的时候，会打印2,1,4,3
:::

但是如果是`js`触发的呢

```javascript
dom.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log(1)
  })
  console.log(2)
})
dom.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log(3)
  })
  console.log(4)
})

dom.click()
```

:::tip
js触发的时候，就会打印2,4,1,3
:::

<video controls="controls" autoplay src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop9.mov"></video>

:::warning
js调用触发的时候，两次回调没有执行完，`dom.click()`这里的javascript不会从栈里面移除，导致微任务一直不能触发，最后才会触发
:::

### 参考

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[一次弄懂Event Loop](https://mp.weixin.qq.com/s/a32ZJComEggECDb2cXl5DQ)

[深入探究 eventloop 与浏览器渲染的时序问题](https://www.404forest.com/2017/07/18/how-javascript-actually-works-eventloop-and-uirendering/#7-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99)