### `preset`是什么

`babel`将所有可以转换的语法都写成一个一个的插件，比如转换箭头函数需要` @babel/plugin-transform-arrow-functions`，转换`let,const`需要`@babel/plugin-transform-block-scoping`。

:::tip
如果是这样项目就需要配置很多的`plugin`，所以官方就把一些常用的插件封装起来，安装这个预设就相当于安装了这些插件，可以吧`Preset`理解为套餐，每个套餐里面打包一系列的插件，这样安装套餐就相当于安装了大量的插件。
:::

**可以查看项目下@babel/preset-env/data/plugin-features.js**文件查看当前`env`维护的插件列表，也可以直接通过[babel-env-plugins](https://github.com/babel/babel-preset-env/blob/master/data/plugin-features.js)来查看。

:::tip
我们可以封装一个`preset`给特定的环境使用比如APP端使用，例如[@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app)，文档可以查看[创建 Preset](https://www.babeljs.cn/docs/presets#%E5%88%9B%E5%BB%BA-preset)
:::

> 虽说浏览器的特性支持状况千差万别，但其实可以提炼出两类：</br>
> 1、大家都有，只是 A 语法与 B 语法的区别；</br>
> 2、不是大家都有：有的有，有的没有。

:::tip
babel 编译过程处理第一种情况 - 统一语法的形态，通常是高版本语法编译成低版本的，比如 ES6 语法编译成 ES5 或 ES3。而 babel-polyfill 处理第二种情况 - 让目标浏览器支持所有特性，不管它是全局的，还是原型的，或是其它。这样，通过 babel-polyfill，不同浏览器在特性支持上就站到同一起跑线。
:::

### `babel-polyfill`是什么

为什么需要 `polyfill` 这所谓的垫片？前面聊到 `@babel/preset-env` 时，不是说只要定义好我想支持的目标浏览器，`babel` 就能编译出能运行在目标浏览器上的代码吗？

:::tip
拿 `findIndex` 来说,IE 11不支持该方法，`babel`只能转译语法层面的，即使编译，不支持`findIndex`的浏览器还是不兼容，这时候就需要垫片`polyfill`：如果目标环境中已经存在 `findIndex`，我们什么都不做，如果没有，我们就在 `Array` 的原型中定义一个。可以看`findInex`的垫片如下：
:::

```javascript
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this);
      var len = o.length >>> 0;
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var thisArg = arguments[1];
      var k = 0;
      while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        k++;
      }
      return -1;
    }
  });
}
```

### `babel-runtime`是什么

我们拿 `Object.assign` 为例，剖析下 `babel-polyfill` 与 `babel-runtime` 的异同。

我们知道，IE 11 不支持 `Object.assign`，此时，我们有俩种候选方案：

1、引入 `babel-polyfill`，补丁一打，`Object.assign` 就被创造出来
2、配置 `@babel/plugin-transform-object-assign`

第二种方案中，`babel` 会将所有的 `Object.assign` 替换成 `_extends` 这样一个辅助函数。如下所示：

```javascript
Object.assign({}, {})
```

**编译成**

```javascript
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_extends({}, {});
```

:::warning
问题是，如果你的项目里有 100 个文件，其中有 50 个文件里写了 Object.assign，那么，坏消息来了，_extends 辅助函数会出现 50 次
:::

怎么办？我们自然而然会想到把 `_extends` 分离出去，然后在每个文件中引入 - 这正是 `@babel/runtime` 的作用：

```javascript
var _extends = require("@babel/runtime/helpers/extends");

_extends({}, {});
```

### 执行顺序

- Plugin 会运行在 Preset 之前。
- Plugin 会从前到后顺序执行。
- Preset 的顺序则 刚好相反(从后向前)。

:::tip
preset 的逆向顺序主要是为了保证向后兼容，因为大多数用户的编写顺序是 ['es2015', 'stage-0']。这样必须先执行 stage-0 才能确保 babel 不报错。因此我们编排 preset 的时候，也要注意顺序，其实只要**按照规范的时间顺序**列出即可。
:::

### 插件和预设配置项的格式

```javascript
"presets": [
  // 带了配置项，自己变成数组
  [
    // 第一个元素是名字
    "env",
    // 第二个元素是对象，也就是配置项
    {
      "module": false
    }
  ],
  // 不带配置项，直接列出名字
  "stage-0"
]
```

## 总结几点：

:::tip
1、`presets`实际上就是一系列的插件集合</br></br>
2、`babel-runtime`实际上和`babel-polyfill`干的事情是一样的，但他不会污染全局命名空间和原型</br></br>
3、`babel-runtime`是一些垫片也就是实现的方法，而分离这些方法，是需要插件支持的(`transform-runtime`)所以，这两个必须一起使用</br></br>
4、`babel-runtime`既然是垫片就必须是项目依赖('dependencies')</br></br>
5、虽然`babel-runtime`和`babel-polyfill`干的事情差不多，但是比如`myArray.includes(1)`这些实例方法，`babel-runtime`是无能为力的。只能使用`babel-polyfill`</br></br>
6、`babel-polyfill` 与 `babel-runtime` 的一大区别，前者改造目标浏览器，让你的浏览器拥有本来不支持的特性；后者改造你的代码，让你的代码能在所有目标浏览器上运行，但不改造浏览器
:::


## 参考：

- [corejs@3](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md)
- [babel更新日志](https://babeljs.io/blog/2019/03/19/7.4.0#code-placeholders-9364-https-githubcom-babel-babel-pull-9364)
- [babel 7 教程](https://blog.zfanw.com/babel-js/#x3-babel-runtime)
- [babel的polyfill和runtime的区别](https://segmentfault.com/q/1010000005596587)