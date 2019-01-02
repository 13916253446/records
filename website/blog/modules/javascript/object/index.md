# 检测对象上是否有某属性

| 方法 | 是否包括原型链 | 是否包括不可枚举的属性 |
| --- | --- | --- |
| in | true | true |
| hasOwnProperty | false | true |

-   `in` 操作符
    
    ```javascript
    let obj = { name: '崔海峰' }
    
    // 判断的时候也包括原型链上面的方法
    obj._proto_ = { age: 26 }
    'age' in obj //true
    
    // 判断的时候也包括不可枚举的属性
    Object.defineProperty(obj, 'weight', {
        value: 180,
        enumerable: false
    })
    'weight' in obj // true
    ```
    
-   `hasOwnProperty`方法
    
    ```javascript
    // 判断的时候不包括原型链上面的方法
    obj._proto_ = { age: 26 }
    obj.hasOwnProperty('age') //false
    
    // 判断的时候也包括不可枚举的属性
    Object.defineProperty(obj, 'weight', {
         value: 180,
         enumerable: false
    })
    obj.hasOwnProperty('weight') // true
    ```
# `Object.create`

-   可以创建一个干净的对象
    
    默认申请一个对象，会继承很多最基础的`Object`上面的方法，比如`hasOwnProperty`等方法
    
    ```javascript
    let obj = {}
    obj.hasOwnProperty //ƒ hasOwnProperty() { [native code] }
    
    let cObj = Object.create(null)
    cObj.hasOwnProperty //undefined
    ```
    

定义：

```javascript
Object.create(proto,[propertiesObject])
```

-   proto: 新创建对象的原型对象
    
-   propertiesObject:可选。 要添加到新对象的**可枚举**（新添加的属性是其自身的属性，而不是其原型链上的属性）的属性。
    

```javascript
// 实现一个没有继承属性和方法的纯对象
let obj = Object.create(null, {
    name: {
        value: '崔海峰'，
        write: true
    }
})
```

只要`proto`不为**null**，都不是一个纯净的对象

### 那么怎么安全的判断一个属性是不是属于这个对象的，而不是原型上面的

```javascript
let a = Object.create(null, {
    name: {
        value: '崔海峰'
    }
})
Object.prototype.hasOwnProperty.call(a,'name')
```