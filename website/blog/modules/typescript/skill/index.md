### 巧用`Omit`

有时候我们需要复用一个类型，但是又不需要此类型内的全部属性，因此需要剔除某些属性，这个时候`Omit`就派上用场了。

```typescript
interface User {
  id: number,
  username: string,
  token: string
}

type UserWithoutToken = Omit<User, 'token'>
```

![typescript](https://raw.githubusercontent.com/13916253446/assets/master/public/screely-1568604218629%20(1).tjv91v9mx4a.png)

:::tip
这个方法在React中经常用到，当父组件通过props向下传递数据的时候，通常需要复用父组件的props类型，但是又需要剔除一些无用的类型。
:::


### 设置数组里面的值不能修改

使用`readonly`

```typescript
let arr: readonly number[] = [1, 2, 3, 4, 5, 6]

// ❎
arr[0] = 7
```

使用类型断言(`类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误`)

```typescript
let arr = [1, 2, 3, 4, 5, 6] as const
// 等价于
let arr: readonly number[] = [1, 2, 3, 4, 5, 6]

// ❎
arr[0] = 7
```

:::warning
注意:这里的值不能修改,指的是数组里面的值,而不是整个数组变量,也就是说这样是可以改变的

```typescript
arr = [7, 8, 9]
```
:::


### 使用类型别名

类型别名第一个作用是当作类型中的一个“变量”（类似于 `js`的`const`声明的变量）使用

```typescript
type ID = string

const detailId: ID = getId('detail')
const itemId: ID = getId('item')
```

使用类型别名可以实现很多复杂的类型，很多复杂的类型别名都需要借助关键字，我们先来了解一下几个常用的关键字：

#### extends

`extends`可以用来继承一个类，也可以用来继承一个 `interface`，但还可以用来判断有条件类型

```typescript
// T属于string类型那么W就是string类型，否则就是boolean类型
type W<T> = T extends string ? string : boolean

// ✅
type id: W<'1'> = '2'
// ❎
type id: W<1> = '2'
```

#### typeof

在`JS`中`typeof`可以判断一个变量的基础数据类型，在 `TS`中，它还有一个作用，就是获取一个变量的声明类型，如果不存在，则获取该类型的推论类型。

```typescript
interface Person {
    name: string,
    age: number,
    location?: string
}

const man: Person = {
    name: '崔海峰',
    age: 26,
    location: '湖北襄阳'
}

// 推断出man的申明类型是Person
type Man = typeof man //Person
// ✅
const child: Man = {
    name: '景',
    age: 2
}
// ❎
const child: Man = {
    height: 180
}
```

#### keyof

`keyof`可以用来取得一个对象接口的所有`key`值：

```typescript
interface Person {
    name: string;
    age: number;
    location?: string;
}

type K1 = keyof Person; // "name" | "age" | "location"


// 只能使用对象中的属性名
function man<O, K extends keyof O>(key: K, obj: O) {
    return obj[key]
}

interface IPerson {
    name: string,
    age: number
}
const obj: IPerson = {
    name: '崔海峰',
    age: 26
}
// ✅
man<IPerson, 'name'>('name', obj)
// ❎
man<IPerson, 'test'>('test', obj)
```

#### in

`in`用来遍历枚举类型

```typescript
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }
```

### 内置别名

为了更方便的使用,`typescript`内部实现了一些别名,可以直接使用

#### Partial `['pɑrʃəl]`

`Partial`的作用就是可以将某个类型里的属性全部变为可选项`?`

```typescript
interface IPerson {
    name: string,
    age: number
}

// ✅
const my: Partial<IPerson> = {
    name: '崔海峰'
}
// ❎
const my: IPerson = {
    name: '崔海峰'
}
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Partial<T> = { 
    [K in keyof T]?: T[K]
}
```
:::

#### Required

`Required`的作用刚好跟`Partial`相反，`Partial` 是将所有属性改成可选项，`Required` 则是将所有类型改成必选项`-?`

```typescript
interface IPerson {
    name: string,
    age?: number
}

// ✅
const my: IPerson = {
    name: '崔海峰'
}
// ❎
const my: Required<IPerson> = {
    name: '崔海峰'
}
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Required<T> = { 
    [K in keyof T]-?: T[K]
}
```
:::

#### Readonly

这个类型的作用是将传入的属性变为只读选项

```typescript
interface IPerson {
    name: string,
    age?: number
}

// ✅
const my: IPerson = {
    name: '崔海峰'
}
my.name = '小崔'
// ❎
const my: Readonly<IPerson> = {
    name: '崔海峰'
}
my.name = '小崔'
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Required<T> = { 
   readonly [K in keyof T]: T[K]
}
```
:::

#### Pick

这个类型则可以将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。

```typescript
interface IPerson {
    name: string,
    age: number
}

// ✅
const my: Pick<IPerson, 'name'> = {
    name: '崔海峰'
}
// ❎
const my: IPerson = {
    name: '崔海峰'
}
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Pick<T, K extends keyof T> = { 
   [key in K]: T[key]
}
```
:::

#### Record

该类型可以将`K`中所有的属性的值转化为`T`类型

```typescript
type ID = Record<'a' | 'b' | 'c', string> // { a: string, b: string, c: string }
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Record<K extends keyof any, T> = {
    [P in K]: T
}
```
:::

:::success
为什么`keyof any`等于`string`, `number`, `symbol`
> keyof any表示可用作对象索引的任何值的类型。目前，您可以使用string或number或symbol索引到对象

```typescript
let a: any
// ✅
a['1']
a[1]
a[Symbol()]
// ❎
a[{}]
```
:::

#### Exclude

将某个类型中属于另一个的类型移除掉

```typescript
type ID = Exclude<'a' | 'b', 'c', 'c', 'd', 'e'> //  'a' | 'b'
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Exclude<T, U> = T extends U ? never : T
```

never类型

> never类型表示的是那些永不存在的值的类型。never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
:::

#### Extract

就是从`T`中提取出`U`

```typescript
type ID = Extract<'a', 'b', 'c', 'a', 'b', 'd'> // 'a' | 'b' 
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Extract<T, U> = U extends T ? T : never
```
:::

#### returnType

该类型的作用是获取函数的返回类型。

```typescript
function test (name: string): Array<string> {
    return [name]
}

type tst = typeof test // (name: string) => Array<string>
type f = returnType<tst> // Array<string>
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
```
:::

### 自定义类型别名

下面是一些可能会经常用到，但是`TS` 没有内置的一些类型别名：

#### Omit `(忽略，删除)`

有时候我们想要继承某个接口，但是又需要在新接口中将某个属性给`overwrite`掉，这时候通过`Pick`和 `Exclude` 就可以组合出来 `Omit`，用来忽略对象某些属性功能：

```typescript
type ID = Omit<{ name: string, age: number }, 'name'>
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
```
:::

#### Mutable `(可变的,易变的)`

将`T`的所有属性的`readonly`移除

```typescript
interface IPerson {
    readonly name: string
}
type i = Mutable<IPerson>

// ✅
let man: i = { name: '崔海峰' }
man.name = '小崔'

// ❎
let man: IPerson = { name: '崔海峰' }
man.name= '小崔'
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}
```
:::

#### PowerPartial

内置的`Partial` 有个局限性，就是只支持处理第一层的属性，如果是嵌套多层的就没有效果了，不过可以如下自定义：

```typescript
interface Man {
    name: string,
}
interface IPerson {
    man: Man,
    age: number
}

// ✅
type i = PowerPartial<IPerson>
const obj = {
    name: {},
    age: 26
}
// ❎
const obj: IPerson = {
    name: {},
    age: 26
}
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type PowerPartial<T> = {
    // 如果是 object，则递归类型
    [U in keyof T]?: T[U] extends object
      ? PowerPartial<T[U]>
      : T[U]
};
```
:::

#### Deferred `(推迟, 延期的)`

相同的属性名称，但使值是一个 `Promise`，而不是一个具体的值：

```typescript
interface IPerson {
    name: string,
    age: number
}
type Deferred<T> = {
    [P in keyof T]: Promise<T[P]>;
}

// ✅
const obj: Deferred<IPerson> = {
    name: Promise.resolve('122'),
    age: Promise.reject(12)
}
// ❎
const obj: Deferred<IPerson> = {
    name: '1222'
    age: 1222
}
```

:::success
源码如下:
```typesript
//  node_modules/typescript/lib/lib.es5.d.ts
type Deferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};
```
:::

## 参考

- [TypeScript 强大的类型别名](https://juejin.im/post/5c2f87ce5188252593122c98)
