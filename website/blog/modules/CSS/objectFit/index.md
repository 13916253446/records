
#### 折腾一下CSS3中的两个属性：object-fit和object-position。

这两个奇葩的属性是搞毛的呢？其实它们是为了处理替换元素（replaced elements）的自适应问题，简单的说，就是处理替换元素的变形（这里指长宽比例变形）问题。

等等，好像多了一个名词，啥叫替换元素？替换元素其实是：

* 其内容不受CSS视觉格式化模型控制的元素,比如image,嵌入的文档(iframe之类)或者applet,叫做替换元素。比：img元素的内容通常会被其src属性指定的图像替换掉。替换元素通常有其固有的尺寸:一个固有的宽度,一个固有的高度和一个固有的比率。比如一幅位图有固有用绝对单位指定的宽度和高度,从而也有固有的宽高比率。另一方面,其他文档也可能没有固有的尺寸,比如一个空白的html文档。
* CSS渲染模型不考虑替换元素内容的渲染。这些替换元素的展现独立于CSS。object,video,textarea,input也是替换元素,audio和canvas在某些特定情形下为替换元素。使用CSS的content属性插入的对象是匿名替换元素。

这个当然不是我头脑风暴来的，而是引用别人的解释：[引用](http://openwares.net/internet/css_replaced_element.html)

常见的替换元素有

要是看的稀里糊涂的也没关系，接着往下看，我相信你会懂得！

**1、object-fit**

语法：

object-fit: fill | contian | cover | none | scale-down;

* fill ： 默认值。填充，可替换元素填满整个内容区域，可能会改变长宽比，导致拉伸。
* contain ： 包含，保持原始的尺寸比例，保证可替换元素完整显示，宽度或高度至少有一个和内容区域的宽度或高度一致，部分内容会空白。
* cover ： 覆盖，保持原始的尺寸比例，保证内容区域被填满。因此，可替换元素可能会被切掉一部分，从而不能完整展示。
* none ： 保持可替换元素原尺寸和比例。
* scale-down ： 等比缩小。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。

不好意思，我又要摆妹子来诱惑你们了，看效果图：

![](http://7s1r1c.com1.z0.glb.clouddn.com/t_objectFit.png)

上面的五个例子的代码：

![](example-girl.jpg)

![](example-girl.jpg)

![](example-girl.jpg)

![](example-girl.jpg)

![](example-girl.jpg)

看到这些效果，我想同志们最关心的的应该是兼容性，[点这里点这里](http://caniuse.com/#search=object-fit)

**2、object-position**

object-position 属性决定了它的盒子里面替换元素的对齐方式。

语法：

object-position:

默认值是50% 50%，也就是居中效果，其取值和CSS中background-position属性取值一样。（如果不熟悉background-position，可以瞄瞄这里《[CSS3 Background](http://ghmagical.com/article/page/id/Lg7blxcyTOUU) 》）

例如：替换元素位于内容区域的左上角

img{

object-fit: contain;

object-position: 0 0;

效果图：

![](http://7s1r1c.com1.z0.glb.clouddn.com/t_objectPosition1.png)

例如：替换元素相对于左下角10px 10px地方定位

img{

object-fit: contain;

object-position: bottom 10px left 10px;

效果图：

![](http://7s1r1c.com1.z0.glb.clouddn.com/t_objectPosition2.png)

当然，你也可以使用calc()来定位：

img{

object-fit: contain;

object-position: calc(100% - 10px) calc(100% - 10px);

效果图：

![](http://7s1r1c.com1.z0.glb.clouddn.com/t_objectPosition2.png)

它还支持负数：

img{

object-fit: contain;

object-position: -10px calc(100% - 10px);

效果图：

![](http://7s1r1c.com1.z0.glb.clouddn.com/t_objectPosition3.png)

总之，object-position的特性表现与backgound-position一样一样的。

到这里，这两个属性算是讲完了，就是这么简单。

### 参考：

- [CSS3 object-fit和object-position](https://imweb.io/topic/5832c3d0f8a1d5546059a300)
