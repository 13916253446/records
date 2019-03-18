#### 哪些遍历数组的方法可以退出循环

##### 1. for循环
- for
- for...of
- for...in

以上几种都可以使用`break`,`continue`,`return`等方法跳出循环

- break是中断的意思，跳出整个循环体

```javascript
let arr = [10, 11, 12, 13]

for (let value of arr) {
  if (value === 11) break
  console.log(value)
}
// 只会输出10
```

- continue是继续的意思，跳出此轮循环，继续下一轮循环

```javascript
let arr = [10, 11, 12, 13]

for (let value of arr) {
  if (value === 11) continue
  console.log(value)
}
// 除了11都会输出
```

- return是返回的意思，会中断函数的执行，也就是说return 必须使用在函数体内，否则就会报错，在循环体内使用return同样是终端函数的执行

```javascript
let arr = [10, 11, 12, 13]

function test () {
  for (let value of arr) {
    if (value === 11) return
    console.log(value)
  }
  console.log('完成')
}

test()

// 只会输出10
```

##### 2. find

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值，只要循环中返回`true`，就会退出遍历

```javascript
let arr = [10, 11, 12, 13]
let choosed = arr.find(value => value === 11)

// 遍历两次，最终choosed的值是11
```

##### 3. findIndex

`findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1

```javascript
let arr = [10, 11, 12, 13]
let choosed = arr.find(value => value === 11)

// 遍历两次，最终choosed的值是1
```

##### 4. some

`some()` 方法测试是否至少有一个元素通过由提供的函数实现的测试，只要循环中返回`true`，就会退出遍历，最终返回的是个`Boolean`类型的值

```javascript
let arr = [10, 11, 12, 13]
let choosed = arr.find(value => value === 11)

// 遍历两次，最终choosed的值是true
```