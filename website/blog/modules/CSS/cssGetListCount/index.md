#### 如何获取列表总数

我们可以借助伪类判断当前列表个数，示意如下：

```css
li:only-child { /* 1个 */ }

li:first-child:nth-last-child(2) { /* 2个 */ }
li:first-child:nth-last-child(3) { /* 3个 */ }

li:first-child:nth-last-child(n + 4) { /* 超过4个 */ }
li:first-child:nth-last-child(n + 5) { /* 超过5个 */ }

li:first-child:nth-last-child(3n) { /* 3的倍数 */ }
li:first-child:nth-last-child(3n + 1) { /* 3的倍数多1 */ }
```

:::tip
然后借助兄弟元素选择符`~`，以及相邻元素选择符`+`就可以设置兄弟元素样式，达到不同列表数目，不一样布局的目的
:::

```css
/* 3个li项目的第1个列表项 */
li:first-child:nth-last-child(3) {}
/* 3个li项目的第1个列表项的后一个，也就是第2项的样式 */
li:first-child:nth-last-child(3) + li {}
/* 3个li项目的第一个列表项后面两个列表项，也就是第2项和第3项的样式 */
li:first-child:nth-last-child(3) ~ li {}
```