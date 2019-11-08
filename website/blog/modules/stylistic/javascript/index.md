### 三元运算符

复杂的三元运算符可以采用嵌套的形式看得更清晰

```javascript
const obj = { data: { name: '崔海峰' } }

const name = obj.data
  ? obj.data.name
    ? obj.data.name
    : '匿名'
  : '匿名'
```
