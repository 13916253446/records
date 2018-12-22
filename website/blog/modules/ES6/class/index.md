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

# super

-   为什么要把`super`调用放在第一行，或者说为什么要在使用`this`之前，调用`super`方法
    
    `super`相当于调用父类的构造函数`constructor`，如果不先调用`super`方法那么父类就没有执行构造函数，也就是不能访问父类的实例方法和属性
    
    ```javascript
    class Parent {
        constructor () {
            this.name = '崔海峰'
        }
    }
    
    class Child {
        constructor () {
            // 此时父类没有实例化，也就是说实例属性name不存在，而getName又访问实例属性name就会抛出错误
            this.getName()
            super()
        }
        getName () {
            return this.name
        }
    }
    ```
    

##### 总结：实现继承的时候，子类如果定义了`constructor`方法，那么必须调用而且必须最先调用`super`方法实例化父类

-   子类没有定义`constructor`方法
    
    子类没有定义`constructor`方法，相当于自动调用了`super`方法，必须会把实例化子类时候传递的参数，一样的传递给父类的构造函数`constructor`；定义了`constructor`方法，那么就必须调用`super`方法
    
    ```javascript
    class Parent {
        constructor (name) {
            this.name = name
        }
    }
    
    class Child {
        getWeigth () {
            return 160
        }
    }
    // Child没有定义constructor方法，相当于自动调用了super('崔海峰')
    new Child('崔海峰') // { name: '崔海峰'}
    
    // 必须调用而且最先调用super方法
    class Child {
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        constructor () {
            this.getWeight()
        }
    }
    ```
    

# 访问父类的静态方法或者属性

-   直接通过父类变量访问
    
    ```javascript
    class Parent {
        static getName () {
            return '崔海峰'
        }
    }
    
    class Child extends Parent {
        getPerson () {
            return {
                name: Parent.getName()
            }
        }
    }
    ```
    
-   通过`super`访问
    
    `super`对象(不是`super`方法)只能在静态方法里面访问，所以通过`super`访问父类的静态数据也只能在子类的静态方法里面使用
    
    ```javascript
    class Parent {
        static getName () {
            return '崔海峰'
        }
    }
    
    // 子类的静态方法可以访问super
    class Child extends Parent {
        static getPerson () {
            return {
                name: super.getName()
            }
        }
    }
    
    // 子类的原型方法不能访问super
    class Child extends Parent {
        // TypeError: (intermediate value).getName is not a function
        getPerson () {
            return {
                name: super.getName()
            }
        }
    }
    ```