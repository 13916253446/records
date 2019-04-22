场景如下：

在一个团队内部，一个开发同学对领导说他的项目有问题，然后领导拉下项目之后，执行`npm install`发现没有任何问题，可能的一个原因就是两个人安装的`npm包`不一致，比如说项目中有使用到一个组件库，开发同学开发的时候，使用的是`1.0.0`，但是这个版本有bug，然后组件库更新到`1.0.1`将原有的`bug`修复了，然后领导安装的包就没有问题，这就导致问题难以复现，多个人的开发环境依赖不一致的问题。

:::tip
而package-lock.json的作用就是用来保证我们的应用程序依赖之间的关系是一致的, 兼容的。本地开发环境和线上编译环境依赖一致的作用。
:::

### 1、npm 5.0.x 版本，不管package.json怎么变，npm i 时都会根据lock文件下载

:::warning
这就引发一个问题，如果`lock`文件里面的内容不变，想要升级原有的`npm包`是不可能的，因为使用都会从`lock`里面读取依赖的具体数据
:::

[package-lock.json file not updated after package.json file is changed · Issue #16866 · npm/npm](https://github.com/npm/npm/issues/16866)

### 2、5.1.0版本后 npm install 会无视lock文件 去下载最新的npm

:::warning
这就引发不同的地方，项目依赖不一致的问题
:::

[why is package-lock being ignored? · Issue #17979 · npm/npm](https://github.com/npm/npm/issues/17979)

### 3、5.4.2版本后，package.json和lock文件不同，那么执行`npm i`时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock

如果两者是同一状态，那么执行`npm i `都会根据lock下载，不会理会package实际包的版本是否有新。

:::tip
这样就能解决又根据`lock`保证不同的地方依赖项一致的问题，又能解决可以手动修改依赖项版本的问题
:::

### 参考：

- [npm install 生成的package-lock.json是什么文件？有什么用?](https://www.zhihu.com/question/62331583)