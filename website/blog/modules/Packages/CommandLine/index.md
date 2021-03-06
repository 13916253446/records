# 定义命令行规则，以及解析命令行参数

-   [yargs for github](https://github.com/yargs/yargs) &emsp; [yargs for 阮一峰](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)

-   [commander for github](https://github.com/tj/commander.js) [commander fro 中文](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)

-   [gluegun](https://infinitered.github.io/gluegun/#/) 方便的定义命令行命令和参数


# 命令行提示输入，选择

-   [Inquirer](https://github.com/SBoudrias/Inquirer.js)

```javascript
// when的用法
const { bump, customVersion } = await inquirer.prompt([
    {
      name: 'bump',
      message: '请选择发布类型:',
      type: 'list',
      choices: [
        ...bumpChoices,
        { name: '自定义版本', value: 'custom' }
      ]
    },
    {
      name: 'customVersion',
      message: 'Input version:',
      type: 'input',
      when: answers => answers.bump === 'custom'
    }
  ])
```

- [prompts](https://github.com/terkelg/prompts)
-   [enquirer](https://github.com/enquirer/enquirer)样式好看一点的prompt

# 执行命令

-   [shelljs](https://github.com/shelljs/shelljs)

- [cash](https://github.com/dthree/cash)可以使用ES6

# 命令行图表

-   [blessed-contrib](https://github.com/yaronn/blessed-contrib)

-   [sparkly](https://github.com/sindresorhus/sparkly) 命令行生成梯形图

# 命令行加载中提示动画

-   [ora](https://github.com/sindresorhus/ora)
-   [log-symbols](https://github.com/sindresorhus/log-symbols) 在终端上显示对勾或者叉图案

# 命令行进度条

-   [progress](https://github.com/visionmedia/node-progress)
-   [super-progress](https://github.com/s73obrien/super-progress)实体进度

# 设置终端字体样式

-   [chalk](https://github.com/chalk/chalk)

-   [gradient-string](https://github.com/bokub/gradient-string)生成渐变色的文字

-   [Jsome](https://github.com/Javascipt/Jsome)漂亮的输出JSON对象

-   [colors](https://github.com/Marak/colors.js)

# 更新控制台

比如清空控制台，来渲染进度，或者是动画

-   [log-update](https://github.com/sindresorhus/log-update)
    

# 通过React来渲染控制台

-   [ink](https://github.com/vadimdemedes/ink)

# 终端任务列表，可以同时显示多个进行中的任务

-   [listr](https://github.com/samverschueren/listr)

-   [node-multispinner](https://github.com/codekirei/node-multispinner)

# 控制台图标

-   [figures](https://github.com/sindresorhus/figures)

-   [boxen](https://github.com/sindresorhus/boxen)
    控制台创建边框


# 控制台创建超链接

-   [terminal-link](https://github.com/sindresorhus/terminal-link)

# 控制台显示图片

-   [terminal-image](https://github.com/sindresorhus/terminal-image)

# 重新定义终端，可以将终端分成多个模块

-   [blessed](https://github.com/chjj/blessed)

# 终端创建table

-   [cli-table3](https://github.com/cli-table/cli-table3)

# 在终端使用Canvas的功能

-   [node-drawille](https://github.com/madbence/node-drawille)

# 通知用户更新npm包，可以监测到当前使用的包是不是最新的，来在控制台显示通知

-   [update-notifier](https://github.com/yeoman/update-notifier)

# 格式化输出对象

-   [columnify](https://github.com/timoxley/columnify)
-   [fx](https://github.com/antonmedv/fx) 控制台查看json文件

# 设置命令行字帖

-   [cfonts](https://github.com/dominikwilkowski/cfonts)

# 命令行自动完成，命令提示

-   [omelette](https://github.com/f/omelette)

# 跨平台设置环境变量

-   [cross-env](https://github.com/kentcdodds/cross-env)

# 检查NPM包名是否可用

-   [npm-name](https://github.com/sindresorhus/npm-name)

# 优化npm publish可以提供界面选择版本

-   [np](https://github.com/sindresorhus/np)

# 跨平台的将文件或者文件夹移动到废纸篓（不是删除，可以恢复）

-   [trash](https://github.com/sindresorhus/trash)

# 复制文件(快速，接收不存在的目录，带进度条)

-   [cpy](https://github.com/sindresorhus/cpy)

# 获取公共IP

-   [public-ip](https://github.com/sindresorhus/public-ip)

# 终端访问系统粘贴板(可以在终端控制复制，粘贴)

-   [clipboardy](https://github.com/sindresorhus/clipboardy)

# 终端和网页交互

-   [node-bcat](https://github.com/kessler/node-bcat)

-   [browser-run](https://github.com/juliangruber/browser-run)

-   [scat](https://github.com/hughsk/scat)

-   [node-hcat](https://github.com/kessler/node-hcat)

-   [bpipe](https://github.com/Marak/bpipe)

# 查看wifi密码

-   [wifi-password-cli](https://github.com/kevva/wifi-password-cli)

# 在终端试用npm包

-   [trymodule](https://github.com/victorb/trymodule)

# 文件处理

-   [globby](https://github.com/sindresorhus/globby) 可以使用正则快速友好的查找文件

# 名称转驼峰

- [uppercamelcase](https://www.npmjs.com/package/uppercamelcase)

# 兼容各种系统的换行运算符

```javascript
var endOfLine = require('os').EOL
```

一个字符串常量,定义操作系统相关的行末标志:

 -  \n 在 POSIX 系统上
 - \r\n 在 Windows系统上

 #  模板引擎

 -  [json-templater](https://www.npmjs.com/package/json-templater) 模板解析字符串或者json文件

# 命令行检测页面性能

  - [lighthouse-ci](https://github.com/ebidel/lighthouse-ci)

# 自动化发布`npm`,`git`

  - [release-it](https://github.com/release-it/release-it#git)可以自动化修改版本，以及更改日志等等

# 检验引擎版本是否符合要求

  - [semver](https://www.npmjs.com/package/semver)

package.json

```json
{
  "engines": {
    "node": ">=8.9"
  }
}
```

bin.js

```javascript
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node

function checkNodeVersion (wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, 'gigle-cli')
```

# 判断项目名称是否有效

- [validate-npm-package-name](https://www.npmjs.com/package/validate-npm-package-name)

```javascript
const result = validateProjectName(name)
if (!result.validForNewPackages) {
  console.error(chalk.red(`Invalid project name: "${name}"`))
  result.errors && result.errors.forEach(err => {
    console.error(chalk.red.dim('Error: ' + err))
  })
  result.warnings && result.warnings.forEach(warn => {
    console.error(chalk.red.dim('Warning: ' + warn))
  })
  exit(1)
}
```

# 命令行语法高亮

- [cli-highlight](https://www.npmjs.com/package/cli-highlight)

```javascript
console.log(highlight(log, {language: 'sql', ignoreIllegals: true}))
```

# 终端显示多行多列的样式

- [cliui](https://www.npmjs.com/package/cliui)

例如下面的`vue-cli`打包出来用列表的形式显示出各个资源包的大小

```javascript
module.exports = function formatStats (stats, dir, api) {
  const fs = require('fs')
  const path = require('path')
  const zlib = require('zlib')
  const chalk = require('chalk')
  const ui = require('cliui')({ width: 80 })

  const json = stats.toJson({
    hash: false,
    modules: false,
    chunks: false
  })

  let assets = json.assets
    ? json.assets
    : json.children.reduce((acc, child) => acc.concat(child.assets), [])

  const seenNames = new Map()
  const isJS = val => /\.js$/.test(val)
  const isCSS = val => /\.css$/.test(val)
  const isMinJS = val => /\.min\.js$/.test(val)
  assets = assets
    .filter(a => {
      if (seenNames.has(a.name)) {
        return false
      }
      seenNames.set(a.name, true)
      return isJS(a.name) || isCSS(a.name)
    })
    .sort((a, b) => {
      if (isJS(a.name) && isCSS(b.name)) return -1
      if (isCSS(a.name) && isJS(b.name)) return 1
      if (isMinJS(a.name) && !isMinJS(b.name)) return -1
      if (!isMinJS(a.name) && isMinJS(b.name)) return 1
      return b.size - a.size
    })

  function formatSize (size) {
    return (size / 1024).toFixed(2) + ' KiB'
  }

  function getGzippedSize (asset) {
    const filepath = api.resolve(path.join(dir, asset.name))
    const buffer = fs.readFileSync(filepath)
    return formatSize(zlib.gzipSync(buffer).length)
  }

  function makeRow (a, b, c) {
    return `  ${a}\t    ${b}\t ${c}`
  }

  ui.div(
    makeRow(
      chalk.cyan.bold(`File`),
      chalk.cyan.bold(`Size`),
      chalk.cyan.bold(`Gzipped`)
    ) + `\n\n` +
    assets.map(asset => makeRow(
      /js$/.test(asset.name)
        ? chalk.green(path.join(dir, asset.name))
        : chalk.blue(path.join(dir, asset.name)),
      formatSize(asset.size),
      getGzippedSize(asset)
    )).join(`\n`)
  )

  return `${ui.toString()}\n\n  ${chalk.gray(`Images and other types of assets omitted.`)}\n`
}
```