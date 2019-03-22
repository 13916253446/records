#### 1. 可选链式调用

目前 TC39 提案中有一个功能叫『可选链式调用』。这个新的运算符看起来像这样

```javascript
console.log(favorites?.video?.shows[0]); // 'The Simpsons'
console.log(favorites?.audio?.audiobooks[0]); // undefined
```

解决深层对象读取`key`的问题

最新的`babel`已经支持，需要安装插件[@babel/plugin-proposal-optional-chaining
](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)

:::warning
可惜不能在`Vue`模板引擎里面使用，因为模板引擎不支持，也[没有打算支持](https://github.com/vuejs/vue/issues/8610#issuecomment-410856049)
:::

当然也可以用`lodash/get`解决深层对象的问题

```javascript
import lodashGet from 'lodash/get'
Vue.prototype.$get = lodashGet

{{ $get(a, 'b.c.d') }}
```