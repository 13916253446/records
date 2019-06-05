# Dart 支持的数据类型

| 类型     | 含义                                                                                    | 使用                                                                                                                 |
|--------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| `int`    | 整数，范围为 \-2^63 到 2^63 \- 1\.	                                                          | int x = 1; // 没有小数点就是int                                                                                           |
| `double` | 浮点数，64位\(双精度\)浮点数                                                                     | double x = 1\.1; // 有小数点的就是浮点数                                                                                     |
| `num`    | num 是数字类型，既可以表示整数，也可以表示浮点数，具体看赋的值                                                     | num x = 1; // num x是整数</br>num x = 1\.1; // num x是浮点数                                                              |
| `String` | 字符串</br> Dart字符串采用UTF\-16编码</br> 可以使用单引号或双引号来创建字符串                                    | String x = 'txt'</br> String x = "txt"                                                                             |
| `bool`   | 布尔值                                                                                   | bool isTrue = true;                                                                                                |
| `List`   | List&lt;E&gt;</br&gt;E表示List里的数据类型</br>用中括号来赋值                                                 | List&lt;String&gt; list = \['1', '2', '3'\]                                                                              |
| `Set`    | Set&lt;E&gt;</br>E表示Set里的数据类型</br>用大括号来赋值                                                   | Set&lt;int&gt; set = \{ 1, 2, 3, 4, 5, 6 \}                                                                              |
| `Map`    | Map&lt;K, V&gt;</br>K是key的数据类型，V是value的数据类型                                                 | Map&lt;String, int&gt; map = \{ '1': 1, '2': 2, '3': 3, '4': 4 \}                                                        |
| `Runes`  | 表示采用 UTF\-32 的字符串，用于显示 Unicode 因为Dart字符串是UTF\-16，因此在Dart中表示32位的Unicode值需要Runes这个特殊语法。 | Runes input = new Runes\('\\u\{1f600\}'\);</br> print\(new String\.fromCharCodes\(input\)\);</br> 打印出来的是笑脸emoji：😆 |

 1、 `var`也可以申明变量，一种声明变量而不指定其类型的方法。

```dart
var content = 'Dart 语法'; // Declare and initialize a variable.
var switchOn = false;
var current = 0;
```

:::tip
因为 ，var 并不是直接存储值，而是存储的值的对象的引用，例如：var content = 'Dart 语法' 这句，是名字为 content 的 var 变量存储了值为 'Dart 语法' 的 String 对象的引用，所以 var 才能定义任何变量。</br>
:::

当给`var`变量赋值了之后，就确定了这个变量的数据类型，再重新赋值的时候，只能是初始赋值的数据类型。

```dart
var x = 1;
// x只能赋值int类型
x = '1'; // ❌
```

2、`$variableName` 或 `${expression}`

字符串插值：将变量的值直接插入字符串中。

```dart
var a = '123';
String b = '${a}456';
String c = '$a456';
```

