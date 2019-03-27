## 总结：

- `raf`里面的`callback`，会在重绘和回流之前执行，也就是下一次布局和绘制前面执行

```HTML
<div id="btn">按钮</div>
<script>
  var btn = document.getElementById('btn')

  btn.addEventListener('click', function fn () {
    btn.innerText = '456789'
    requestAnimationFrame(function raf () {
    })
  })
</script>
```

![requestAnimationFrame](https://mp1.oss-cn-beijing.aliyuncs.com/20190223082625.png)

- `raf`是一个宏任务(`task`)

```HTML
<div id="btn">按钮</div>
  <script>
    var btn = document.getElementById('btn')

    btn.addEventListener('click', function fn () {
     requestAnimationFrame(function raf () {
       console.log(1)
     })
     Promise.resolve().then(function proFn () {
       console.log(1)
     })
    })
  </script>
```

![requestAnimationFrame](https://mp1.oss-cn-beijing.aliyuncs.com/20190223083641.png)

可以看出`requestAnimationFrame`是一个宏任务，`Promise`是一个微任务。

- 如果你在一个`Task`(无论是宏任务还是微任务)，去改变`DOM`，然后在其他的`Task`里面去读取，你很有可能读取到的是没有发生改变的`DOM`，因为**浏览器并不总是在两个Task之间渲染，事件循环可能快于60HZ。**


- 同样的如果你在一个`Task`里面去改变`DOM`，然后你在`requestAnimationFrame`里面去读取`DOM`，你只会拿到一个没有发生改变的`DOM`

```HTML
<div id="btn">按钮</div>
  <div id="dialog" class="dialog"></div>
  <script>
    var btn = document.getElementById('btn')
    var dialog = document.getElementById('dialog')

    btn.addEventListener('click', function fn () {
    dialog.style.display = 'block'
     requestAnimationFrame(function raf () {
      dialog.classList.add('dialog-active')
     })
    })
  </script>
```

弹窗动画将不会执行

- 最好的操作`DOM`做法是：**在requestAnimationFrame里面改变DOM，然后在其他的Task里面去读取DOM**

```HTML
<div id="btn">按钮</div>
  <div id="dialog" class="dialog"></div>
  <script>
    var btn = document.getElementById('btn')
    var dialog = document.getElementById('dialog')

    btn.addEventListener('click', function fn () {
     requestAnimationFrame(function raf () {
      dialog.style.display = 'block'
     })
     setTimeout(() => {
       dialog.classList.add('dialog-active')
     }, 0)
    })
  </script>
```

一定可以触发弹窗动画

还有一种做法是在`requestAnimationFrame`强制触发一次回流

```HTML
<div id="btn">按钮</div>
  <div id="dialog" class="dialog"></div>
  <script>
    var btn = document.getElementById('btn')
    var dialog = document.getElementById('dialog')

    btn.addEventListener('click', function fn () {
      dialog.style.display = 'block'
      requestAnimationFrame(function raf () {
        window.pageYOffset
        dialog.classList.add('dialog-active')
      })
    })
  </script>
```

- 即使浏览器没有发生重绘或者回流，`requestAnimationFrame`，也会以刷新频率来执行，通常是每秒60次。