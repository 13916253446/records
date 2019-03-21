#### 渲染过程

>First paint 直译过来的意思就是浏览器第一次渲染(paint)，在First paint之前是白屏，在这个时间点之后用户就能看到（部分）页面内容。

所以研究这个First Paint的触发时机对于优化浏览器页面的首屏渲染时间有很重要的作用。

1. 浏览器输入url，浏览器发送请求到服务器，服务器将请求的HTML返回给浏览器。
2. 浏览器下载完成HTML(Finish Loading HTML)之后，便开始从上到下解析
3. 解析的过程中碰到css和js外链（其实HTML的下载也是这个流程）都会执行以下过程：
     - Send Request:表示给这个外链对应的服务器发送请求
     - Receive Response: 表示接收响应，这里是表示告诉浏览器可以开始从网络接收数据了
     - Receive Data:表示开始接收数据
     - Finish Loading: 表示已经完成下载数据
     - Parse Stylesheet/Evaluate（默认情况下js下载完成之后执行Evaluate，css下载完成后会进行Parse Stylesheet）

:::tip
现在浏览器有做优化，在解析HTML开始阶段，就会提取所有标记性标签，识别外链资源，开始阶段并发的发出这些资源的下载请求
:::
4. 所有的css下载完成后Parse Stylesheet然后开始构建CSSOM
5. DOM（文档对象模型）和 CSSOM（CSS对象模型）会合并生成一个渲染树(Render Tree)
6. 根据渲染树的内容计算处各个节点在网页中的大小和位置（Layout，可以理解为“刻章”）
7. 根据Layout绘制内容在浏览器上（Paint，可以理解为“盖章”）。

根据最新版的`chrome`调试`performance`可以发现First Paint的加载流程应该是这样：
:::tip
1. 所有的CSS加载完成
2. Parse Stylesheet：构建出CSSOM
3. Recalculate Style：重新计算样式，确定DOM元素的样式规则（定规则）
4. Layout：根据计算结果进行布局，确定元素的大小和位置（刻章）
5. Update Layer Tree：更新渲染层树
6. Paint：绘制，根据前面的Layer Tree绘制页面（位置、大小、颜色、边框、阴影等）（盖章）
7. Composite Layers：形成层，浏览器按照合理的顺序合并成一个图层然后输出到屏幕（给别人看）
:::

自己的总结就是：**所有的css资源加载完毕，css树构建完毕，会根据已经构建的局部DOM树，生成一次渲染树，paint一次**

完整的总结是：
:::tip
浏览器会提前渲染body中第一个脚本前的内容（我们就把body中的第一个外链脚本叫做【第一脚本】吧），并且第一脚本还会在FP之后才执行。所以结合之前得出的结论，在CSSOM准备就绪之后，浏览器会提前渲染第一脚本前的内容
:::

FP发生在body中第一个script脚本之前的CSS解析和JS执行完成之后。换句话说就是第一脚本之前的DOM和CSSOM准备就绪之后，便会着手渲染第一脚本前的内容。

:::warning
如果第一脚本前的JS和CSS加载完了，body中的脚本还未下载完成，那么浏览器就会利用构建好的局部CSSOM和DOM提前渲染第一脚本前的内容（触发FP）；如果第一脚本前的JS和CSS都还没下载完成，body中的脚本就已经下载完了，那么浏览器就会在所有JS脚本都执行完之后才触发FP。
:::

#### 总结：

- Chrome会渲染局部CSSOM和DOM
- First Paint和DOMContentLoaded、load事件的触发没有绝对的关系，FP可能在他们之前，也可能在他们之后，这取决于影响他们触发的因素的各自时间（FP：第一脚本前CSSOM和DOM的构建速度；DOMContentLoaded：HTML文档自身以及HTML文档中所有JS、CSS的加载速度；load：图片、音频、视频、字体的加载速度）。
- DOMContentLoaded和load事件也没有强制的先后顺序，DOMContentLoaded一般在load事件之前触发，但也可能在load事件之后触发。
- 第一脚本前的CSS如果还会去加载字体文件，那么即使CSSOM和DOM构建完成触发FP，页面内容也会是空白，只有等到字体文件下载完成才会出现内容（这也是我们在打开一个加载了谷歌字体的网站会白屏很长时间的原因）。
- 默认情况下，CSS外链之间是谁先加载完成谁先解析，但是JS外链之间即使先加载完成，也得按顺序执行。
- link外链后面紧跟script外链，须先等link parse完成之后，script才会执行，即使script先下载完成。script后面紧跟link，也是一样，会等script执行完之后，link才会parse。
- 如果script之后紧跟几个link且script比这几个link的下载时间都长，那script执行完成之后link是按顺序执行。
- RRDL：
  - R：send Request，发送资源请求
  - R：receive Response，接收到服务端响应
  - D：receive Data，开始接受服务端数据(一个资源可能执行多次)
  - L：finish Loading，完成资源下载
- 浏览器在RRDL的时候，在D（Receive data）这个步骤可能执行多次。
- TTFB:Time To First Byte，第一个字节返回的时间，这个是对应send Request到receive Response这段时间。
- 浏览器会给HTML中的资源文件进行等级分类（Hightest/High/Meduim/Low/Lowest）,一般HTML文档自身、head中的CSS都是Hightest，head中JS一般是High，而图片一般是Low，而设置了async/defer的脚本一般是Low，gif图片一般是Lowest。

#### 参考：
- [Chrome的First Paint](http://eux.baidu.com/blog/fe/Chrome%E7%9A%84First%20Paint)
- [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/#Global_and_Incremental)