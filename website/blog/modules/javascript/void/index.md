# 语法

```javascript
void expression
```

`void`**运算符** 对给定的表达式进行求值，然后返回`undefined`

-   **Let expr be the result of evaluating UnaryExpression.**
    
-   **Call GetValue(expr).**
    
-   **Return undefined.**
    

**重点在于：**无论`void`后的表达式是什么，`void`操作符都会返回`undefined`

# 为什么要用void

因为`undefined`在javascript中不是保留字。换言之，你可以写出：

```javascript
function joke() {
    var undefined = "hello world";
    console.log(undefined); //会输出"hello world"
}
console.log(undefined); //输出undefined
```

对的，你可以在一个函数上下文内以undefined做为变量名，于是在这个上下文写的代码便只能通过从全局作用域来取到*undefined*，如：

```javascript
window.undefined //浏览器环境
GLOBAL.undefined //Node环境
```

但要注意的是，即便window, GLOBAL仍然可以在函数上下文被定义，故从window/GLOBAL上取`undefined`并不是100%可靠的做法。如：

```javascript
function x() {
   var undefined = 'hello world',
       f = {},
       window = {
           'undefined': 'joke'
       };
   console.log(undefined);// hello world
   console.log(window.undefined); //joke
   console.log(f.a === undefined); //false
   console.log(f.a === void 0); //true
}
```

于是，采用`void`方式获取*undefined*便成了通用准则。如underscore.js里的`isUndefined`便是这么写的：

```javascript
_.isUndefined = function(obj) {
    return obj === void 0;
}
```

除了采用`void`能保证取到*undefined*值以外，还有其它方法吗？有的，还有一种方式是通过函数调用。如AngularJS的源码里就用这样的方式：

```javascript
(function(window, document, undefined) {
    //.....
})(window, document);
```

# 注意事项

> 注意：GetValue一定要调用，即使它的值不会被用到，但是这个表达式可能会有副作用(side-effects)。

这是什么意思？这表示无论void右边的表达式是什么，都要对其求值。

```javascript
ar happiness = 10;
var girl = {
    get whenMarry() {
        happiness--;
        return 1/0; //Infinity
    },
    get happiness() {
        return happiness;
    }
};

console.log(girl.whenMarry); //调用了whenMarry的get方法
console.log(girl.happiness); // 9

void girl.whenMarry; //调用了whenMarry的get方法
console.log(girl.happiness); // 8

delete girl.whenMarry; //没有调用whenMarry的get方法
console.log(girl.happiness); //还是8
```

从执行情况可以看出，无论是普通访问`girl.whenMarry`，还是`void girl.whenMarry`都会使她的`happiness--`。而如果把`void`换成`delete`操作符写成`delete girl.whenMarry`，她的`happiness`就不会减了，因为`delete`操作符不会对`girl.whenMarry`求值。

# 使用场景

-   立即调用的函数表达式
    
    在使用[立即执行的函数表达式](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE)时，可以利用`void`运算符让 JavaScript 引擎把一个`function`关键字识别成函数表达式而不是函数声明（语句）。
    
    ```javascript
    void function iife() {
        var bar = function () {};
        var baz = function () {};
        var foo = function () {
            bar();
            baz();
         };
        var biz = function () {};
    
        foo();
        biz();
    }();
    ```
    
-    JavaScript URIs
    
    当用户点击一个以`javascript:` URI 时，它会执行URI中的代码，然后用返回的值替换页面内容，除非返回的值是[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined是全局对象的一个属性。也就是说，它是全局作用域的一个变量。undefined的最初值就是原始数据类型undefined。")。`void`运算符可用于返回[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined是全局对象的一个属性。也就是说，它是全局作用域的一个变量。undefined的最初值就是原始数据类型undefined。")。例如：
    
    ```javascript
    
      这个链接点击之后不会做任何事情，如果去掉 void()，
      点击之后整个页面会被替换成一个字符 0。
    
     chrome中即使也没变化，firefox中会变成一个字符串0 
    
      点击这个链接会让页面背景变成绿色。
    
    ```