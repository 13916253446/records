# Chrome控制台书写换行

默认`enter`是执行输入的代码，可使用组合键`enter`+`shift`来实现在控制台换行输入

## console.time()和console.timeEnd()方法
**Chrome等浏览器自带一个console.time()和console.timeEnd()方法，能够用更简单的代码实现上述功能。**

**当需要统计一段代码的执行时间时，可以使用console.time方法与console.timeEnd方法，其中console.time方法用于标记开始时间，console.timeEnd方法用于标记结束时间，并且将结束时间与开始时间之间经过的毫秒数在控制台中输出。这两个方法的使用方法如下所示。**
```javascript
console.time(label)
console.timeEnd(label)
```
**这两个方法均使用一个参数，参数值可以为任何字符串，但是这两个方法所使用的参数字符串必须相同，才能正确地统计出开始时间与结束时间之间所经过的毫秒数。**
```javascript
console.time("Array initialize");
var arr = new Array(1000000),
    len = arr.length,
    i;

for (i = 0; i < len; i++) {
    arr[i] = new Object();
};
console.timeEnd("Array initialize"); // 输出: Array initialize: 266.000ms
```

# 分析代码片段使用的cpu情况

`console.profile`和`console.profileEnd`用来分析代码片段的使用cpu情况，使用方法和`console.time`一样，只是在查看搜集到的数据的时候要在**Javascript Profiler面板**查看，在控制台三个点菜单->更多工具->Javascript Profiler