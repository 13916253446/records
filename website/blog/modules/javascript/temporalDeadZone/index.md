# 从现象说起

请思考下面这段代码，结果会是什么？

```javascript
console.log(a)
var a
```

如果了解变量提升，那么很容易就会知道结果是`undefined`

而在**ES6**中，会出现什么情况呢？

```javascript
console.log(a)
let a
```
我们看到，在第一段代码中，只把 var 改成 let 代码就会报错:`ReferenceError: a is not defined`

原因就是我们忽略了`let`的暂时性死区（ temporal dead zone，简称TDZ ）

# 为什么会出现暂时性死区
先来看看**ES6**标准中对`let/const`声明中的解释 第13章，有如下一段文字：

> The variables are created when their containing Lexical Environment is instantiated but may not be accessed inany way until the variable’s LexicalBinding is evaluated.

当然这段话我看完也很懵，查阅了一些帖子，翻译成人话就是：

> 当程序的控制流程在新的作用域（module function 或 block 作用域）进行实例化时，在此作用域中用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区。

如果你还是记不住，那么只需理解下面这句话即可：

**ES6**规定，`let/const`命令会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。
总之，在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。
这在语法上，称为**暂时性死区**（ temporal dead zone，简称 TDZ）。

# 其它影响
**TDZ**也意味着`typeof`不再是一个百分之百安全的操作。

我们看下面这段代码，

```javascript
typeof a // ReferenceError: a is not defined
let a
```

在没有`let`之前，`typeof`运算符是百分之百安全的，不会报错。
现在这一点不成立了。