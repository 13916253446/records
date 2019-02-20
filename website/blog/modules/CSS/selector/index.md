## 基础选择器

基础选择器包括：**通用选择器**、**标签选择器**、**类选择器**、 **id选择器**

![selector](http://mp1.oss-cn-beijing.aliyuncs.com/787564103-5c6ac113a0b47.png)

## 组合选择器

组合选择器包括：**多元素选择器**、**后代元素选择器**、**子元素选择器**、**毗邻选择器**、**相邻选择器**

**毗(pi)邻**：相互接触连接

**相邻**：靠近，离得近的都叫相邻

![selector](http://mp1.oss-cn-beijing.aliyuncs.com/3135369761-5c6ac530275f8.png)

## 属性选择器

![selector](http://mp1.oss-cn-beijing.aliyuncs.com/3158539893-5c6ac9634b897.png)

## 伪类选择器

CSS1-2伪类选择器

![selector](http://mp1.oss-cn-beijing.aliyuncs.com/1370704475-5c6c111e2bf30.png)

CSS3伪类选择器

![selector](http://mp1.oss-cn-beijing.aliyuncs.com/3403027093-5c6c10fbe77f4.png)

## 伪元素

![selector](http://mp1.oss-cn-beijing.aliyuncs.com/2854313473-5c6c17c398937.png)

## 伪类与伪元素的区别与作用

CSS3对伪类的定义：

- 伪类存在的意义是为了通过选择器找到那些不存在与DOM树中的信息以及不能被常规CSS选择器获取到的信息。

- 伪类由一个冒号:开头，冒号后面是伪类的名称和包含在圆括号中的可选参数。

- 任何常规选择器可以再任何位置使用伪类。伪类语法不区别大小写。一些伪类的作用会互斥，另外一些伪类可以同时被同一个元素使用。并且，为了满足用户在操作DOM时产生的DOM结构改变，伪类也可以是动态的。

其实第一段话就囊括CSS3伪类的全部定义了，这段话中指出CSS3伪类的功能有两种：

1. 获取不存在与DOM树中的信息。比如a链接的:link、:actived等，这些信息不存在DOM树结构中，只能通过css选择器来获取。

2. 获取不能被常规CSS选择器获取的信息。