#### `|`运算符

也叫联合类型

```typescript
type th = string | number

// 可以是string类型也可以是数字类型
let a: th = '1'
let a: th = 1
```

#### `&`运算符

也叫交集类型

```typescript
interface IA {
    name: string
}
interface IB {
    age: number
}

type tAB = IA & IB // { name: string, age: number }
```

:::warning
联合类型和交集类型是有区别的 </br>
联合类型是只要满足其中一个类型就可以了:
```typescript
interface IA {
  name: string,
  age: number
}

interface IB {
  height: number,
  weight: number
}

// ✅可以是IA类型也可以是IB类型,
const ab: IA | IB = {
  height: 189,
  weight: 180
}

// ❎必须要满足其中一个类型
const ab: IA | IB = {
  name: '崔海峰'
  height: 189,
}

// ✅满足一个类型，另外的类型可以满足也可以不满足
const ab: IA | IB = {
  name: '崔海峰',
  age: 26
  height: 189
}
```
交集类型是两个类型都必须要满足

```typescript
interface IA {
  name: string,
  age: number
}

interface IB {
  height: number,
  weight: number
}

// ✅满足所有类型
const ab: IA & IB = {
  name: '崔海峰',
  age: 26
  height: 189,
  weight: 180
}

// ❎满足其中之一
const ab: IA | IB = {
  name: '崔海峰',
  age: 26
  height: 189
}
```
:::