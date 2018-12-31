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