## Array.from()

从一个**类似数组**或**可迭代对象**中创建一个新的数组实例。

##### 类似数组：

所谓`ArrayLike`对象指具有数组某些行为的对象，表现出来的特征就是具有`length`属性。

- 比如: `带有length属性的对象`

```javascript
let obj = { length: 3 }

Array.from(obj) // [undefined, undefined, undefined]
```

- 比如：`NodeList`

```javascript
let doms = document.querySelectorAll('div')

let arr = Array.from(doms)
arr.push(2) // [div, 2]
```

- 比如：`arguments`

```javascript
function test () {
  Array.from(arguments).forEach(item => {
    // ....
  })
}

test(1, 2)
```