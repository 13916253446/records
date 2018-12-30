# 一些要在`html`里面做些事情的插件要放在`html-webpack-plugin`之后

```powershell
TypeError: Cannot read property 'tapPromise' of undefined
    at compiler.hooks.compilation.tap.compilation
```

比如`add-asset-html-webpack-plugin`插件就要放在`html-webpack-plugin`之后

# `dll`编译出来的文件运行起来报错

```javascript
vendor is undefined
```

这是因为所有编译出来的脚本可以有多种规范(**libraryTarget**)：`var`， 'commonjs2'

那么要在`dll`配置里面设置输出规范

```javascript
output: {
    path: path.join(__dirname, '../'),
    filename: '[name].js',
    pathinfo: true,
    library: '[name]_dll',
    libraryTarget: "var"
}
```

然后要在`DllReferencePlugin`里面设置接收哪种规范

```javascript
new webpack.DllReferencePlugin({
  context: '..',
  manifest: require('../dll-manifest.json'),
  sourceType: 'var'
})
```