### 准确搜索

最简单和最有效的搜索方式是给关键词加上**双引号**，这样搜索引擎会反馈和关键词完全吻合的搜索结果。

:::success
例如，搜索 Joe Bloggs 时，搜索引擎会返回同时跟 Joe 和 Bloggs 相关的结果，而搜索 "Joe Bloggs" 时，搜索引擎只返回跟 "Joe Bloggs" 相关的结果。
:::

### 排除关键字

如果准确搜索不能得到想要的结果，你可以通过使用**减号**的方式来排除特定词汇。

:::success
例如搜索 Joe Bloggs -jeans 时，搜索引擎会返回与 Joe Bloggs 匹配但已经排除关键字 jeans 的信息。
:::

### 用OR(或)进行搜索

默认的文本搜索会返回所有和关键字相关的信息，通过使用 OR，不仅能返回和关键字都相关的信息，还能返回和两个关键字分别相关的信息。在不确定哪个哪个关键字对搜索结果起决定作用时，OR 搜索是很有用的。

### 使用同义词搜索(`~`)

有时使用不确定的关键词进行搜索反而更有用。如果你不确定使用哪个关键词，可以试试使用同义词搜索。

:::success
例如，你搜索 plumbing ~university，则搜索引擎会返回包含 plumbing universities 和 plumbing colleges 的信息。
:::

### 站内搜索

很多网站缺乏搜索功能，但你可以通过谷歌等搜索引擎对站内进行搜索。

:::success
在搜索引擎上输入site:theguardian.com 和搜索关键字，搜索引擎会返回网站 theguardian.com 内和关键词相关的信息。结合准确搜索，能使这项功能更强大。
:::

例如:

```javascript
site:zhihu.com typescript
```

### 不确定性搜索(`*`)

类似拼图游戏 Scrabble 的空白方块，在搜索引擎中，不管关键字缺失的是一连串单词中的其中一个还是一个单词的某一部分，都可以使用星号来填补缺失的部分，这同样适用于搜索一篇确定性偏低的文章。

:::success
例如，在搜索引擎输入 architect*，则会得到所有包含 architect、architectural、architecture、architected、architecting 以及其他所有以architect 作为开头的词汇的信息。
:::

### 数值范围搜索

在一定范围内使用限定词来搜索某些东西是一个不错的方法。

:::success
例如想要找出 1920 至 1950 年间的英国首相，直接在搜索引擎中输入 英国首相 1920.. 1950 即可得出想要的结果。

记住，数值之间的符号是两个英文句号加一个空格键。
:::

### 在网页标题、链接和主体(内容)中搜索关键词

有时，你只想找出所有和关键词相关的网页链接、网页主体(内容)和标题，这时，就可以使用对应的限定词：`inurl:` 、`intext` 和 `intitle`。

:::success
例如，在搜索引擎中输入 `intitle: 评测` 会得到所有和关键词 评测 相关的网页标题。
:::

### 搜索相关网站

相关的限定词可用于搜索相关网站时使用。

:::success
例如，你仅需在搜索引擎中输入 `**related:**theguardian.com` 即可得到所有和 theguardian.com 相关的网站的搜索结果。
:::

### 限定文件类型(`filetype`)

:::success
比如搜索ppt, 输入`关键字 filetype:ppt`
:::

![chrome-search-skill](https://raw.githubusercontent.com/13916253446/assets/master/public/521dfe899ffb54b7a7b3bff076e442e8_r%20(1).2b0avmghlte.jpg)
