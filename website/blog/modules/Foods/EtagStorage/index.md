# 不使用 Cookie 的“Cookie”技术

有另一种方法可以跟踪用户而不使用cookies或Javascript。这种方法 已经被用于无数网站，但几乎没人人们知道。本页解释这种方法是如何运作的，以及是如何保护你自己的。

有另一种方法可以跟踪用户而不使用cookies或Javascript。这种方法 已经被用于无数网站，但几乎没人人们知道。本页解释这种方法是如何运作的，以及是如何保护你自己的。

这种跟踪方式 无需使用:

- Cookies
- Javascript
- LocalStorage/SessionStorage/GlobalStorage
- Flash、Java或其他组件
- 你的IP地址或是用户代理字符串（User Agent String ）

相反，它使用另一种存储方式，在浏览器重启的时候也可以保持持久性，这就是： caching.

即使你完全禁用cookies、关闭Javascript功能并且使用VPN，这种技术依然可以追踪到你。

在线示例：[http://lucb1e.com/rp/cookielesscookies/](http://lucb1e.com/rp/cookielesscookies/)

我们继续，输入一些东西然后保存。接着关闭你的浏览器再一次打开这个页面。它是不是还在那儿呢？

检查你的cookies，有没有？当然没有，因为它完完全全在一张假图片的校验和里，几乎没人能意识到。看到页面顶部右边的眼睛了吗？这就是我们的跟踪器。

# 如何运作

![etag storage](https://raw.githubusercontent.com/13916253446/assets/master/public/20103442_3rMc.lz4odys8kgn.jpg)

图片中的ETag是一种校验和。当图片改变时，校验和也会改变。所以当浏览器有图片并且知道校验和时，它可以将校验和传送给web服务器来验证。然后web服务器验证图片是否改变。如果没有，就不用重新传送图片了，省下了不少数据流量。

细心的读者或许已经注意到，可以这样追踪人群：浏览器发送回给服务器的信息就是它之前所接收到的（ETag）。这听起来和cookies十分相似。服务器可以给每个浏览器一个唯一的ETag，浏览器再次连接时ETag可以从数据库中找出来。

[源代码](https://github.com/lucb1e/cookielesscookies)