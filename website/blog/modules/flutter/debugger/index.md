### 分析代码

检查代码漏洞, 代码可能出错的地方。Dart分析器大量使用了代码中的类型注释来帮助追踪问题。我们鼓励您在任何地方使用它们（避免var、无类型的参数、无类型的列表文字等），因为这是追踪问题的最快的方式。

```shell
flutter analyze
```

### `print`

使用`print`可以打印数据, 在控制台中可以查看

```dart
int num = 123456;
print(num);
```

:::success
可以通过执行`flutter logs`命令实时的查看打印日志
:::

### `devTools`

vscode安装`dart`插件, 然后直接`F5`调试打开可视化界面。
