## 哪些元素可以使用for...of遍历

> ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内

也就是说只要元素具有`Symbol.iterator`属性就可以使用`for..of`

比如`Array`类型:

```javascript
let a = []
a[Symbol.iterator]() // Array Iterator {}
```

比如`Object`类型不能使用

```javascript
let b = {}
b[Symbol.iterator] // undefined
```

又比如自定义了`Symbol.iterator`属性就可以使用了

```javascript
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        }
      }
    }
  }
}
```

#### 原生具备 Iterator 接口的数据结构如下。

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

## 遍历

`for..in`循环读取键名，`for..of`循环读取键值。如果要通过`for..of`循环，获取数组的索引，可以借助数组实例的`entries`方法和`keys`方法

```javascript
let arr = [10, 11, 12, 13]
for (let index in arr) {
  console.log(index) // 0, 1, 2, 3
  console.log(arr[index]) // 10, 11, 12, 13
}
```

提取索引以及值

```javascript
let arr = [10, 11, 12, 13]
for (let [ index, value ] in arr.entries()) {
  console.log(index) // 0, 1, 2, 3
  console.log(value)// 10, 11, 12, 13
}
```

**要注意数组实例的entries(),keys(),values()和Object.entries(),Object.keys(),Object.values()的区分**

数组也可以调用`Object`的`entries(),keys(),values()`，只不过获取的下标都是字符串类型的

```javascript
let arr = [10, 11, 12, 13]
for (let index of Object.keys(arr)) {
  console.log(index) // '0', '1', '2', '3'
}
```