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

看到17分钟的位置

### 参考：

-[Jake Archibald: In The Loop - JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0)