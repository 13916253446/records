#### 短网址服务

[Git.io](https://git.io/)是Github的短网址服务

#### 定位到指定代码，以及高亮代码

在代码文件地址后加上`#L52`或者单击行号52都会将第52行代码高亮显示。

多行高亮也可以，比如用`#L53-L60`选择范围，或者按住 shift键，然后再点击选择的两行。

```javascript
https://github.com/13916253446/records/blob/master/.eslintrc.js#L16
```

#### 表情符

可以在Pull Requests, Issues, 提交消息, Markdown文件里加入表情符。使用方法:name_of_emoji:

```javascript
// 笑脸
:smile:
```

Github支持的完整表情符号列表详见[emoji-cheat-sheet.com](https://www.webfx.com/tools/emoji-cheat-sheet/) 或 [scotch-io/All-Github-Emoji-Icons](https://github.com/scotch-io/All-Github-Emoji-Icons)。


#### Git命令自定义别名
别名用来帮助你定义自己的git命令。比如你可以定义 git a 来运行 git add --all。

要添加一个别名， 一种方法是打开 ~/.gitconfig 文件并添加如下内容：

```config
[alias]
  co = checkout
  cm = commit
  p = push
  # Show verbose output about tags, branches or remotes
  tags = tag -l
  branches = branch -a
  remotes = remote -v
```

...或者在命令行里键入：

```shell
git config --global alias.new_alias git_function
```

例如：

```shell
git config --global alias.cm commit
# 多个
git config --global alias.ac 'add -A . && commit'
```

#### 嵌入Github

比如：
```HTML
<iframe src="//ghbtns.com/github-btn.html?user=13916253446&repo=records&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
```

<iframe src="//ghbtns.com/github-btn.html?user=13916253446&repo=records&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="height:20px;"></iframe>

所有的[Github btn](https://ghbtns.com/)

#### `Github徽章`

```javascript
https://img.shields.io/github/issues-closed/kezhenxu94/mini-github.svg

https://img.shields.io/github/stars/13916253446/records.svg

https://img.shields.io/badge/WeChat-CynicalKid-%2344b549.svg

https://img.shields.io/badge/QQ-917423081-12b7f5.svg
```

![github](https://img.shields.io/github/issues-closed/13916253446/records.svg)
![github](https://img.shields.io/github/stars/13916253446/records.svg)

![github](https://img.shields.io/badge/WeChat-CynicalKid-%2344b549.svg)

![github](https://img.shields.io/badge/QQ-917423081-12b7f5.svg)

**完整的请查看官网**

[shields.io](https://shields.io/category/license)

# unpkg

所有上传到`npm`上面的包，都默认会有一个`cnd`的访问路径，这个服务是由`unpkg`提供的。

```javascript
unpkg.com/:package@:version/:file
```

例如: [https://unpkg.com/vue](https://unpkg.com/vue)

具体使用请查看[unpkg官网](https://unpkg.com/)

# runpkg

又有人根据`unpkg`，提供了一种可以查看`npm`包详细文件以及信息的服务(`runpkg`)，只需要将原来的`unpkg.com`改成`runpkg.com`就可以了。

```javascript
runpkg.com/:package@:version/:file
```

例如: [https://runpkg.com/vue](https://runpkg.com/vue)

更多用法请查看[runpkg github](https://github.com/formidablelabs/runpkg)

#### 参考：

- [Github秘籍](https://snowdream86.gitbooks.io/github-cheat-sheet/content/zh/index.html#%E8%B0%83%E6%95%B4tab%E5%AD%97%E7%AC%A6%E6%89%80%E4%BB%A3%E8%A1%A8%E7%9A%84%E7%A9%BA%E6%A0%BC%E6%95%B0)