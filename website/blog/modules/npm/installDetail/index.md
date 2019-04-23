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