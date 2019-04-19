## npm调试技巧

### 1. 直接安装相对路径

```shell
npm install  ~/Documents/演示项目/analyse
```

最终生成`package.json`:

```json
"dependencies": {
  "analyse": "file:../analyse",
  "vue": "^2.5.17",
  "vue-router": "^3.0.1"
}
```

### 2. 使用软链

**什么是软链：**

比如说我创建了一个 `/path/link.js` 到 `/path/file.js` 的软链接，则当我访问 `link.js` 的时候，实际上相当于访问 `file.js` 。如果我把 `file.js` 删除的话，再去访问 `link.js` 就会报错。

```shell
# 首先进入项目node_modules目录下
cd path/to/my-project/node_modules

# 创建软链
ln -s path/to/my-utils my-utils
```

### `npm link`创建软链

```shell
# 指定本地目录
npm link ~/Documents/演示项目/analyse
```

也可以分步骤的添加：

```shell
# 先到模块目录，把添加到link全局
cd path/to/my-utils
npm link

# 再去项目目录通过包名来 link
cd path/to/my-project
npm link my-utils
```

### 调试`cli`

```shell
# 先到脚手架目录，link到全局
cd path/to/cli
npm link

# 直接使用脚手架命令
egg-init
```

### 取消软链

```shell
npm unlink my-utils
```

## 参考：

- [你所不知道的模块调试技巧](https://github.com/atian25/blog/issues/17)