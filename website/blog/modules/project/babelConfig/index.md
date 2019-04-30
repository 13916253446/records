### 1、配置`browsers`

- **可以直接在`preset`里面配置**

```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8",
            "Android >= 4.0",
            "IOS >= 8.0"
          ]
        },
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-external-helpers",
    ["@babel/plugin-transform-runtime", {
       "corejs": 3
     }]
   ]
}
```

- **也可以直接在package.json里面配置`browserslist`**

```json
{
  "name": "records",
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8",
    "Android >= 4.0",
    "IOS >= 8.0"
  ]
}
```

:::tip
在`package.json`里面配置了`browserslist`，就不需要在`.babelrc`里面配置`targets`</br>
```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}
```
:::

:::warning
配置的浏览器不区分大小写: 如`Android >= 8.0` 和`android >= 8.0`都是可以的</br>
具体的浏览器配置文档[可以查看](https://github.com/browserslist/browserslist)
:::