# 如何测量Vue.js运行时性能

-   打开`performance开关`
    
    ```javascript
    const isDev = process.env.NODE_ENV !== "production"
    Vue.config.performance = isDev
    ```
    

这将激活`Vue`在内部用于标记组件性能的[User Timing API](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API)。

-   打开它并点击`Chrome DevTools`上的性能标签中的重新加载按钮：
    
    ![](http://mp1.oss-cn-beijing.aliyuncs.com/featured.png)

# 如何利用performance测量代码性能

```javascript
// 执行前做个标记
const nameStart = 'start'
window.performance.mark(nameStart)
for (let i = 0; i <= 100000; i ++) {}
// 执行后做个标记
const nameEnd = 'end'
window.performance.mark(nameEnd)

// 搜集数据
const name = '测量'
window.performance.measure(name, nameStart, nameEnd)
```

### 查看搜集到性能数据

-   利用`Chrome DevTools`查看`performance`栏下的`User Timing`
    
-   利用`js`
    
    ```javascript
    // 看下保存起来的测量 measure
    let measure = window.performance.getEntriesByType('measure')
    console.log(measure)
    ```
    

# 参考

-   [初探 performance – 监控网页与程序性能](http://www.alloyteam.com/2015/09/explore-performance/)