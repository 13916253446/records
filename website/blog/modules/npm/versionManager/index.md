### 版本号的命名

**SemVer**

根据国际主流的惯例，我们使用「语义化版本（Semantic Versioning）」的命名方式，有时简称 `SemVer`。

语义化版本号（以下简称「版本号」）的格式是：`<major>`.`<minor>`.`<patch>`。即使用三位非负整数，以点号 . 连接。

如：1.4.15、6.2.0。

### 每位版本号的含义

- `<major>` 即主版本号，俗称大版本升级。改动到主版本号时，标志着 API 发生了巨大变化，包括但不限于新增特性、修改机制、删除功能
:::tip
一般不兼容上一个版本
:::
- `<minor>` 即次版本号，俗称小版本升级。当我们进行常规的新增或修改功能时，改动次版本号，但是 **必须是向前兼容的**。这也意味着我们 **不能直接删除某个功能**。如若必要，我们可以在 changelog 中标记某项功能为「即将删除（Deprecated）」，然后在下一个大版本中将其彻底删除。
:::tip
小版本的更改，必须是向前兼容的
:::
- `<patch>` 即修订号，俗称 bug 修复。顾名思义，如果仅仅为了修复或调整一些小问题，我们就只改动修订号。
:::tip
一般就是修复bug
:::

### 预发版本号

当要发布大版本或者核心的Feature时，但是又不能保证这个版本的功能 100% 正常。这个时候就需要通过发布先行版本。比较常见的先行版本包括：**内测版**、**灰度版本**了和**RC版本**。Semver规范中使用`alpha`、`beta`、`rc`(以前叫做gama)来修饰即将要发布的版本。

预发版本号的格式是 `<major>`.`<minor>`.`<patch>`-`<tag>`，即前半部分和常规版本号相同，然后跟上连接符 -，后面再跟上字母数字点号连接符（`[0-9A-Za-z-.]`）。

- **alpha**: 内部版本
- **beta**: 公测版本
- **rc**: 即Release candiate，正式版本的候选版本

下面是react的版本：

![version](https://mp1.oss-cn-beijing.aliyuncs.com/blog/162cc6d0b4c8e782)

### 项目对包的依赖

当执行`npm install package -S` 来安装三方包时，npm 会首先安装包的**最新版本(latest)**，然后将包名及版本号写入到 package.json 文件中

项目对包的依赖可以使用下面的 3 种方法来表示(假设当前版本号是 16.2.0):

- 兼容模块新发布的补丁版本：`~16.2.0`, `16.2.x`, `16.2`
- 兼容模块新发布的小版本、补丁版本：`^16.2.0`, `16.x`, `16`
- 兼容模块新发布的大版本、小版本、补丁版本：`*`, `x`

### npm包发布的与安装

例：初始版本为1.0.0

```shell
#预备补丁版本号 v1.0.1-0
npm version prepatch

#预发布版本号 v1.0.1-1
npm version prerelease

#补丁版本号 v1.0.2
npm version patch

#预备次版本号 v1.1.0-0
npm version preminor

#次版本号 v1.1.0
npm version minor

#预备主版本号 v2.0.0-0
npm version premajor

#主版本号 v2.0.0
npm version major
```

:::warning
当仓库已经被`git`初始化了，那么运行`npm version`修改完版本号以后，还会运行`git add` 、`git commit`和`git tag`的命令，其中commit的信息默认是自改完的版本号。如果想自定义commit的信息，可以提供 -m 或者 —message 的选项，如果有"%s"的符号，会被替换为版本号。
`npm version patch -m "Upgrade to %s for reasons"`
:::

**如何发布预发版本的包**

:::tip
执行`npm publish`的时候默认指定了`tag`值就是`latest`默认是稳定版本发布，相当于：</br>
`npm publish --tag latest`
:::

比如发布`16.9.0-alpha.0`版本的内测包

- 设置`version`

```json
{
  "version": "16.9.0-alpha.0"
}
```

- 设置发布`tag`

```shell
npm publish --tag alpha
```

比如安装`16.9.0-alpha.0`版本的内测包：

可以通过指定`tag`的方式

```shell
npm install react@alpha
```

:::warning
一个tag只会存在一个包，如果发布了新的内测包`alpha`，那么`16.9.0-alpha.0`这个包就变成了`latest`包
:::

也可以直接通过版本号来安装

```shell
npm install react@16.9.0-alpha.0
```

### 将预发版本的包设置为稳定版本的包

比如公测包(`beta`)，稳定后，需要将`beta`包设置为`latest`包，让用户使用

那么就是使用：

```shell
npm dist-tag add <pkg>@<version> [<tag>]
```

比如将`16.9.0-alpha.0`设置成稳定包：

```shell
npm dist-tag add react@16.9.0-alpha.0 latest
```

### 参考：

- [如何开发和维护一个npm项目](https://juejin.im/post/5bd32ecff265da0ab33193b4)