1. 展示某个快照的变动

```shell
# 根据快照Id
git show c9053865e9dff393fd2f7a92a18f9bd7f2caa7fa

# 展示前一个快照
git show head^
```

2. 切换到某个快照

```shell
git checkout head~2
```

3. 撤销更改

- 撤销已经`push`的更改

`git reset`

除了在当前分支上操作，你还可以通过传入这些标记来修改你的缓存区或工作目录：

--soft – 缓存区和工作目录都不会被改变
--mixed – 默认选项。缓存区和你指定的提交同步，但工作目录不受影响
--hard – 缓存区和工作目录都同步到你指定的提交
把这些标记想成定义 git reset 操作的作用域就容易理解多了。

`reset`将一个分支的末端指向另一个提交。这可以用来移除当前分支的一些提交。

```shell
# 会退到HEAD之前的第1个快照
git reset head~1
```

![git](http://mp1.oss-cn-beijing.aliyuncs.com/blog/aze1u-k0azb.gif)

使用`reset`就会有一个问题，本地的快照要慢于服务器上面的快照，直接`push`的时候，就需要`pull`代码，就又会把回退过后的代码拉下来。

如果是自己的功能分支，可以才用强制推送(--force)

```shell
git push --force
```