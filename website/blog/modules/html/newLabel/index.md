#### 1. 注释标签

```HTML
<ruby>
  汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```
效果：

<ruby>
  汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>

> Ruby原指5.5级的字体格式，在美国又称Agate，它的大小正好适合注音。现在在日文中，这词不再表示字体的名称，而是表示名词形式的标音。当它被翻译回英文时，它被称为rubi（由假名译来，日文：ルビ）。但是Ruby的拼法还是比较普遍。我认为应该是英国人认为5.5级的字体格式像红宝石一样美观，故名。

#### 2. `<base>`

:::tip
`<base>` 标签为页面上的所有链接规定默认地址或默认目标。</br>
通常情况下，浏览器会从当前文档的 URL 中提取相应的元素来填写相对 URL 中的空白。</br>

使用 `<base>` 标签可以改变这一点。浏览器随后将不再使用当前文档的 URL，而使用指定的基本 URL 来解析所有的相对 URL。这其中包括 `<a>`、`<img>`、`<link>`、`<form>` 标签中的 URL
:::

```HTML
<head>
<!-- href属性 -->
<base href="http://www.w3school.com.cn/i/" />
<!-- target属性 -->
<base target="_blank" />
</head>

<body>
<img src="eg_smile.gif" />
<a href="http://www.w3school.com.cn">W3School</a>
</body>
```


#### 3. `<article>`

:::tip
`<article>`元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目
:::

```HTML
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <footer>
    <p>
      Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.
    </p>
  </footer>
</article>
```

#### 4. `<nav>`

:::tip
描绘一个含有多个超链接的区域，这个区域包含转到其他页面，或者页面内部其他部分的链接列表.
:::

```HTML
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

#### 5. `<aside>`

:::tip
表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框
:::

```HTML
<article>
  <p>
    迪斯尼电影<cite>海的女儿</cite>（<cite>The Little Mermaid</cite>）于 1989 年首次登上银幕。
  </p>
  <aside>
    在首次发行期间，该片便收获了 8700 万美元的票房。
  </aside>
  <p>
    更多有关该电影的信息…
  </p>
</article>
```

#### 6. `<section>`

:::tip
表示文档中的一个区域（或节），比如，内容中的一个专题组，一般来说会有包含一个标题（heading）
:::

```HTML
<section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

#### 7. `<header>`

:::tip
用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等
:::

```HTML
<header class="page-header">
    <h1>Cute Puppies Express!</h1>
</header>

<main>
    <p>I love Beagles <strong>so</strong> much! Like really, a lot. They're adorable and their ears are so, so snuggly soft!</p>
</main>
```

#### 8. `<footer>`

:::tip
表示最近一个章节内容或者根节点（sectioning root ）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息
:::

```HTML
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```

#### 9. `<main>`

:::tip
呈现了文档的 `<body>` 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成
:::

```HTML
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

#### 10. `address`

:::tip
表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息
:::

```HTML
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br/>
  <a href="tel:+311-555-2368">+311-555-2368</a><br/>
</address>
```

#### 11. `pre`

:::tip
示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 `<pre>` 开始标签后的换行符也会被省略)
:::

```HTML
<!-- 显示样式示例 -->
<pre>
body {
  color:red;
}
</pre>
```

#### 12. `blockquote`

:::tip
代表其中的文字是引用内容
:::

```HTML
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly – they'll go through anything. You read and you're pierced.</p>
</blockquote>
```