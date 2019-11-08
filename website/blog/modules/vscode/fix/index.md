### 更新vscode的语言版本

比如说当前项目用的是`typescript3.7`, 但是因为`vscode`内置的`typescript`还没有更新到`3.7`, 这样就会导致一些语法在`vscode`上面显示错误。

从拓展程序下载[JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)来选择语言版本来支持。

### vscode无法定位到别名的路径

比如`import PullDownRefresh from '@/components/pullDownRefresh/pull-down-refresh.vue'`无法直接定位进去。

解决方案: 在项目更目录添加`jsconfig.json`或者`tsconfig.json`配置`compilerOptions.path`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": [
    "node_modules"
  ]
}

```
