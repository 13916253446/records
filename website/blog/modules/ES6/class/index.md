# 定义原型上面的属性

在`constructor`里面定义的属性和方法都是实例属性和方法，什么事实例属性和方法呢，就是说在`new`的时候都会重新执行和创建这些实例和方法

```javascript
class Test {
    constructor (name) {
        // 实例属性
        this.name = name
        // 实例方法
        this.getAge = () => 25
    }
    // 原型上面的方法
    getWeigth () {
        return 160
    }
}
```

实例化之后：

![](https://shadow.hfcui.com/blog/screely-1545396838875.png)

#### 那么怎么定义原型属性呢

-   直接prototype上面定义
    
    ```javascript
    Test.protoType.weigth = 160
    ```
    
-   通过`get`方式定义
    
    ```javascript
    class Test {
        constructor (name) {
            this.name = name
            this.getAge = () => 25
        }
        getWeigth () {
            return 160
        }
        get weight () {
            return 160
        }
    }
    ```
    

实例化之后：

![](https://shadow.hfcui.com/blog/screely-1545397701529.png)