### 首先掌握几点概念

- **1、项目依赖的模块，这些模块开发环境的依赖(`dependencies`)，都会安装到`node_modules`下面，只不过安装的位置层级不一定。**

<img src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm1.png" style="height: 500px;" />

- **2、项目模块的依赖也会根据语义化版本(`SemVer`)自动安装最新版本的包，**

<img src="https://mp1.oss-cn-beijing.aliyuncs.com/blog/npm2.png" style="height: 500px;" />

- 3、所以npm包开发环境依赖的包一定要谨慎对待，如果第三方包的维护者，不遵守`SemVer`语义化版本，发布了小版本不能往下兼容的情况，就会引发问题。

:::warning
npm包通过`package-lock.json`是不能锁定版本，只能通过`package.json`指定固定版本来锁定。</br>
:::

**锁定版本的`package.json`**

```json
{
  "dependencies": {
    "vue": "2.5.10"
  }
}
```
