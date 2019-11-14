### ngrok

这是一个免费的内网穿透工具，只需要四步就可以让外网访问内部服务。

- [下载](https://ngrok.com/download)
- 解压出`ngrok`可执行文件
- 且验证

```shell
/ngrok authtoken <YOUR_AUTH_TOKEN>
```

- 执行

```shell
./ngrok http 80
```

:::warning
有可能会报错`Invalid Host Header`<br>
可以通过运行: <br>
```shell
ngrok http 8080 -host-header="localhost:8080"
```
:::

### 参考

- [ngrok](https://dashboard.ngrok.com/get-started)
