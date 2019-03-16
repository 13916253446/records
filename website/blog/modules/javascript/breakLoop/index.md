#### 哪些遍历数组的方法可以退出循环

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

