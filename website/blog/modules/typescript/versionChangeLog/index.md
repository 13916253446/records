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

### 参考

- [官方版本公告](https://devblogs.microsoft.com/typescript/)
