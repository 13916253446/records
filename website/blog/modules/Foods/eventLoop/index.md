#### 总结几个概念

:::tip
浏览器是多线程的，如网络线程，编码解码线程，加密和监控线程，GUI渲染线程等等，只不过`js引擎`是单线程的，所有的线程完成了页面需要监听的内容，就会回到主线程通知主线程。
:::

:::tip
下面是：事件循环正在以CPU高效的速度，运行着
:::
<video controls="controls" autoplay src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop.mov"></video>

:::tip
下面是：当有任务发生时，浏览器对事件循环说，我有一份任务要交给你来做，事件循环说：“好的，把他加到我的待办事项里面，我空闲的时候就会去做”
:::

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop1.png)

**比如下面这个例子：**

```javascript
setTimeout(callback1, 1000)
setTimeout(callback2, 1000)
```

:::tip
浏览器对事件循环说，我这里有两件事需要你做一下，在经过1000ms之后事件循环将`callback1`,`callback2`放到代办事项里面，在主线程执行完毕绕道穿插口的时候，正好绕道待办事项，执行一次任务，继续下次任务，再次绕道穿插口，再执行一次任务
:::

:::warning
这里需要注意的一点是：每次事件循环只会执行一个任务
:::

<video controls="controls" autoplay src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop1.mov"></video>

:::tip
浏览器的渲染又是事件循环里面的又一条弯道了
:::

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop2.png)

**看个例子：**

```javascript
document.body.appendChild(el)
el.style.display = 'none'
```

:::tip
这段代码我们可能会担心元素发生闪烁，因为先拼接DOM，然后再设置元素隐藏，实际上则不会，因为渲染任务会在这段js执行完毕之后，才会进入渲染弯道，只会paint一次
:::

**看个例子：比如说页面上有个gif图片**

第一种情况是这样的: 会造成gif停止
```javascript
dom.addEventListener('click', () => {
  while (true) {
    ...
  }
})
```

第二种情况是这样的: 不会造成gif停止
```javascript
dom.addEventListener('click', () => {
  function do () {
    setTimeout(do, 0)
  }
  setTimeout(do, 0)
})
```

:::tip
第一种情况是，进入代办事项弯道的时候，js会一直执行造成，无法进入渲染弯道，然后gif就停止了</br>
第二种情况是，进入代办事项弯道的时候，执行一次do事件，在转到主弯道的时候，渲染任务对事件循环说，我需要进行一次渲染，这个时候，事件循环进入渲染弯道渲染，然后又进入待办事件弯道，每一次都只会执行一个代办事项，就这样循环着
:::

<video controls="controls" autoplay src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop3.mov"></video>

:::tip
也说明了一点：渲染可以在任务之间发生，但是并不是说一定会在两次任务之间就会发生一次渲染，浏览器尽可能的尝试高效的渲染，也许在两次三次任务之后渲染，比如当前选项卡切换了，即使发生样式变化也不会渲染，因为渲染没有任何意义，而且只有在样式发生改变的时候，才会触发渲染，又比如在60HZ的显示器上面，即使一秒钟触发1000次样式修改，浏览器也最多也只会渲染60次，因为渲染1000次没有任何意义，用户也看不到。
:::

#### 分析一下为什么`setTimeout`不适于做动画

假设在60HZ的显示器上面，我们用`setTimeout(animFrame, 1000 / 60)`来模拟：可能会发生下面的现象

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop4.png)

:::warning
`setTimeout`并不是为动画而设计的，他的表现并不准确，有可能在一帧中什么也不做，然后在下一帧中做，这对用户来说简直就是视觉冲击
:::

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop5.png)

:::warning
也有可能某个任务运行时间过长，最终会移动渲染步骤，因为他们都在同一个线程中运行
:::

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop6.png)

:::tip
而你使用`requestAnimationFrame`就会是这样的，他是为动画而设计的，会在计算样式和渲染之前，而不是像任务一样无法掌控运行的时机，任务和帧没有强制的关联关系，所以任何可能会发生在任何时候，从下面的图可以看到在每一帧中，时间分配的很合理，即使`requestAnimationFrame`里面的任务过长也不会影响当前帧的时间
:::

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop7.png)

:::tip
当然你无法避免任务，比如一些点击之类的任务传递给你，希望你尽快做出响应，还比如一些定时器的任务，网络请求的任务等等，你已经有动画在运行了，用`requestAnimation`就会下面这样的
:::

![loop](https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop8.png)

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

### 参考：

- [Jake Archibald: In The Loop - JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)