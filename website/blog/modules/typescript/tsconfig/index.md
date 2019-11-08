### declaration

用来让我们从源文件`.ts和.tsx和.js`文件中生成`.d.ts`文件，这样就允许其他项目进行类型检查

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

示例: 1. [comlink项目打包](https://bd288c84-407c-40c1-a114-dd8efcc22061.ws-ap01.gitpod.io/#/workspace/comlink)

### strict

当`Typescript`严格模式设置为`on`时，它将使用`strict`族下的严格类型规则对项目中的所有文件进行代码验证。规则是：

<table width="657" style="width: 654px;"><thead style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);box-sizing: border-box !important;overflow-wrap: break-word !important;"><th style="word-break: break-all;border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);max-width: 100%;text-align: left;overflow-wrap: break-word !important;box-sizing: border-box !important;">规则名称</th><th style="word-break: break-all;border-top-width: 1px;border-color: rgb(204, 204, 204);background-color: rgb(240, 240, 240);max-width: 100%;text-align: left;overflow-wrap: break-word !important;box-sizing: border-box !important;">解释</th></tr></thead><tbody style="max-width: 100%;border-width: 0px;border-style: initial;border-color: initial;box-sizing: border-box !important;overflow-wrap: break-word !important;"><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);box-sizing: border-box !important;overflow-wrap: break-word !important;"><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;"><code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">noImplicitAny</code></td><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;">不允许变量或函数参数具有隐式<code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">any</code>类型。</td></tr><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);box-sizing: border-box !important;overflow-wrap: break-word !important;"><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;"><code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">noImplicitThis</code></td><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;">不允许<code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">this</code>上下文隐式定义。</td></tr><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);box-sizing: border-box !important;overflow-wrap: break-word !important;"><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;"><code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">strictNullChecks</code></td><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;">不允许出现<code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">null</code>或<code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">undefined</code>的可能性。</td></tr><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);box-sizing: border-box !important;overflow-wrap: break-word !important;"><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;"><code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">strictPropertyInitialization</code></td><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;">验证构造函数内部初始化前后已定义的属性。</td></tr><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);box-sizing: border-box !important;overflow-wrap: break-word !important;"><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;"><code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">strictBindCallApply</code></td><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;">对<code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">bind, call, apply</code>更严格的类型检测。</td></tr><tr style="max-width: 100%;border-width: 1px 0px 0px;border-right-style: initial;border-bottom-style: initial;border-left-style: initial;border-right-color: initial;border-bottom-color: initial;border-left-color: initial;border-top-style: solid;border-top-color: rgb(204, 204, 204);background-color: rgb(248, 248, 248);box-sizing: border-box !important;overflow-wrap: break-word !important;"><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;"><code style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">strictFunctionTypes</code></td><td style="word-break: break-all;border-color: rgb(204, 204, 204);max-width: 100%;overflow-wrap: break-word !important;box-sizing: border-box !important;">对函数参数进行严格逆变比较。</td></tr></tbody></table>

:::warning
浏览器自带事件如何处理:</br>
```typescript
interface ChangeCheckboxEvent extends MouseEvent {
  target: HTMLInputElement
}

function onChangeCheckbox (e: ChangeCheckboxEvent) {
  e.preventDefault()
  const value = e.target.checked
  validateCheckbox(value)
}
```
:::

### 参考

- [Typescript 严格模式有多严格？](https://mp.weixin.qq.com/s/49vrAKTMVmVsJyFE7r10pQ)
