# 一、typeof

`typeof`其实就是判断参数是什么类型的实例，就一个参数，用例：`typeof A`
返回值：

```javascript
number string boolean object function undefined
```

## 总结

**1. 对于基本类型除了`null`以外，全都返回正确的数据类型**

也就是说下面这些数据类型，可以直接判断
```javascript
string number boolean
```

**2. `null`返回 `object` 类型**

```javascript
let a = null
typeof a === 'object'
```

**3. 对于引用类型除了`function`以外，全都返回`object`**

也就是说对于**数组**或者**对象**都会返回`object`

**4. 对于`function`，返回`function`**
也就是说对于`function`也可以直接判断

```javascript
function test () {}

typeof test === 'function'
```
# 二、 instanceof

`instanceof` 是用来判断 `A` 是否是 `B`的实例，表达式为 `A instanceof B`，返回`Boolean`类型

```javascript
// 示例来自于：https://blog.csdn.net/liwenfei123/article/details/77978027
instanceof (A,B) = {
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R) {
        //A的内部属性__proto__指向B的原型对象
        return true;
    }
    return false;
}
```