3、`dynamic`（[daɪ'næmɪk]）

意思是数据类型是动态可变的，也可以定义任何变量，但是和`var`不同的是，`var`一旦赋值后，就不能改变数据类型了，但是`dynamic`可以。

```dart
dynamic x = 1;
x = '12'; //✅
```

:::warning
请不要滥用`dynamic`，一般情况下都可以用`Object`代替`dynamic`。</br>
什么情况下使用：当这个变量没法用 Dart 的类型来表示时，比如 Native 和 Flutter 交互，从 Native 传来的数据。所以你会看到 PlatformChannel 里有很多地方使用到了`dynamic`。
:::

4、`Object`

Dart 里所有东西都是对象，是因为 Dart 的所有东西都继承自`Object`，因此`Object`可以定义任何变量，而且赋值后，类型也可以更改。

```dart
Object x = 1;
x = '12'; // ✅
```

5、 常量: `final`和`const`

如果你不想更改变量的值，那么你可以用 final 和 const:

```dart
final x = '1';
static const bool isTrue = true;
```

常量有以下特点：

- 使用`final`和`const`的时候可以把`var`省略
- `final`和`const`变量只能赋值一次，而且只能在声明的时候就赋值
- `const`实际是隐式的`final`
- 在使用`const`的时候，如果变量是类里的变量，必须加`static`，是全局变量时不需要加,例如:

```dart
mport 'package:flutter/material.dart';

const demoConst = 'demo'; // 这里不用加 static

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  static const content = 'Dart 语法'; // 这里必须加 static
}
```

:::tip
以下划线`_`开头的类或成员变量是私有的。</br>
Dart 没有 Public、Protected、Private 的关键字，在 Dart 里，类或成员变量默认都是 Public 的，以下划线 _ 开头的就是私有的，例如成员变量 _name 就是私有的。
:::

# 函数

函数的格式如下：

```javascript
返回类型 函数名(函数参数){

}
// 没有返回值
void 函数名(函数参数) {

}
```

例如：

```dart
bool say (String content) {
  print(content);
  return true;
}
```

1、函数的类型是`Function`

判断函数`say`的类型是不是`Function`，用`is`来判断。

```dart
print(say is Function); // true
```

2、必选参数和可选参数

判断是必选参数还是可选参数：首先必选参数在前面，和普通的参数定义一样，后面跟可选参数，可选参数需要用`{}`或者`[]`包起来，用不同的括号，可选参数的意义与用法也不一样。

**可选参数也分为两类：**

1、可选命名参数：使用 `{}` 包起来的参数是可选命名参数。

2、可选位置参数：使用 `[]` 包起来的参数是可选位置参数。

- 可选命名参数：`{}`

用 `{}` 包起来的参数是可选命名参数，前面讲数据类型的时候，使用 `{}` 来赋值的数据类型是 `Map`，所以可选的命名参数的类型也是 `Map`， 因此调用函数时，可选参数的赋值必须是 `paramName: value` 这种 `key: value` 格式的，下面是可选命名参数的例子：

```dart
bool say(String msg , {String from, int clock}){
  print(msg+" from " + from + " at " + clock.toString());
  return true;
}
```

要调用 `say` 函数，方法如下：

```dart
say('Hello Flutter'); //✅ 因为 from 和 clock 是可选参数，所以可以不填

say('Hello Flutter',from: 'XiaoMing'); //对 用命名参数格式 paramName: value 为 from 赋值
say('Hello Flutter',clock: 11); //✅
say('Hello Flutter',from: 'XiaoMing',clock: 11); //✅
```

同时还可以给命名参数加 `@required` ，意思是这个也是必填参数，例子如下：

```dart
bool say ({ @required String content, int time }) {
  print(content);
  return true;
}
```

这时候要调用 `say` 函数，方法如下：

```dart
say();//❌  错误调用方式，因为 from 是必选参数，不填的话会报错

say(content: 'XiaoMing'); // ✅ 正确调用方式
say(content: 'XiaoMing',time: 11); // ✅ 这个调用方式也是正确的
```

- 可选位置参数：`[]`

用 `[]` 包起来的参数是可选位置参数，前面讲数据类型的时候，使用 `[]` 来赋值的数据类型是 `List`，所以可选的命名参数的类型也是 `List`，所以赋值和参数是一一对应的，下面是可选位置参数的例子

```dart
bool say(String msg , [String from , int clock]){
  print(msg+" from " + from + " at " + clock.toString());
  return true;
}
```

要给可选位置参数赋值时，必选按照顺序来赋值：

```dart
say('Hello Flutter'); // ✅ 因为 from 和 clock 是可选参数，所以可以不填

say('Hello Flutter','XiaoMing',1); // ✅ 为可选位置参数赋值，只能一个参数一个参数对应的赋值，所以要全部赋值

say('Hello Flutter','XiaoMing') // ✅
say('Hello Flutter',1) // ❌ 因为  1 赋值给了 from,但是 from 是String，所以会报错
```

- 可选参数的默认值 ：`=`

因为参数是可选的，那么参数的值很可能没有赋值，就是 `null` ，用到的时候就有可能会触发 NPE，所以可以给可选参数赋默认值。

使用 `=` 为可选参数赋默认值

```dart
bool say(String msg , {String from = 'empty', int clock = 0}){
  print(msg+" from " + from + " at " + clock.toString());
  return true;
}
```

# `=>` ：箭头语法

`=>` 语法是 `{ return expr; }` 的简写，因为 `=>` 酷似箭头，也称箭头语法,也是 `Lambda` 表达式。

:::warning
=> 语句后面只能跟一行代码，而且这一行代码只能一个表达式，而不能跟语句。表达式可以是函数、值。
:::

例如，`main()` 函数这里:

```dart
void main() => runApp(MyApp());
```

等价于:

```dart
void main () {
  return runApp(MyApp()) // runApp也返回的是 void
}
```

# 类

Dart 中每个对象都是一个类的实例，所有类都继承自 Object。

1、自定义类

如下，我定义一个类 `Point`：

```dart
class Point {
  num x, y;

  // 构造函数
  Point(num x, num y) {
    this.x = x;
    this.y = y;
  }
}
```

2、默认构造函数的写法

默认的构造函数就是使用类名作为函数名的构造函数，例如上面写的类 `Point` 的构造函数：`Point(num x,num y)`。

3、构造函数的语法糖

Dart 里还有构造函数的语法糖，可以将构造函数改造为：

```dart
class Point {
  num x, y;
  Point(this.x, this.y);
}
```

这个语法糖会简化构造函数的赋值操作。

4、`Widget` 构造函数参数采用的是可选命名参数。

因为 `Widget` 构造函数有很多参数，为了使用起来清晰，`Widget` 构造函数的参数采用的是可选命名参数。

5、创建实例的时候不再需要`new`。

```dart
Point point = Point(1, 2);
```

创建类实例的时候，都要写 `new`，其实很麻烦的，而且也没有必要，所以 `Dart` 在创建实例的时候不在需要使用 `new` 。

6、使用类的变量

使用点 `.` 来引用实例变量或方法：

```dart
print(point.x);
```

# 操作符

Dart 中定义了很多的操作符，分为以下几类：

1、算术运算操作符

| 操作符        | 含义     | 例子                                              |
|------------|--------|-------------------------------------------------|
| `+`      | 加      | var a = 2 \+ 3;                                 |
| `-`      | 减      | var a = 2\- 3;                                  |
| `-exper` | 负数     | var a = \-1;                                    |
| `*`      | 乘      | var a = 2 \* 3;                                 |
| `/`       | 除，精确除法 | var a = 3 / 2; // a的结果是1\.5                     |
| `~/`      | 整除     | var a = 3 / 2; // a的结果是1                        |
| `%`       | 取余     | var a = 3 % 2; // a的结果是1                        |
| `++var` |        | var a = 1;</br>var b = \+\+a; // b的结果是2，a的结果也是2 |
| `var++` |        | var a = 1;</br>var b = a\+\+; // b的结果是1，a的结果是2  |
| `--var` |        | var a = 1;</br>var b = \-\-a; // b的结果是0，a的结果也是0 |
| `var--` |        | var a = 1;</br>var b = a\-\-; // b的结果是1，a的结果是0  |

2、相等和大小关系操作符

<table>
<thead>
<tr>
<th>操作符</th>
<th>含义</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>==</code></td>
<td>是否相等</td>
<td>assert(2 == 2);</td>
</tr>
<tr>
<td><code>!=</code></td>
<td>不等于</td>
<td>assert(2 != 3);</td>
</tr>
<tr>
<td><code>&gt;</code></td>
<td>大于</td>
<td>assert(3 &gt; 2);</td>
</tr>
<tr>
<td><code>&lt;</code></td>
<td>小于</td>
<td>assert(2 &lt; 3);</td>
</tr>
<tr>
<td><code>&gt;=</code></td>
<td>大于等于</td>
<td>assert(3 &gt;= 3);</td>
</tr>
<tr>
<td><code>&lt;=</code></td>
<td>小于等于</td>
<td>assert(3 &lt;= 3);</td>
</tr>
</tbody>
</table>

3、类型判断操作符

| 操作符  | 含义                         | 例子                                    |
|------|----------------------------|---------------------------------------|
| `as`   | 类型转换                       | \(emp as Person\)\.firstName = 'Bob'; |
| `is`   | 判断是否是某个类型,如果是的话，就返回 true   | bool isPerson = emp is Person;        |
| `is!` | 判断是否不是某个类型，如果不是的话，就返回 true | bool notIsPerson = emp is\! Person;   |

:::warning
上面的例子中，如果 emp 是 null 的话，as 的例子就会抛异常，is 和 isn't 的例子会返回 false。
:::

4、赋值操作符

赋值操作符是 `=`。

如果只想当被赋值的变量为空的时候才赋值，可以使用`??=`,例如：

```dart
var a, b;
a = 1;
b ?? = 2;
```

`=` 还可以和其他操作符结合起来使用，例如:

<table>
<tbody>
<tr>
<td><code>+=</code></td>
<td><code>-=</code></td>
<td><code>*=</code></td>
<td><code>/=</code></td>
<td><code>~/=</code></td>
<td><code>%=</code></td>
</tr>
<tr>
<td><code>&gt;&gt;=</code></td>
<td><code>&lt;&lt;=</code></td>
<td><code>^=</code></td>
<td><code>&amp;=</code></td>
<td><code>|=</code></td>
<td><code>??=</code></td>
</tr>
</tbody>
</table>

这些组合起来的操作符，意思是先进行操作，然后在赋值，例如：

<table>
<thead>
<tr>
<th>组合操作符</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>+=</code></td>
<td>a += b ; 就等效于  a = a + b;</td>
</tr>
</tbody>
</table>

5、逻辑运算操作符

| 操作符    | 含义                       | 例子                                                |
|--------|--------------------------|---------------------------------------------------|
| `!expr` | 反转表达式（将false改为true，反之亦然） | bool isOk = \!\(2 == 3\); // 结果为true              |
| `||`   | 逻辑或                      | bool isOk = \(2 == 3\) \|\| \(3 == 3\); //结果为true |
| `&&`     | 逻辑与                      | bool isOk = \(2 == 2\) && \(3 == 3\); // 结果为true  |

6、按位与移位运算符

<table>
<thead>
<tr>
<th>操作符</th>
<th>含义</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&amp;</code></td>
<td>按位与<br>对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。</td>
<td>final value = 0x22;<br>final bitmask = 0x0f;<br>var result = value &amp; bitmask;//结果为 0x02</td>
</tr>
<tr>
<td><code>|</code></td>
<td>按位或，对于每一个比特位，当两个操作数相应的比特位至少有一个1时，结果为1，否则为0。</td>
<td>final value = 0x22;<br>final bitmask = 0x0f;<br>var result = value</td>
</tr>
<tr>
<td><code>^</code></td>
<td>按位异或，对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0。</td>
<td>final value = 0x22;<br>final bitmask = 0x0f;<br>var result = value ^ bitmask;//结果为 0x2d</td>
</tr>
<tr>
<td><code>~expr</code></td>
<td>按位非，反转操作数的比特位，即0变成1，1变成0。</td>
<td>final value = 0x22;<br>final bitmask = 0x0f;<br>var result = value &amp;  ~bitmask;//结果为 0x20</td>
</tr>
<tr>
<td><code>&lt;&lt;</code></td>
<td>左移</td>
<td>final value = 0x22;<br>final bitmask = 0x0f;<br>var result = value &lt;&lt; 4;//结果为 0x220</td>
</tr>
<tr>
<td><code>&gt;&gt;</code></td>
<td>右移</td>
<td>final bitmask = 0x0f;<br>var result = value &gt;&gt; 4;//结果为 0x02</td>
</tr>
</tbody>
</table>

7、条件运算符

Dart 有两个运算符，可以让您使用更简单的表达式来代替可能需要 if-else 语句的表达式：

- condition ? expr1 : expr2（js里面的三元运算符）

如果 condition 是 true，返回 expr1，否则返回 expr2。

```dart
var visibility = isPublic ? 'public' : 'private';
```

- expr1 ?? expr2

如果 expr1 为 null，就返回 expr2 的值，否则返回 expr1 的值。

```dart
String test (String name) => name ?? 'hfc'
```

8、级联操作符

级联操作符是 `..`,允许你对同一对象进行一系列的操作。除了函数调用，您还可以访问同一对象上的字段。这通常可以为您节省创建临时变量的步骤，并允许您编写更多流畅的代码。

```dart
querySelector('#confirm') // Get an object.
  ..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));
```

querySelector() 返回一个 selector 对象，后面的 ..text、..classes、..onClick就是在 selector 对象上进行的。

9、其他操作符

<table>
<thead>
<tr>
<th>操作符</th>
<th>含义</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>()</code></td>
<td>函数调用</td>
<td>代表函数调用</td>
</tr>
<tr>
<td><code>[]</code></td>
<td>访问列表</td>
<td>引用列表中指定索引处的值</td>
</tr>
<tr>
<td><code>.</code></td>
<td>访问成员变量</td>
<td>访问表达式里的成员变量，例如 <code>foo.bar</code>,表示访问 <code>foo</code> 表达式里的 <code>bar</code> 成员变量</td>
</tr>
<tr>
<td><code>?.</code></td>
<td>有条件的成员变量访问</td>
<td>很像 <code>.</code>，但是左边的表达式可以为 null，例如 <code>foo?.bar</code>，如果 foo 为 null，则不会抛异常，而是返回 null，如果 foo 不为 null，则可以返回 bar</td>
</tr>
</tbody>
</table>

在说一下 Dart 里很好用但容易搞混的几个操作符：`?.`、 `??` 、`??=`

- ?.

想要访问表达式的某个属性时，就可以使用这个，可以有效避免 NPE。

```dart
var yourName = user?.name;
```

等效于：

```dart
var yourName;
if(user == null){
    yourName = null;
}else{
    yourName = user.name;
}
```

- ??

在赋值时，可以使用 `??`，若发现为空，可以为其赋默认值。 例如:

```dart
var yourName = name ?? "Bob";
```

等价于：

```dart
var yourName;
if(name == null){
    yourName = "Bob";
}else{
    yourName = name;
}
```

- ??=

expr1 ??= expr2 等效于 expr1 = expr1 ?? expr2 就是判断 expr1 是否为null，如果为null的话，就使用默认值 expr2。 例如：

```dart
user ??= User();
```

等价于：

```dart
if(user == null) {
  user = User();
}
```
