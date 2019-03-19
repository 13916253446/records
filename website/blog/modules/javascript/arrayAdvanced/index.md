##### 1. 扁平化n维数组

```javascript
[1,[2,3]].flat(2) //[1,2,3]

[1,[2,3,[4,5]].flat(3) //[1,2,3,4,5]

[1[2,3,[4,5[...]].flat(Infinity) //[1,2,3,4...n]
```

##### 2. 数组去重

```javascript
let arr = [1, 2, 3, 1, 2]

[...new Set(arr)]
Array.from(new Set(arr))
```

##### 3. 排序

```javascript
let arr = [1, 2, 4, 3]
let arrModel =[{ id: 1 }, { id: 2 }, { id: 4 }, { id: 3}]

arr.sort() // [1, 2, 3, 4]默认是升序
arr.sort((a, b) => b - a) // [4, 3, 2, 1] 降序
arrModel.sort((obj1, obj2) => obj1.id - obj2.id) // 升序 [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
```

`arr.sort((a, b) => b - a)`回调函数执行三次

1. a = 2; b = 1
2. a = 3; b = 2
3. a = 4; b = 3

回调函数的返回值，决定了哪个在前面，哪个在后面，返回`true`说明`a`在后面，`b`在前面

##### 4. 最大值

```javascript
let arr = [1, 2, 3, 4]

Math.max(...arr)
Math.max.apply(this, arr)
```