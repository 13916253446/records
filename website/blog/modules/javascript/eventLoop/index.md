## 简述事件循环模型

主线程在执行完**同步任务**之后，就会去检查**微任务队列(microTask)**，如果**微任务队列(mircoTask)**为空，就会检查**宏任务(Task)**，如果**微任务队列(microTask)**不为空，就会一次性执行完队列里面所有的**微任务**。
每次单个**宏任务**执行完毕后，就会检查**微任务队列**，如果队列有任务，就会执行完所有的**微任务**。

- 看下第一个示例：

```javascript
console.log('script start');

setTimeout(function timeFn() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function fn1() {
  console.log('promise1');
}).then(function fn2() {
  console.log('promise2');
});

console.log('script end');
```

1. **同步任务执行，分配微任务，宏任务至各自的队列**

```javascript
微任务(microTask): fn1

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end'
```

2. **主线程执行完毕，检查微任务队列，微任务队列有任务，就执行微任务队列**

执行微任务队列的代码

```javascript
微任务(microTask): fn1 fn2

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end', 'promise1'
```

微任务fn1加入主线程开始执行，打印`promise1`，返回一个新的`Promise`值为`undefined`，加入微任务

3. **主线程执行执行完毕，检查微任务队列是否有任务**

```javascript
微任务(microTask): fn2

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end', 'promise1', 'promise2'
```

fn1执行完毕，从微任务队列移除掉，fn1作为同步任务执行完毕，检查微任务队列里面有fn2,于是将fn2加入主线程，开始执行，打印promise2，主线程执行完毕后，检查微任务队列，发现微任务没有了，就开始检查宏任务

4. **将宏任务timeFn加入主线程开始执行**

```javascript
微任务(microTask):

宏任务(Task): timeFn

JS Stack: script

Log: 'script start', 'script end', 'promise1', 'promise2', 'setTimeout'
```

移除执行完毕的fn2，加入主线程的宏任务开始执行，打印setTimeout，所有的代码执行完毕

### 调试



### 参考

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[一次弄懂Event Loop](https://mp.weixin.qq.com/s/a32ZJComEggECDb2cXl5DQ)