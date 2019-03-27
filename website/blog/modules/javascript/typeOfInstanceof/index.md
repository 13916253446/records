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

从上述过程可以看出，当 A 的 __proto__ 指向 B 的 prototype 时，就认为 A 就是 B 的实例，我们来看几个例子：

```javascript
[] instanceof Array; //true
{} instanceof Object;//true
new Date() instanceof Date;//true
```

`JS`万物皆对象的思想：

```javascript
[] instanceof Object //true
function Person(){};
new Person() instanceof Person; // true
new Person instanceof Object; // true
```

# 扩展一下

我们来分析一下 []、Array、Object 三者之间的关系：

从 instanceof 能够判断出 [].proto 指向 Array.prototype，而 Array.prototype.proto 又指向了Object.prototype，最终 Object.prototype.proto 指向了 null，标志着原型链的结束。

因此，[]、Array、Object 就在内部形成了一条原型链：

![prototype](https://mp1.oss-cn-beijing.aliyuncs.com/proto.jpeg)

>instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。

# 巩固知识

- 下面的代码如何输出

```javascript
function fun() {}
console.log(typeof fun);
console.log(fun instanceof Function);
console.log(fun instanceof Object);
```

答：`function` `true` `true`

- 如何判断一个变量是一个数组

```javascript
// 不能使用typeof来判断

typeof [] // object

[] instanceof Array

Array.isArray([])
```

- 下面的输出结果是什么

```javascript
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jartto';
        console.log('Hi~ ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
```

答：这里需要注意变量声明提升，所以上面代码等效于：

```javascript
var name = 'World!';
(function () {
    var name;
    if (typeof name === 'undefined') {
        var name = 'Jartto';
        console.log('Hi~ ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
```

这时候，typeof name 就等于 undefined，所以输出结果为 Hi~Jartto。