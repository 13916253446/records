#### 分析下面这段代码的解析过程

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="./assets/index.css">
</head>
<body>
  <div>123456</div>
  <script src="./assets/index.js"></script>
</body>
</html>
```

`html`文档的加载与页面的首次渲染：

1. 浏览器下载html页面
2. 浏览器解析html页面的DOM结构
3. 开启一个下载线程对文档中的所有资源按**优先级**排序下载
  也就是说浏览器会并行下载`index.css`,`index.js`
4. 主线程继续解析文档，发现外链资源
   执行到外链js,则停止接续后续文档，等待该资源下载完成，并且立即执行完成（因为js可能会操作DOM）；执行到外链css，继续解析后续文档(因为css只对后面构建渲染树有影响，并不会去操作DOM)
5. 文档解析完毕，页面重新渲染。当页面引用的所有js同步代码执行完毕，触发`DOMContentLoaded`事件
6. html文档中的图片资源，js代码中有异步加载的css，js，图片资源都加载完毕之后，触发load事件

### 总结：

#### CSS资源的处理有几个特点：

```
1. CSS下载时异步，不会阻塞浏览器构建DOM树

2. 但是会阻塞渲染，也就是在构建render时，会等到css下载解析完毕后才进行（这点与浏览器优化有关，防止css规则不断改变，避免了重复的构建）

3. 有例外，media query声明的CSS是不会阻塞渲染的
```

#### JS脚本资源的处理有几个特点：

```
1. 阻塞浏览器的解析，也就是说发现一个外链脚本时，需等待脚本下载完成并执行后才会继续解析HTML

2. 浏览器的优化，一般现代浏览器有优化，在脚本阻塞时，也会继续下载其它资源（当然有并发上限），但是虽然脚本可以并行下载，解析过程仍然是阻塞的，也就是说必须这个脚本执行完毕后才会接下来的解析，并行下载只是一种优化而已

3. defer与async，普通的脚本是会阻塞浏览器解析的，但是可以加上defer或async属性，这样脚本就变成异步了，可以等到解析完毕后再执行
```

### 参考：

- [再谈 load 与 DOMContentLoaded](https://juejin.im/post/5b2a508ae51d4558de5bd5d1)

- [从输入URL到页面加载的过程？](https://dailc.github.io/2018/03/12/whenyouenteraurl.html)
