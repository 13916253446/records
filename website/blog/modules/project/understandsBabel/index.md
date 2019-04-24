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

## 参考：

- [corejs@3](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md)
- [babel更新日志](https://babeljs.io/blog/2019/03/19/7.4.0#code-placeholders-9364-https-githubcom-babel-babel-pull-9364)
- [babel 7 教程](https://blog.zfanw.com/babel-js/#x3-babel-runtime)
- [babel的polyfill和runtime的区别](https://segmentfault.com/q/1010000005596587)