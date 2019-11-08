### 3.7变化

- 增加`Optional Chaining`(**可选链接**)

```typescript
const name = obj?.data?.name
```

- 增加`Nullish Coalescing`(**空值合并**)

双问号操作符：如果值是`null`或`undefined`时取默认值, 其它情况就是值本身。

```typescript
// 之前
const name = ''

const nm = name || '崔海峰' // 崔海峰

// 现在
const nm = name ?? '崔海峰' // ''

// 等价于
const nm = name === null || name === undefined ? '崔海峰' : name
```

- 增加`Assertion Functions`(**断言方法**)

暂时不理解

- 增加统一的忽略类型检查`@ts-nocheck`

过去只有在存在`checkJs` 时，`JavaScript`源文件中的这一注释才会被认可。现在统一的在文件顶部添加`//@ts-nocheck`即可

- `declaration`兼容`js`

TypeScript 中的 --declaration 标志允许我们从源 TypeScript 文件（如.ts 和.tsx 文件）生成.d.ts 文件（声明文件）。这些.d.ts 文件很重要，因为它们允许 TypeScript 对其他项目进行类型检查，而无需重新检查 / 构建原始源代码。出于相同的原因，使用项目引用时 需要 此设置。

不幸的是，–declaration 不适用于 --allowJs 之类的设置，无法混合使用 TypeScript 和 JavaScript 输入文件。这是一个令人沮丧的限制，因为它意味着用户即使在迁移代码库时也无法使用 --declaration，即使使用 JSDoc 注释也是如此。TypeScript 3.7 对此做了更改，并允许将这两种功能混合使用！

使用 allowJs 时，TypeScript 将尽可能理解 JavaScript 源代码，并将其以等效表示形式保存到.d.ts 文件中。

### 参考

- [官方版本公告](https://devblogs.microsoft.com/typescript/)
