### 如何调试`Vue`模板

说明:

```HTML
<h1>{{ console.log(message) }}</h1>
```

:::warning
在`Vue`模板中使用的属性和方法，都会从`Vue`的原型上面寻找，而不是`window`或者是别的，所以这段代码会报错。
:::

#### 1、`console`挂载到原型上面

```javascript
Vue.prototype.$log = console.log
```

:::tip
为了不影响正常的渲染，可以使用或运算符
:::

```HTML
<h1>{{ $log(message) || message }}</h1>
```

#### 2、`debugger`调试

说明:

```HTML
<h1>{{ $debugger }}</h1>
```

![vue debugger](https://mp1.oss-cn-beijing.aliyuncs.com/blog/content_debugger.png)

:::warning
这样调试器会进到这个断点这里，根本无法调试当前上下文
:::

那么我们应该怎么做呢:

:::tip
我们可以使用一个小技巧，将调试器放在一个**立即调用的函数表达式(`IIFE`)**里面
:::

```HTML
<h1>{{ (function(){ debugger })() }}</h1>
```

![vue debugger](https://mp1.oss-cn-beijing.aliyuncs.com/blog/vue_debugger.png)

:::warning
但是这也有个问题，断点进入之后，由于是个闭包，所以并不能调试当前组件的实例(`_vm`)
:::

所以我们可以这样:

```HTML
<h1>{{ (function() { debugger; message })(); || message }}</h1>
```

这样就可以调试`message`以及当前`vue`实例

![vue debugger](https://mp1.oss-cn-beijing.aliyuncs.com/blog/vue_debugger2.png)
