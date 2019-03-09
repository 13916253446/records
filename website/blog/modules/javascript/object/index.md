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

# 遍历对象

-   `for...in`
    
    -   包括原型上的属性（所以一般配合hasOwnProperty使用）
        
    -   只遍历可枚举的属性
        
    -   不包含`Symbol`属性
        
    
    ```javascript
    let obj = { name: '崔海峰' }
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            //TODO
        }
    }
    ```
    
-   `Object.getOwnPropertyNames`
    
    -   返回自身的所有属性名称（**不包括原型上的属性**）
        
    -   包括不可枚举的属性
        
    -   不包含`Symbol`属性
        
    
    ```javascript
    let obj = Object.create({ age: 26 }, { name: {
      writable: true,
      value: '崔海峰',
      enumerable: true
    }})
    
    Object.getOwnPropertyNames(obj) //{ name: '崔海峰' }
    ```
    
-   `Object.keys`
    
    -   返回自身的所有属性名称（**不包括原型上的属性**）
        
    -   不包括不可枚举的属性
        
    -   不包含`Symbol`属性
        
-   `Object.values`
    
    -   返回自身的所有属性值（**不包括原型上的属性**）
        
    -   不包括不可枚举的属性值
        
    -   不包含`Symbol`属性
        
-   `Object.entries`
    
    -   返回自身的所有属性名称和属性值的集合（**不包括原型上的属性**）
        
    -   不包括不可枚举的属性值
        
    -   不包含`Symbol`属性
        
    
    ```javascript
    let obj = Object.create({ name: '崔海峰' }, {
        age: {
            value: 26,
           enumerable: true
        }
    })
    
    Object.entries(obj) //[[ age, 26 ]]
    ```
    
-   `Object.getOwnPropertySymbols`
    
    -   返回自身的`Symbol`属性（**不包括原型上的属性**）
        
    -   包括不可枚举的属性
        
-   `Reflect.ownKeys`
    
    -   返回自身的所有属性名称和属性值的集合（**不包括原型上的属性**）
        
    -   包括不可枚举的属性值
        
    -   包含`Symbol`属性
        
    
    **返回对象自身所有的属性名称不管是否可枚举，是否是`Symbol`**
    
-   `Reflect.enumerate`
    
    -   返回自身的所有属性名称和属性值的集合（**包括原型上的属性**）
        
    -   不包括不可枚举的属性值
        
    -   不包含`Symbol`属性