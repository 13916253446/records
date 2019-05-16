# 搭建`Mac`开发环境

1、安装[flutter sdk](https://flutter.dev/docs/get-started/install)

2、 解压`flutter sdk`到指定目录

```bash
cd ~/development

unzip ~/Downloads/flutter_macos_v1.5.4-hotfix.2-stable.zip
```

3、添加`flutter sdk`到环境变量

```bash
export PATH="$PATH:`pwd`/flutter/bin"
```

:::warning
这样添加环境变量，仅能在当前终端而且当前窗口使用，也就是关闭终端重新使用，就找不到`flutter`了，可以采用以下方式，将`sdk`添加到全局环境变量。
:::

- 创建`$HOME/.bash_profile`文件，如果有的话，直接使用。

  这个文件，是用户级的环境变量文件

- 将`flutter sdk`的`bin`添加到环境变量中（将下面的内容写到`$HOME/.bash_profile`文件中）

  ```bash
  # PATH_TO_FLUTTER_GIT_DIRECTORY就是sdk的目录
  export PATH=$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin

  # 例
  export PATH=$PATH:/Users/cuihaifeng/development/flutter/bin
  ```

- 运行`source $HOME/.bash_profile`刷新当前终端
- 运行`echo $PATH`看`flutter/bin`是否在其中，来判断是否添加成功

:::warning
`Mac`系统的环境变量，加载顺序为：`/etc/profile`，`/etc/paths`，`~/.bash_profile`，`~/.bash_login`，`~/.profile`，`~/.bashrc`。当然/etc/profile和/etc/paths是系统级别的，系统启动就会加载，后面几个是当前用户级的环境变量。后面3个按照从前往后的顺序读取，如果~/.bash_profile文件存在，则后面的几个文件就会被忽略不读了，如果~/.bash_profile文件不存在，才会以此类推读取后面的文件。~/.bashrc没有上述规则，它是bash shell打开的时候载入的。
:::

:::tip
添加到` $HOME/.bash_profile`之后，你会发现关闭终端之后，还是找不到`flutter`，这是因为：若bash shell是以login方式执行时，才会读取此文件。该文件仅仅执行一次!，如果不想重启，可以将`source ~/.bash_profile`添加到`~/.zshrc`。</br>
打开`vim ~/.zshrc`  添加`source ~/.bash_profile` ，这样`~/.bash_profile`配置的环境变量同样有效</br>
关于`Mac`环境变量可以参考[mac中添加环境变量无效](https://blog.csdn.net/hlllmr1314/article/details/52228672)
:::