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
