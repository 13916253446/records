### 拼接

- 普通字符串拼接

```html
<div class="test"></div>
<style>
.test:after {
  content: "123" + "456"
}
</style>
```

![content](https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-14%20%E4%B8%8B%E5%8D%887.217rzq608iu.57.36%20(1).png)

- 字符串拼接函数

```javascript
// 不能使用 + 连接符，也可以不需要空格，这里只是为了区分
content: "我支持" attr(xx);
count: "我的掘金头像：" url("xxxxx");
content: "计数器的值为：" counter(xx);
```

```HTML
<a href="https://juejin.im/user/587e1822128fe1005706db1c"></a>

<style>
a {
  &:empty {
    &::after {
      content: "链接内容为：" attr(href);
    }
  }
}
</style>
```

![content](https://raw.githubusercontent.com/13916253446/assets/master/public/10.e5336izrmw.0.106.87_9999_(iPhone%206_7_8%20Plus)%20(1).png)

### 加载中动画

```HTML
<p>加载中</p>

<style>
p {
  &::after {
    content: ".";
    animation: loading 2s ease infinite;

    @keyframes loading {
      33% {
        content: "..";
      }

      66% {
        content: "...";
      }
    }
  }
}
</style>
```

![content animation](https://user-images.githubusercontent.com/20011519/66750476-21846600-eebf-11e9-912f-cfc21dab216b.gif)
