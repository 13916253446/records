### 禁用导入某个资源包

比如一些大的资源包，或者是引入的资源包，有可以替代的方案，可以使用`eslint`来禁用

:::tip
`moment.js`可以使用`date-fns`来替代
:::

```javascript
{
  "rules": {
    "no-restricted-imports": ["error", {
      "paths":  [{
        "name": "moment",
        "message": "Use date-fns or Luxon instead!"
      }]
    }]
  }
}
```

:::tip
`lodash`可以使用`lodash-es`来替代
:::

```javascript
{
  "rules": {
    "no-restricted-imports": ["error", {
      "name": "lodash",
      "message": "Use lodash-es instead!",
    }],
  }
}
```

[no-restricted-import](https://eslint.org/docs/rules/no-restricted-imports)

## 参考：

- [Javascript禁用导入具体资源](https://addyosmani.com/blog/disallow-imports/)
