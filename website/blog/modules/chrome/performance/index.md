### 启动屏幕截图

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/screenshots.svg)


### 单独查看某一部分

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/zoom.gif)


### 搜索关键活动

在`performance`面板，按Command+F(Mac) 或者Control+F(Windows, Linux)，可以打开面板底部的搜索框执行搜索

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/search.png)


### 查看主线程的活动以及堆栈信息

- Main部分查看页面主线程上发生的活动。

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/main.svg)

- X轴表示随时间的迁移，Y轴表示调用堆栈信息

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/flamechart.png)

- 启用和禁用JavaScript调用堆栈

单击捕获设置![setting](https://mp1.oss-cn-beijing.aliyuncs.com/capture-settings.png)显示更多设置

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/capture-settings.svg)

禁用`Disable JavaScript Samples`将只显示高级事件，隐藏调用堆栈

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/js-samples-disabled.png)

启用，将显示所有的堆栈信息

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/js-samples-enabled.png)


### 查看交互

使用`Interactions`部分查看和分析录制期间发生的用户交互

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/20190223045611.png)

### 查看渲染帧

使用`Frames`部分确切的告诉你每帧花费的时间

将鼠标悬停在上面，可以查看更多信息

![frames](https://mp1.oss-cn-beijing.aliyuncs.com/frames-section.png)

### 精确的估计某些事件花费的事件

在分析像Network或者Main这样的部分时，有时需要更精确的估计某些事件花费的事件。按住`Shift`，鼠标点击并按住，然后向左或者向右移动，可以在DevTools显示该部分花了多长时间。

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/duration.png)


### 查看每一帧的图层信息

- 先启用高级图层功能`Enable advanced paint instrumentation(slow)`

- 然后在`Frames`部分选择一帧。然后在`Layers`选项卡中显示有关其图层信息

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/20190223055835.png)


### 查看绘制详细信息

- 先启用高级图层功能`Enable advanced paint instrumentation(slow)`

- 然后在`Main`部分选择`Paint`事件

- 在`Paint Profiler`选项卡查看

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/20190223061242.png)


### 分析渲染性能

打开`Rendering`选项卡

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/rendering-tab.png)

- 实时查看每秒帧数

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/20190223063639.png)

- 实时查看重绘事件

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/paint-flashing.gif)

- 实时查找滚动性能问题

![performance](https://mp1.oss-cn-beijing.aliyuncs.com/scrolling-performance-issues.png)

这表明存在一个全局的`mousewheel`事件，可能损害滚动性能。