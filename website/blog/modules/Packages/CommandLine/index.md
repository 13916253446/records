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