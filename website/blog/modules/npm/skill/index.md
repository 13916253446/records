# npx命令

这个实在npm`v5.2.0`引入的一条命令。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

### 为什么引入这个命令

举个例子，我们开发中要运行 parcel 命令来打包：`parcel index.html`，以前有这么几种方式：

-   全局安装 `parcel`，但有时不同项目使用不同版本，不允许使用全局包，只能考虑下面一些方法
    
-   使用 `npm scripts`，在 package.json 加一个 `script`
    
    ```json
    "scripts": {
        "start": "parcel index.html"
    }
    ```
    
-   将 node_modules 的可执行目录加到 `PATH` 中
    
    ```powershell
    alias npmx=PATH=$(npm bin):$PATH
    npmx parcel index.html
    ```
    
-   指定可执行命令路径
    
    ```powershell
    /node_modules/.bin/parcel index.html
    ```
    

现在我们有了`npx`命令，就不在需要考虑以上方法了（其实
 `npx`是对方法 3 的封装）。当我们执行`npx parcel index.html`时，会自动去`./node_modules/.bin`目录下搜索

`npx`还允许我们单次执行命令而不需要安装，例如：

```powershell
npx create-react-app my-cool-new-app
```

这条命令会**临时**安装 create-react-app 包，命令完成后 create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。

# 什么是npm脚本

npm 允许在`package.json`文件里面，使用`scripts`字段定义脚本命令。

```json
{
  "scripts": {
    "build": "node build.js"
  }
}
```

上面代码是`package.json`文件的一个片段，里面的`scripts`字段是一个对象。它的每一个属性，对应一段脚本。比如，`build`命令对应的脚本是`node build.js`。

命令行下使用`npm run`命令，就可以执行这段脚本。

```powershell
$ npm run build
# 等同于执行
$ node build.js
```

这些定义在`package.json`里面的脚本，就称为 npm 脚本。它的优点很多。

-   项目的相关脚本，可以集中在一个地方。
    
-   不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行`npm run test`即可。
    
-   可以利用 npm 提供的很多辅助功能。
    

查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的`npm run`命令。

```powershell
$ npm run
```

# npm脚本原理

npm 脚本的原理非常简单。每当执行`npm run`，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

比较特别的是，`npm run`新建的这个 Shell，会将当前目录的`node_modules/.bin`子目录加入`PATH`变量，执行结束后，再将`PATH`变量恢复原样。

![](https://shadow.hfcui.com/blog/screely-1545542442295.png)

这意味着，当前目录的`node_modules/.bin`子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写`mocha test`就可以了。

```json
{
    "scripts": {
        "test": "mocha test"
    }
}
```

而不用写成下面这样。

```json
{
    "scripts": {
        "test": "./node_modules/.bin/mocha test"
    }
}
```

由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。

npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是`0`，npm 就认为这个脚本执行失败。

# 通配符

由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。

```json
{
    "scripts": {
        "lint": "jshint *.js"
        "lint": "jshint **/*.js"
    }
}
```

上面代码中，`*`表示任意文件名，`**`表示任意一层子目录。

如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。

```json
{
    "scripts": {
        "test": "tap test/\*.js"
    }
}
```

# 传参

向 npm 脚本传入参数，要使用`--`标明。

```json
{
    "scripts": {
        "lint": "jshint **.js"
    }
}
```

向上面的`npm run lint`命令传入参数，必须写成下面这样。

```powershell
$ npm run lint --  --reporter checkstyle > checkstyle.xml
```

也可以在`package.json`里面再封装一个命令。

```json
{
    "scripts": {
        "lint": "jshint **.js",
        "lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"
    }
}
```

# 执行顺序

如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。

如果是并行执行（即同时的平行执行），可以使用`&`符号。

```powershell
$ npm run script1.js & npm run script2.js
```

如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用`&&`符号。

```powershell
$ npm run script1.js && npm run script2.js
```

这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块：[script-runner](https://github.com/paulpflug/script-runner)、[npm-run-all](https://github.com/mysticatea/npm-run-all)、[redrun](https://github.com/coderaiser/redrun)。

# 钩子

npm 脚本有`pre`和`post`两个钩子。举例来说，`build`脚本命令的钩子就是`prebuild`和`postbuild`。

```json
{
    "scripts": {
        "prebuild": "echo I run before the build script",
        "build": "cross-env NODE_ENV=production webpack",
        "postbuild": "echo I run after the build script"
    }
}
```

用户执行`npm run build`的时候，会自动按照下面的顺序执行。

```powershell
npm run prebuild && npm run build && npm run postbuild
```

因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。

```json
{
    "scripts": {
        "clean": "rimraf ./dist && mkdir dist",
        "prebuild": "npm run clean",
        "build": "cross-env NODE_ENV=production webpack"
    }
}
```

# 内置环境变量

npm 提供一个`npm_lifecycle_event`变量，返回当前正在运行的脚本名称，比如`pretest`、`test`、`posttest`等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的`npm scripts`命令编写代码。请看下面的例子。

```javascript
const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'test') {
  console.log(`Running the test task!`);
}

if (TARGET === 'pretest') {
  console.log(`Running the pretest task!`);
}

if (TARGET === 'posttest') {
  console.log(`Running the posttest task!`);
}
```

# 变量

npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。

首先，通过`npm_package_`前缀，npm 脚本可以拿到`package.json`里面的字段。比如，下面是一个`package.json`。

```json
{
  "name": "foo", 
  "version": "1.2.5",
  "scripts": {
    "view": "node view.js"
  }
}
```

那么，变量`npm_package_name`返回`foo`，变量`npm_package_version`返回`1.2.5`。

```javascript
// view.js
console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5
```

上面代码中，我们通过环境变量`process.env`对象，拿到`package.json`的字段值。如果是 Bash 脚本，可以用`$npm_package_name`和`$npm_package_version`取到这两个值。

```json
{
    "repository": {
        "type": "git",
        "url": "xxx"
    },
    "scripts": {
        "view": "echo $npm_package_repository_type"
    }
}
```

上面代码中，`repository`字段的`type`属性，可以通过`npm_package_repository_type`取到。

下面是另外一个例子。

```json
{
    "scripts": {
        "install": "foo.js"
    }
}
```

上面代码中，`npm_package_scripts_install`变量的值等于`foo.js`。

然后，npm 脚本还可以通过`npm_config_`前缀，拿到 npm 的配置变量，即`npm config get xxx`命令返回的值。比如，当前模块的发行标签，可以通过`npm_config_tag`取到。

```json
{
    "scripts": {
        "view": "echo $npm_config_tag"
    }
}
```

注意，`package.json`里面的`config`对象，可以被环境变量覆盖。

```json
{
  "name" : "foo",
  "config" : { "port" : "8080" },
  "scripts" : { "start" : "node server.js" }
}
```

上面代码中，`npm_package_config_port`变量返回的是`8080`。这个值可以用下面的方法覆盖。

```powershell
$ npm config set foo:port 80
```

最后，`env`命令可以列出所有环境变量。

```json
{
    "env": "env"
}
```

# 开发命令行工具的时候

-   配置多个命令
    
    ```json
    {
        "name": "pro-cli",
        "bin": {
           "pro": "bin/pro.js",
           "mini": "bin/mini.js"
         }
    }
    ```
    
-   命令行入口一定加上：
    
    ```javascript
    #!/usr/bin/env node
    ```