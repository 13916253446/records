### 哪些遍历的方式可以实现串行的方式

异步函数在循环中执行，而且要以串行的方式，只能用`for`,`for...in`,`for...of`这几种方法才可以，因为别的遍历方式都是在`for`的基础上重构的，没有办法，让重构的方法变成`async`方法

这几种原生遍历的方式是可以的实现串行的
```javascript
let arr = [0, 1, 2, 3]

async function test () {
  for (let item of arr) {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(item)
        resolve()
      }, 1000)
    })
  }
  console.log('完毕')
}

test()
```

看下`forEach`的实现方式就知道这些重构过后的遍历，是不可以实现串行异步的

```javascript
var arr = [1, 2, 3, 4, 5]
Array.prototype.forEach = function(fn){
    var len = this.length;
    for(var i = 0; i < len; i ++){
        //将元素传给回调函数
        fn(this[i],i);
    }
}
arr.forEach(function (ele, index){
    console.log(ele, index);
})
```

可以看到，无论你传递给`forEach`的回调函数，是不是异步的函数，都将在内部遍历的时候，持续被调用，不存在等待的现象

### 实现并行执行

要实现并行执行，而且需要知道执行完毕的时机，基本上所有的遍历配合`Promise.allo`都可以实现

```javascript
async function test () {
  let promises = arr.map(delayedLog)
  await Promise.all(promises)
  console.log('完毕')
}
```