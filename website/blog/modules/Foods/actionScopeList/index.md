#### 理解`javascript`的编译原理

1. 首先分词(词法分析)

```javascript
var sum = 30;
// 词法分析后的结果
[
  "var" : "keyword",
  "sum" : "identifier",
  "="   : "assignment",
  "30"  : "integer",
  ";"   : "eos" (end of statement)
]
```

:::tip
这些代码块被称为词法单元(token) ，这些词法单元组成了词法单元流数组
:::

2. 语法分析

:::tip
把词法单元流数组转换成一个由元素逐级嵌套所组成的代表程序语法结构的树，这个树被称为“抽象语法树” (Abstract Syntax Tree, 简称AST)。
:::

3. 代码生成

:::tip
将抽象语法树（AST）转换为一组机器指令，也就是可执行代码，简单说，就是用来创建一个变量a，并将3这个值储存在a中。
:::

<img src="http://mp1.oss-cn-beijing.aliyuncs.com/blog/169826acb0356502" style="height:160px;">

:::warning
- JavaScript 大部分情况下编译发生在代码执行前的几微秒(甚至更短!)的时间内
- JavaScript 引擎用尽了各种办法(比如 JIT，可以延 迟编译甚至实施重编译)来保证性能最佳
:::

#### `javascript`是如何执行的

:::tip
- **变量**和**函数**在内的所有声明都会在任何代码被执行前**首先**被处理
- 函数运行的瞬间，创建一个AO (Active Object 活动对象)运行载体
:::

例子一：

```javascript
function a(age) {
    console.log(age);
    var age = 20
    console.log(age);
    function age() {
    }
    console.log(age);
}
a(18);
```

1. 分析阶段

函数运行的瞬间，创建一个AO (Active Object 活动对象)

> AO (Active Object 活动对象) 相当于载体

:::tip
AO = {}
:::

**第一步，分析函数参数：**

:::tip
形式参数：AO.age = undefined</br>
实参：AO.age = 18
:::

**第二步，分析变量声明：**

:::tip
// 第3行代码有var age</br>
// 但此前第一步中已有AO.age = 18, 有同名属性,不做任何事</br>
即AO.age = 18
:::

**第三步，分析函数声明：**

:::tip
// 第5行代码有函数age</br>
// 则将function age(){}付给AO.age</br>
AO.age = function age() {}</br>
:::

**函数声明特点：AO上如果有与函数名同名的属性,则会被此函数覆盖**

分析阶段最终结果是：

:::tip
AO.age = function age() {}
:::

2. 执行阶段

```javascript
function a(age) {
    console.log(age); // 第一步：AO.age = function age() {}
    var age = 20 // 第二步 AO.age = 20
    console.log(age); // 第三步 AO.age： 20
    function age() {
    }
    console.log(age); // 第四步 AO.age：20
}
a(18);
```

例子二：

```javascript
function a(age) {
      console.log(age);
      var age = function () {
          console.log(age);
      }
      age();
  }
a(18);
```

1. 分析阶段

:::tip
AO = {}
:::

**第一步，分析函数参数：**

:::tip
形式参数：AO.age = undefined</br>
实参：AO.age = 18
:::

**第二步，分析变量声明：**

:::tip
// 第2行代码有var age</br>
// 但此前第一步中已有AO.age = 18, 有同名属性,不做任何事</br>
即AO.age = 18
:::

**第三步，分析函数声明：**

:::tip
无
:::

分析阶段最终结果是：

:::tip
AO.age = 18
:::

2. 执行阶段

```javascript
function a(age) {
    console.log(age); // AO.age = 18 :18
    var age = function () {
        console.log('25');
    }
}
a(18);
```

例子三：

```javascript
function a(age) {
  console.log(age);
  var age = function () {
      console.log(age);
  }
  age();
}
a(18);
```

1. 分析阶段

:::tip
AO = {}
:::

**第一步，分析函数参数：**

:::tip
形式参数：AO.age = undefined</br>
实参：AO.age = 18
:::

**第二步，分析变量声明：**

:::tip
// 第2行代码有var age</br>
// 但此前第一步中已有AO.age = 18, 有同名属性,不做任何事</br>
即AO.age = 18
:::

**第三步，分析函数声明：**

:::tip
无
:::

分析阶段最终结果是：

:::tip
AO.age = 18
:::

2. 执行阶段

```javascript
function a(age) {
  console.log(age);
  var age = function () {
      console.log(age);
  }
  age();
}
a(18);
```

2.1 `age()`的分析和执行

:::tip
// 分析阶段</br>
创建新的AO对象，AO = {}</br>
第一步，分析函数参数（无）</br>
第二步，分析变量声明（无）</br>
第三步，分析函数声明（无）</br>
分析阶段最终结果是：AO = {}</br>
:::

- 当`age()` 自己的`AO`对象，即`age.AO`是个空对象时，它会往上调用。
- 上一级的`AO`对象是`a`，即`a.AO`, `a.AO`下有个执行完后得到的`a.AO.age = function(){console.log(age);}`
- 输出 `ƒ () { console.log(age); }`

### 总结：

:::tip
`JavaScript`上每一个函数执行时，会先在自己创建的`AO`上找对应属性值。若找不到则往父函数的`AO`上找，再找不到则再上一层的`AO`,直到找到大`boss:window`（全局作用域）。 而这一条形成的`“AO链”` 就是`JavaScript`中的作用域链。
:::

### 参考：

- [为何你始终理解不了JavaScript作用域链？](https://juejin.im/post/5c8efeb1e51d45614372addd)