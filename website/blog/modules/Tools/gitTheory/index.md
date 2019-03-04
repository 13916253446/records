![git](http://mp1.oss-cn-beijing.aliyuncs.com/blog/385704-20150915155600929-543996061.jpg)

1. 目录结构

```
.
├── .git //git管理目录
|   └── branches
|   └── config
|   └── description
|   └── HEAD
|   └── hooks
|   └── info
|   └── objects
|   └── refs

```

2. `git add`命令

- 修改的文件(文件内容)压缩成二进制文件，并且计算文件内容的`SHA1`哈希值(长度40的字符串)，哈希值的前2个字符作为目录名，后38个字符作为二进制文件的文件名，把这个目录放在`.git/objects`目录下

比如说添加了两个新的文件，并且文件内容不相同

```
.
├── .git //git管理目录
|   └── branches
|   └── config
|   └── description
|   └── HEAD
|   └── hooks
|   └── info
|   └── objects
|   |   └── 6f // 文件目录
|   |       └── 5373dce73cc01c45d037d74aa1879d8ee733e1 //二进制文件
|   |   └── 0c // 文件目录
|   |       └── 29714e63ba0eae075c4f61c3521c56fb964518 //二进制文件
|   └── refs
```

可以通过`git cat-file`查看二进制文件的原始内容

```shell
git cat-file -p 6f5373dce73cc01c45d037d74aa1879d8ee733e1
```

- 文件保存成二进制对象以后，还需要通知`Git`哪些文件发生了变动。所有变动的文件，`Git`都记录在一个区域，叫做"暂存区"（英文叫做`index`或者`stage`）

通过`git ls-files`可以查看暂存区的内容，包括二进制对象名

```shell
git ls-files --stage

# 100644 6256e61634866db86ae7c52f248074389854cc1e 0  test.vue
# 100644 0c29714e63ba0eae075c4f61c3521c56fb964518 0  test2.vue
```

通过`git status`命令产生更可读的结果：

```shell
git status

#  new file:   test.vue
#  new file:   test2.vue
```

3. `git commit`命令

- 前面保存对象的时候，只是保存单个文件，并没有记录文件之间的目录关系（哪个文件在哪里）。 生成一个`Git`对象。也保存在`.git/objects`目录里面

- 将目录树对象写入版本历史，将元数据和目录树，一起生成一个`Git`对象(这就是所谓的生成快照)

4. `branch`的概念

所谓分支（branch）就是指向某个快照的指针，分支名就是指针名。哈希值是无法记忆的，分支使得用户可以为快照起别名。而且，分支会自动更新，如果当前分支有新的快照，指针就会自动指向它。比如`master`分支就是有一个叫做`master`指针，它指向的快照就是`master`分支的当前快照。

用户可以对任意快照新建指针。比如，新建一个`fix-typo`分支，就是创建一个叫做`fix-typo`的指针，指向某个快照。所以，`Git`新建分支特别容易，成本极低。

`Git`有一个特殊指针`HEAD`， 总是指向当前分支的最近一次快照。另外，`Git`还提供简写方式，`HEAD^`指向`HEAD`的前一个快照（父节点），`HEAD~6`则是HEAD之前的第6个快照。