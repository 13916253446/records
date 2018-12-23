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