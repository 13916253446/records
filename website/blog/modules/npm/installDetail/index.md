### 首先掌握几点概念

- **1、项目依赖的模块，这些模块开发环境的依赖(`dependencies`)，都会安装到`node_modules`下面，只不过安装的位置层级不一定。**

<img src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm1.png" style="height: 500px;" />

- **2、项目模块的依赖也会根据语义化版本(`SemVer`)自动安装最新版本的包，**

<img src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm2.png" style="height: 500px;" />

- **3、所以npm包开发环境依赖的包一定要谨慎对待，如果第三方包的维护者，不遵守`SemVer`语义化版本，发布了小版本不能往下兼容的情况，就会引发问题。**

:::warning
npm包通过`package-lock.json`是不能锁定版本，只能通过`package.json`指定固定版本来锁定。</br>
:::

**锁定版本的`package.json`**

```json
{
  "dependencies": {
    "vue": "2.5.10"
  }
}
```

### 依赖树的逻辑结构与物理结构

逻辑结构：就是每个依赖项下面依赖资源都是以层级的形式嵌套在各自的模块`node_modules`下面。

物理结构：就是安装的时候，实际上各个资源在项目`node_modules`下层级情况。

**可以使用命令查看项目的层级结构**

`tree -d`命令以树状图的方式列出一个项目下所有依赖的物理结构

`npm ls`命令以树状图的方式列出一个项目下所有依赖的逻辑结构

:::tip
可以使用控制台重定向功能(`>`)将控制台的内容，输出到文件中。</br>
`tree -d > tree.md`
:::

### npm2下的模块安装机制

`npm2`安装多级的依赖模块采用嵌套的安装方式：

![npm](https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm3.png)

:::tip
优点：实现多版本兼容 </br>
缺点：造成相同模块大量冗余的问题
:::

**依赖包的依赖包相同，这就造成了大量代码冗余**

![npm](https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm4.png)

### npm3下的模块安装机制
`npm3`和`npm2`的不同主要体现在二级模块的安装上：

`npm3`会"尽量"把逻辑上某个层级的模块在物理结构上"全部"放在项目的第一层级里，具体我概括为以下三种情况：

:::tip
1、在安装某个二级模块时，若发现第一层级还没有相同名称的模块，便把这第二层级的模块放在第一层级
:::

![npm](https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm5.png)

:::tip
2、在安装某个二级模块时，若发现第一层级有相同名称，相同版本的模块，便直接复用那个模块。
:::

![npm](https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm6.png)

对`npm2`,两个C包是相同的，造成模块冗余

在`npm3`中，因为A模块下的C模块被安装到了第一级，这使得B模块能够复用处在同一级下；且名称，版本，均相同的C模块

`npm3`就是用这种方式，部分地解决了`npm2`的痛点（部分）

:::tip
3、在安装某个二级模块时，若发现第一层级有相同名称，但版本不同的模块，便只能嵌套在自身的父模块下方
:::

![npm](https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm7.png)

在`npm3`中，因为`B`和`A`所要求的依赖模块不同，（`B`下要求是`v1.0`的`C`，`A`下要求是`v2.0`的`C` ）所以`B`不能像2中那样复用`A`下的`C v1.0`模块

### npm3下冗余情况

:::warning
实际上：`npm3`中仍然可能出现模块冗余的情况，因为一级目录下已经有`v1.0`的`C`模块了，所以所有的`v2.0`只能作为二级依赖模块被安装，这样你就会看到如下的情况
:::

![npm](https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm9.png)

### 去除冗余模块

`npm dedupe`尽量压平依赖树，它能够把凡是能够去除的冗余的二级依赖模块，“重定向”到名称／版本相同的一级模块。


:::tip
每次安装/卸载了包之后最好重新执行`npm dedupe`，以保证包结构是最优的
:::

### 参考：

- [详解npm的模块安装机制](http://www.cnblogs.com/penghuwan/p/6970543.html)
