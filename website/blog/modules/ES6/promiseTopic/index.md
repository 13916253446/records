# `.then`方法默认返回的就是一个`Promise`

```javascript
let model = new Promise((resolve) => {
    resolve(1)
})
.then(res => {
    console.log(res)
})

model // Promise
```

实现原理：

```javascript
class Promise {
    then (callback) {
        if (this.status === 'padding') {
            return new Promise(() => {})
        }
        if (this.status === 'resolved') {
            return new Promise(() => {})
        }
        if (this.status === 'rejected') {
            return new Promise(() => {})
        }
    }
}
```

可以看到执行`then`方法，无论什么状态都返回一个`Promise`对象

# `.then`方法也可以手动返回一个`Promise`

```javascript
.then(res => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('1秒钟之后执行')
        }, 1000)
    })
})
.then(result => {
    console.log(result) // 1秒钟之后执行
})
```

实现原理：

```javascript
class Promise {
    then (onResolved, onRejected) {
        let promise2
        if (this.status === 'padding') {
            return promise2 = new Promise((resolve, reject) => {
                // 当前还不确定这个Promise的状态，所以我们这里把成功和失败的回调都放到相应的回调队列里面，即使都放进去，最终也只会执行一个，因为Promise的状态最终要么是resolved，要么就是rejected
                 this.onResolvedCallback.push(value => {
                     try {
                         // 执行成功回调
                         var x = onResolved(this.data)
                         //! 判断成功回调的返回值是否是个Promise
                         if (x instanceof Promise) {
                             x.then(resolve, reject)
                         }
                      } catch (e) {
                      }
                 })
            })
        }
    }
}
```

也就是`.then`会创建一个`Promise`，这个`Promise`里面会判断`then`传入的回调函数是否是个`Promise`，如果是个`Promise`，那么就会等回调函数的里面的`Promise`执行完毕，才调用`then`创建的`Promise`的`onResolved`或者`onRejected`

# 使用`Promise.resolve`直接产生`resolved`状态的`Promise`

```javascript
let obj = Promise.resolve(1)
```

实现原理：

```javascript
class Promise {
    static resolve (val) {
        return new Promise(resolve => {
            resolve(val)
        })        
    }
}
```

可以看到是直接返回一个`Promise`，内部调用`resolve`，将状态改变成`resolved`状态

# 使用`Promise.reject`直接产生rejected`状态的`Promise`

```javascript
let obj = Promise.resolve(1)
```

实现原理：

```javascript
class Promise {
    static resolve (val) {
        return new Promise((resolve, reject) => {
            reject(val)
        })        
    }
}
```

可以看到是直接返回一个`Promise`，内部调用`reject`，将状态改变成`rejected`状态

# `Promise.all`

-   接收一个`promise`数组
    
-   返回一个新的`Promise`，将所有的`resolve`结果放进一个数组里面
    
-   只要有一个 `promise` 变成`rejected`，这个新的 `promise` 将会被 `rejected`
    
    ```javascript
    Promise.all([ new Promise(resolve => {
        resolve(1)
    }), new Promise((resolve, reject) => {
        reject(2)
    }) ])
    .then(res => {
        // 这里的代码不会执行
    })
    .catch(e => {
        // 代码会执行到这里
        console.lor(e) // 2
    })
    ```

# `.catch`

-   也会返回一个`resolved`状态的`Promise`，除非再手动抛出一个错误
    
    ```javascript
    let promise = new Promise((rel, rej) => {
        rej('抛出错误')
    })
    let promise2 = promise.catch(err => {
        return err    
    })
    .then(res => {
        res // 抛出错误
    })
    
    // 手动抛出错误
    let promise2 = promise.catch(err => {
         return Promise.reject(err)
     })
    .then(res => {
         // 不会执行
    })
    .catch(err => {
        err //执行到了这里
    })
    ```
    
-   多个`Promise`嵌套，只需要一个`catch`方法就可以捕获
    
    只要前面的`Promise`发生错误，就会直接进入这个`Promise`后面的`catch`（**不仅限于紧跟后面的**）
    
    ```java
    new Promise((res, rej) => {
        res(1)
    })
    .then(res => {
        throw new Error(2)
    })
    .then(res => {
        // 不会执行到这里
    })
    .catch(err => {
        // 会执行到这里，catch能捕获住前面所有的Promise发生的错误
    })
    ```
    
-   `.catch`和`onRejected`不能同时捕获到错误，而且是`onRejected`的优先级高于`catch`，可以理解为`onRejected`带代码逻辑在`catch`之前，只要是`.catch`能捕获到的错误，`onRejected`都能捕获到，无论是代码逻辑错误，还是通过`reject`抛出的错误
    
    ```javascript
    let promise = new Promise((res, rej) => {
        rej(1)
    })
    let promise2 = new Promise(() => {
        throw new Error(1)
    })
    
    // 第一种情况
    promise
    .then(() => {}, function onRejected () {
        // 代码会执行到这里
    })
    .catch(err => {
        // 代码不会执行到这里
    })
    
    // 第二种情况：抛出的错误也可以被onRejected捕获到
    promise2
    .then(() => {}, function onRejected () {
         // 代码会执行到这里
    })
    .catch(err => {
         // 代码不会执行到这里
    })
    
    // 第三种情况： onRejected没有在紧跟着的后面也可以捕获到错误
    promise
    .then(() => {})
    .then(() => {}, function onRejected () {
        // 代码会执行到这里
    })
    .catch(err => {
        // 代码不会执行到这里
    })
    ```
    
-   内部`Promise`的错误，外部是无法捕获的
    
    因为`try catch`只能捕获同步错误，所有内部的Promise，外部是无法捕获的
    
    ```javascript
    new Promise((res,rej) => {
        return Promise.reject(1)
    })
    .then(() => {}, function onRejected () {
        // 无法捕获到错误
    })
    .catch(err => {
        // 同样也无法捕获到错误
    })
    
    new Promise(() => {
        return Promise.resolve(1)
    })
    .then(res => {
        // 同样不会执行，因为内部的promise，外部是无法捕获到的
    })
    .catch(err => {
        // 同样也不会执行
    })
    ```
-   正确的理解内部`Promise`
    
    ```java
    new Promise((resolve) => {
        resolve(1)    
    })
    .then(res => {
         return Promise.reject(res)
    })
    .catch(err => {
        // 会执行到这里的
    })
    ```
    
    `.then`会立马执行传入的回调，如果回调的执行结果是`Promise`那么直接返回这个`Promise`，如果不是将创建一个`Promise`,返回出去,所以这里的`Promise`是属于外部的