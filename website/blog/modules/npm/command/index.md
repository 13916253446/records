### 1、检测当前安装的所有`npm`包是否有更新

```shell
# 查看项目中所有的依赖是否需要更新
npm outdated

# 查看具体的依赖是否需要更新
npm outdated webpack
```

会检测当前安装的所有`npm`包是否有更新，并列出可以更新的包，如果没有任何输出，那么恭喜你，所有的包都是不需要更新的。

```shell
Package                           Current   Wanted  Latest  Location
autoprefixer                        9.3.1    9.5.1   9.5.1  composite
babel-jest                         22.4.4   22.4.4  24.7.1  composite
babel-loader                        7.1.5    7.1.5   8.0.5  composite
babel-plugin-dynamic-import-node    1.2.0    1.2.0   2.2.0  composite
bluebird                            3.5.3    3.5.4   3.5.4  composite
chalk                               2.4.1    2.4.2   2.4.2  composite
clean-webpack-plugin                1.0.0    1.0.1   2.0.1  composite
```

:::tip
使用场景: 在执行`npm update`之前，可以先使用`npm outdated`查看下具体要更新哪些包，是否有影响。
:::

### 2、更新项目的依赖

```shell
# 更新所有的依赖
npm update

# 更新具体的依赖
npm update webpack
```

### 3、尽量扁平依赖树

```shell
npm dedupe
```

:::tip
每次安装依赖或者卸载依赖之后使用，可以保证依赖的结构是最优的。
:::

### 4、查看项目的逻辑结构

```shell
npm ls

# 把逻辑结构输出到文件
npm ls > tree.md
```