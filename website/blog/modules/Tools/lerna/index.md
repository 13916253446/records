# 初始化项目

为了避免`lerna`版本不一致，所以讲`lerna`安装为项目依赖，而不是全局安装

```powershell
$ npx lerna init
```

这将创建`lerna.json`配置文件和`packages`文件夹

```javascript
lerna-repo/
  packages/
  package.json
  lerna.json
```

# 项目管理模式

-   集中模式（**默认模式**）
    
    模块发布新版本时，都会升级到`leran.json`里编写的`version`字段，这是[Babel](https://github.com/babel/babel)目前使用的模式。如果要自动将所有包版本绑定在一起，请使用此选项。这种方法的问题是任何包中的重大更改都将导致所有包具有新的主要版本
    
    ```powershell
    lerna init
    ```
    
    ```json
    {
      "packages": [
        "packages/*"
      ],
      "version": "0.0.0"
    }
    ```
    
-   独立模式
    
    模块发布新版本时，会逐个询问需要升级的版本号，基准版本为它自身的`package.json`，如果需要各个组件维护自身的版本号，那么就使用`independent`模式，只需要去配置`leran.json`即可。
    
    ```powershell
    lerna init --independent
    ```
    
    ```json
    {
      "packages": [
        "packages/*"
      ],
      "version": "independent"
    } 
    ```

# lerna.json

```json
{
  "version": "1.1.3",
  "npmClient": "npm",
  "command": {
    "publish": {
      "ignoreChanges": ["ignored-file", "*.md"]
    },
    "bootstrap": {
      "ignore": "component-*",
      "npmClientArgs": ["--no-package-lock"]
    }
  },
  "packages": ["packages/*"]
}
```

-   `version`：存储库的当前版本。
    
-   `npmClient`：指定运行命令的特定客户端的选项（也可以基于每个命令指定）。也可是是`yarn`使用`yarn`运行所有命令。默认为`npm`。
    
-   `command.publish.ignoreChanges`：`lernam publish`会检查`packages`目录下哪些包的文件有更新，这个配置可以忽略某些文件的修改避免发布新版本。例如：修复`README.md`拼写错误
    
-   `command.bootstrap.ignore`：忽略执行`lerna bootstrap`命令时候安装的一些包
    
-   `command.bootstrap.npmClientArgs`：字符串数组,直接传递给`npm install`,作为参数. 在`lerna bootstrap`命令期间
    
-   `command.bootstrap.scope`：一组匹配模式,限制运行时安装哪些包,在`lerna bootstrap`命令期间。
    
-   `packages`：指定项目包
    
    默认项目都在**packages**目录下，你也可以把项目包放在别的目录，然后重新定义`packages`字段

# lerna add

安装资源包到项目依赖

```powershell
$ lerna add [@version] [--dev] [--exact]
```

-   安装资源包到所有项目
    
    ```powershell
    # 安装到dependencies
    lerna add webpack
    # 安装到devDependencies
    lerna add --dev webpack
    ```
    
-   安装资源包到指定项目
    
    ```powershell
    # 安装webpack资源包到utils项目
    lerna add webpack --scope=utils
    ```
    
-   安装资源包到指定规则的项目里面
    
    ```powershell
    # 安装webpack资源包到前缀是test的项目里
    lerna add webpack packages/test*
    ```

# lerna bootstrap

将本地存在相互依赖的包链接在一起，然后安装剩余依赖的包

```powershell
lerna bootstrap
```

运行时此命令将：

-   在所有的项目下执行`npm install`安装所有的资源包
    
-   链接`npm link`当前目录下所有的项目
    
-   执行已经安装资源包的项目`npm run prepublish`
    
-   执行已经安装资源包的项目`npm run prepare`

# lerna version

```powershell
# 自定义版本
lerna version 1.0.1
# 选择一种模式生成版本（patch是在原来的版本基础上加0.0.1）
lerna version patch
# 通过命令行选择来确定版本
lerna version
```

![](https://mp1.oss-cn-beijing.aliyuncs.com/blog/screely-1545557968431.png)![](https://mp1.oss-cn-beijing.aliyuncs.com/blog/screely-1545557968431.png)

执行此命令，将执行以下操作

-   标记上一个版本以来已更新的包
    
    每个项目`package.json`下面有一个`gitHead`标识（这个字段的值是从git暂存区取得，所以每次代码都要**git commit**之后才有效，否则就会报没有资源包需要更新版本）
    
    ```json
    {
        "gitHead": "46a570ebbd8e34766edd9fb8f4fad9288c7bcf30"
    }
    ```
    
-   提示以及选择版本号
    
-   修改项目的版本(`version`)以及其它元数据比如`gitHead`
    
-   提交(`git commit`)这些更改
    
-   推送到`git`远程服务器
    

### options

-   --amend
    
    使用此标记运行时，将跳过`git push`并保留当前提交的更改，而不是新增一个修改(**没有此标记时会提交一个新的commit信息然后推送到远程服务器**)
    
    #
    
    ```powershell
    lerna version --amend
    ```
    
-   --commit-hooks
    
    提交版本更改时是否执行git钩子(**git commit hooks**)，默认是**true**，可以通过`--no-commit-hooks`禁用
    
    ```powershell
    lerna version
    # 禁用git钩子
    lerna version --no-commit-hooks
    ```
    
-   --conventional-commits
    
    提交版本的时候，直接确定版本不用选择版本(**加0.1**)，并生成`CHANGELOG`
    
    ```powershell
    lerna version --conventional-commits
    ```

# lerna create

创建一个新的项目

```powershell
lerna create  [loc]

Create a new lerna-managed package

Positionals:
  name  项目的名字 [string] [required]
  loc   项目的位置，默认是第一个项目创建的位置         [string]

Command Options:
  --access        When using a scope, set publishConfig.access value
                             [choices: "public", "restricted"] [default: public]
  --bin           Package has an executable. Customize with --bin
                                               [default: ]
  --description   Package description                                   [string]
  --dependencies  A list of package dependencies                         [array]
  --es-module     Initialize a transpiled ES Module
  --homepage      The package homepage, defaulting to a subpath of the root
                  pkg.homepage                                          [string]
  --keywords      A list of package keywords                             [array]
  --license       The desired package license (SPDX identifier)   [default: ISC]
  --private       Make the new package private, never published
  --registry      Configure the package's publishConfig.registry        [string]
  --tag           Configure the package's publishConfig.tag             [string]
  --yes           Skip all prompts, accepting default values
```

# 安装各种依赖

在开发之前，肯定是需要先安装各种eslint、prettier、commit-lint等等规范化库的，我们为啥要把一堆package放到一个仓库？其中一个原因不就是为了直接复用一套规范文件么。

所以各种lint文件肯定是安装到项目全局的，这时如果使用lerna的安装命令:

```powershell
lerna add eslint --dev
```

就会发现一个问题，每个package都被单独安装了eslint，这明显是不合适的，既然是同一个项目，安装多次同一个模块算个什么事？

然后我们发现，lerna有提到如果你想只安装一次，那么可以把这些依赖写到每个package的package.json中，然后回到根目录运行:

```powershell
lerna bootstrap --hoist
```

bootstrap是learna一键为所有package安装依赖的命令，如果加上了--hoist参数，那么就是告诉lerna，把所有依赖全部安装到根目录中，然后分别在各自的文件夹中创建软连接指向对应的模块实际路径。

从解决问题的眼光来看，确实解决了重复安装的问题，不过所有模块都装到根目录混杂在一起，这让强迫症心里很不舒服，我们希望的其实是只有lint这些公共库提取出来，其他的他们自己的依赖放到他们自己的文件夹中。
 在参考了[Babel](<https://github.com/babel/babel>)仓库的做法后，明白了。因为node自身在查找模块的时候有向父级目录查询的操作，所以其实软连接什么的并不需要，甚至都不需要lerna，我们直接

```powershell
yarn add -D eslint
```

这样便直接将eslint安装到了根目录中，由于层级高，所以子目录都会受到lint规则的约束。同样，为此安装好husky等等基本库，完成仓库的初始化。