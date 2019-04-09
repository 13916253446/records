### 在[Chrome 75](https://chromestatus.com/feature/5645767347798016)中以实现懒加载

可以适用于图片(`<img />`)，以及iframe(`<iframe>`)

```HTML
<img src="celebration.jpg" loading="lazy" alt="..." />
<iframe src="video-player.html" loading="lazy"></iframe>
```

### `loading`属性值

- `lazy`: 延迟加载
- `eager`: 立马加载
- `auto`: 由浏览器判断是否延迟加载

### 兼容性检测

```javascript
if ('loading' in HTMLImageElement.prototype) {
  // Browser supports `loading`..
} else {
  // Fetch and apply a polyfill/JavaScript library
```

### 按需加载兼容性库

```HTML
<img src="hero.jpg" alt=".."/>

<!-- Let's lazy-load the rest of these images -->
<img data-src="unicorn.jpg" loading="lazy" alt=".." class="lazyload"/>
<img data-src="cats.jpg" loading="lazy" alt=".." class="lazyload"/>
<img data-src="dogs.jpg" loading="lazy" alt=".." class="lazyload"/>

<script>
(async () => {
    const images = document.querySelectorAll("img.lazyload");
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Dynamically import the LazySizes library
        const lazySizesLib = await import('/lazysizes.min.js');
        // Initiate LazySizes (reads data-src & class=lazyload)
        lazySizes.init(); // lazySizes works off a global.
    }
})();
</script>
```

## 参考：

- [图像的原生延迟加载](https://addyosmani.com/blog/lazy-loading/)