# 通过html构建幻灯片

-   [reveal](https://github.com/hakimel/reveal.js)
    
    HTML里面可以直接插入markdown，来制作漂亮的幻灯片，来做演示[demo](https://revealjs.com)

# 一看漂亮而且好用的文件上传组件


- [uppy](https://github.com/transloadit/uppy)

# 汉字转拼音

-   [pinyin](https://github.com/hotoo/pinyin)
    
    ```javascript
    var pinyin = require("pinyin");
    
    console.log(pinyin("中心"));    // [ [ 'zhōng' ], [ 'xīn' ] ]
    console.log(pinyin("中心", {
      heteronym: true               // 启用多音字模式
    }));                            // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
    ```
