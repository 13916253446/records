# 定义命令行规则，以及解析命令行参数

-   [yargs for github](https://github.com/yargs/yargs) &emsp; [yargs for 阮一峰](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
    
    ```javascript
    #!/usr/bin/env node
    require('yargs') // eslint-disable-line
      .command('serve [port]', 'start the server', (yargs) => {
        yargs
          .positional('port', {
            describe: 'port to bind on',
            default: 5000
          })
      }, (argv) => {
        if (argv.verbose) console.info(`start server on :${argv.port}`)
        serve(argv.port)
      })
      .option('verbose', {
        alias: 'v',
        default: false
      })
      .argv
    ```
-   [commander for github](https://github.com/tj/commander.js) [commander fro 中文](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)
    
    ```javascript
    program
      .version('0.1.0')
      .option('-s --size ', 'Pizza size', /^(large|medium|small)$/i, 'medium')
      .option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
      .parse(process.argv);
    
    console.log(' size: %j', program.size);
    console.log(' drink: %j', program.drink);
    ```

# 命令行提示输入，选择

-   [Inquirer](https://github.com/SBoudrias/Inquirer.js)
    
    ![](http://mp1.oss-cn-beijing.aliyuncs.com/blog/screely-1545880290447.png)