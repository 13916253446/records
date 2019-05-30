#### 1. 压缩`css`

`webpack`内置的压缩，或者是插件压缩，都无法压缩`css`内容，因为**当你导入css的时候，css-loader是把css内容解析成了字符串，而压缩器是基于AST的，没有办法分析字符串的，所有需要在loader编译阶段就压缩**

```css
/* comments.css */
.comment {
  color: black;
}
```
👇
```javascript
// minified bundle.js (part of)
exports=module.exports=__webpack_require__(1)(),
exports.push([module.i,".comment {\r\n  color: black;\r\n}",""]);
```

所以需要`css-loader`来负责压缩

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { minimize: true } },
        ],
      },
    ],
  },
};
```

:::warning
最新的`css-loader`已经不再支持`minimize`配置，可以采用[cssnano](https://cssnano.co/guides/)来压缩`css`
:::

#### 2. 设置`process.env.NODE_ENV`的值

一些大型的库，针对这个环境变量做了一些操作，比如说`Vue`，开发环境多了很多警告

```javascript
// vue/dist/vue.runtime.esm.js
// …
if (process.env.NODE_ENV !== 'production') {
  warn('props must be strings when using array syntax.');
}
// …
```

`React`根据环境变量加载指定的文件，以及一些警告

```javascript
// react/index.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

// react/cjs/react.development.js
// …
warning$3(
  componentClass.getDefaultProps.isReactClassApproved,
  'getDefaultProps is only used on classic React.createClass ' +
  'definitions. Use a static property named `defaultProps` instead.'
);
// …
```

在`webpack3`中需要`DefinePlugin`来定义

```javascript
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
```

在`webpack4`中可以通过`optimization.nodeEnv`来定义，如果不定义默认就是`mode`的值

```javascript
module.exports = {
  //...
  optimization: {
    nodeEnv: 'production'
  }
};
```

#### 3. 图片压缩

[image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)支持所有格式的图片压缩，特别方便

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // This will apply the loader before the other ones
        enforce: 'pre',
      },
    ],
  },
};
```

#### 4. 内联小的`js`以及`css`

`htmlWebpackPlugin`结合[html-webpack-inline-source-plugin](https://github.com/DustinJackson/html-webpack-inline-source-plugin)插件，内联`js`以及`css`

例如：内联`runtime`

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // Inline all files which names start with “runtime~” and end with “.js”.
      // That’s the default naming of runtime chunks
      inlineSource: 'runtime~.+\\.js',
    }),
    // This plugin enables the “inlineSource” option
    new InlineSourcePlugin(),
  ],
};
```

#### 5. 提高资源加载的优先级

利用[@vue/preload-webpack-plugin](https://github.com/vuejs/preload-webpack-plugin)提高首屏需要的资源，达到预加载的作用

- `preload`提高`runtime`,入口文件，以及入口`css`，以及首屏需要的字体

```javascrpt
module.exports = {
  plugins: [
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      }
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial',
      excludeHtmlNames: ['example.html']
    })
  ]
}
```