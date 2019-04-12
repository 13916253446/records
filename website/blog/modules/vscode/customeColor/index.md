### 定制语法颜色
- 首先查看语法属于哪个`textMate`

> VS Code使用[TextMate](https://macromates.com/manual/en/language_grammars)语法将文本分解为标记列表

:::tip
查询`textMate`步骤：</br>
- 设置`inspectTMScopes`快捷键查看</br>
```json
{
  "key": "cmd+alt+shift+i",
  "command": "editor.action.inspectTMScopes"
}
- 然后对准需要设置的语法使用快捷键会看到属于哪个`textMate`
```
:::

- 然后在`settings.json`里面设置`editor.tokenColorCustomizations`

```json
{
  "textMateRules": [
    {
        "name": "Other",
        "scope": [
            "meta.objectliteral.js"
        ],
        "settings": {
            "foreground": "#FF0000"
        }
    }
  ]
}
```

### 如果要设置vscode某个栏位的颜色可以查看[theme-color](https://code.visualstudio.com/api/references/theme-color)

## 参考：

- [theme-color](https://code.visualstudio.com/api/references/theme-color)
- [textMate](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
