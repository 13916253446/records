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

# 静态属性和方法

什么是静态属性静态方法：只能通过类本身来调用，不能通过类的实例来调用

```javascript
class Test {
    static getWeight () {
        return 160
    }
}
// 类本身可以调用
Test.getWeight() //160

// 实例不能调用
new Test().getWeight //undefined
```

这就说明几个问题：

-   静态方法之间可以相互调用，非静态方法就不能调用静态方法
    
    ```javascript
    class Test {
        static getWeight () {
            return 160
        }
        // 可以调用
        static getPerson () {
            return {
                weight: this.getWeigth()
            }
        }
        // 会抛出错误 Uncaught TypeError: this.getWeight is not a function
        getMan () {
            return {
                weight: this.getWeight()
            }
        }
    }
    ```
    
-   非静态方法可以通过类名来调用静态方法
    
    ```javascript
    class Test {
      static getWeight () {
        return 160
      }
      getMan () {
        return {
          weight: Test.getWeight()
        }
      }
    }
    ```
#### 通过`static`可以申明静态方法，那么怎么申明静态属性呢

我们知道申明原型属性才用偏门的方法`get`的方式，那么通过`static`结合`get`的方式就可以申明一个静态属性

```javascript
class Test {
    static get weight () {
        return 160
    }
}

// 类本身可以访问
Test.weight // 160

// 实例不可以访问
new Test().weight // undefined
```