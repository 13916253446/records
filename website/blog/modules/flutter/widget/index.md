# Widget 是什么？

Flutter 中的 Widget 相当于 Android 里的 View，iOS 里的 UIView。

在 Flutter 中要用 Widget 构件 UI。Flutter 的 Widget 渲染采用的是类似 React 的框架：当 Widget 状态发生变化，需要更新界面时，框架会先计算从上一个状态转换到下一个状态所需的最小更改，然后再去刷新界面。

# Flutter Framework 里的 Widget

![flutter framework](https://raw.githubusercontent.com/13916253446/assets/master/public/168eb1ddc1f9a6c0.5kfcp0yrwz.jpg)

这是 Flutter Framework 层的架构图，可以看到 Framework 里面有一层是 Widgets。

在 Widgets 层下面，有：

- Rendering（渲染层）
- Animation、Painting、Gestures（动画、绘制、手势）
- Foundation（基础库层）

Widgets 下面的层提供的是最基本的功能，但是这些平时很少使用到，因为要使用这些的话会比较复杂。我们在开发中使用的都是封装好的东西，也就是 Widgets 上面的那层：

1、Material（[mə'tɪrɪəl]: 材料，原料） & Cupertino（库比蒂诺（苹果电脑的全球总公司所在地，位于美国旧金山））

Material & Cupertino 指的 Widget 的风格是 Material 或 Cupertino 。Flutter 为了减轻开发人员的工作量，实现了两种不同风格的组件：Material 和 Cupertino 。Material 用于 Android，Cupertino 用于 iOS。有了这些组件，开发人员不需要再做额外的工作，就可以让 Flutter 的 UI 风格适应不同的平台，让 Flutter UI 获得和 Native UI 一样的使用体验。

2、根 Widget

- Flutter会默认把 根Widget 充满屏幕。
- 在 Flutter 中，根Widget 只能是以下三个：

  1、WidgetsApp：WidgetsApp 是可以自定义风格的 根Widget。

  2、MaterialApp：MaterialApp 是在 WidgetsApp 上添加了很多 material-design 的功能，是 Material Design 风格的 根Widget。

  3、CupertinoApp：CupertinoApp 也是基于 WidgetsApp 实现的 iOS 风格的 根Widget。

3、Widget 的分类：StatelessWidget 和 StatefulWidget

因为渲染是很耗性能的，为了提高 Flutter 的帧率，就要尽量减少不必要的 UI 渲染，所以 Flutter 根据 UI 是否有变化，将 Widget 分为：

- StatefulWidget（['steitful]：有状态的）

StatefulWidget 是 UI 可以变化的 Widget，创建完后 UI 还可以在更改。

- StatelessWidget（['stetləs]：无国籍的）

StatelessWidget 是 UI 不可以变化的 Widget，创建完后 UI 就不可以在更改。

例如：

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Welcome to Flutter',
      color: Colors.yellow,
      home: new Scaffold(
        appBar: new AppBar(
          title: const Text('1'),
        ),
        body: const Center(
          child: const Text('Hello World'),
        ),
      ),
    );
  }
}
```

# StatefulWidget的实现

需要有两部分组成：

- StatefulWidget
- State

1、StatefulWidget实现步骤

- 首先继承StatefulWidget
- 实现createState方法，返回一个State

```dart
class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return MyAppState("Hello World");
  }
}
```

:::tip
主要功能就是创建State
:::

2、State的实现步骤

- 首先继承State，State 的泛型类型是上面定义的 Widget 的类型
- 实现build方法，返回一个Widget
- 调用setState方法，来刷新UI

```dart
class MyAppState extends State<MyApp> {
  bool isShowText =true;
  void increment(){
    setState(() {
      widget.content += "d";
    });
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
          appBar: AppBar(title: Text("Widget -- StatefulWidget及State"),),
          body: Center(
              child: GestureDetector(
                child: isShowText? Text(widget.content) :null,
                onTap: increment,
              )
          ),
        )
    );
  }
}
```

:::tip
State的两个功能:</br>
1、build() —— 创建 Widget
2、setState() —— 刷新 UI
:::

:::tip
为什么 StatefulWidget 被分成 StatefulWidget 和 State 两部分？</br>
一方面是为了保存当前 APP 的状态，另一个重要的原因就是为了性能！

当 UI 需要更新时候，假设 Widget 和 State 都重建，可是 State 里保存了 UI 显示的数据，State 重建，创建新的实例，UI 之前的状态就会丢失，导致 UI 显示异常，所以要分成两部分，一部分会重建，一部分不会重建，重建的部分就是 StatefulWidget，不会重建的部分就是 State。

Widget 重建的成本很低，但 State 的重建成本很高，因此将 StatefulWidget 分成两部分：重建成本低的 Widget 和重建成本高的 State。这样就使得 State 不会被频繁重建，也就提高了性能。
:::

# StatefulWidget 的生命周期

因为 StatefulWidget 由 StatefulWidget 和 State 两部分组成，所以也有 StatefulWidget 的生命周期和 State 生命周期。

![StatefulWidget](https://raw.githubusercontent.com/13916253446/assets/master/public/16ab1dbc405c19e2.zgjxv6g5m9n.jpg)
