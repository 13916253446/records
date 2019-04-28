### 1、调试`webpack`等工具

**package.json**

```json
 "scripts": {
    "debug": "node --nolazy --inspect-brk=9229 node_modules/.bin/webpack -c build/webpack.config.prod.js"
  },
```

**lanuch.json**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch server.js via nodemon",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": [
        "run-script",
        "debug"
      ],
      "skipFiles": [
        "${workspaceFolder}/node_modules/**/*.js",
      ],
      "trace": true,
      "timeout": 5000,
      "port": 9229,
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "autoAttachChildProcesses": true
    }
  ]
}
```