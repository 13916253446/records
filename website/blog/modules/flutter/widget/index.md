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
