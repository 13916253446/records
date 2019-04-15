### 实用快捷键

:::tip
向下重开一行
:::

```shell
cmd + enter
```

:::tip
向上重开一行
:::

```shell
shift + cmd + enter
```

:::tip
删除一行
:::

```shell
cmd + x
# 或者 (kill: 杀死)
shift + cmd + k
```

:::tip
把代码往上移动一行
:::

```shell
option + 🔼
```

:::tip
把代码往下移动一行
:::

```shell
option + 🔽
```

:::tip
往上复制一行代码
:::

```shell
shift + option + 🔼
```

:::tip
往下复制一行代码
:::

```shell
shift + option + 🔽
```

:::tip
搜索
:::

```shell
cmd + f
```

:::tip
在项目中搜索
:::

```shell
shift + cmd + f
```

:::tip
自定义代码片段: 打开 `vsocde` 的 `首选项` > `用户代码片段` ，选择代码片段文件为 vue.json。输入以下内容。
:::

```json
{
  "Vue component": {
    "prefix": "vuec",
    "body": [
      "<template>",
      "\t$1",
      "</template>",
      "<script>",
      "export default {",
      "\t",
      "}",
      "</script>",
      "<style lang=\"scss\" scoped>",
      "</style>",
      ""
    ]
  }
}
```

保存后，新建一个`Test.vue`，输入`vuec`,可以快速插入代码块

### 参考:

- [学几招 vscode 技巧](https://zhuanlan.zhihu.com/p/36159476?utm_source=wechat_session&utm_medium=social&utm_oi=692679874405502976)
- [定义自己的代码片段（snippet）](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
