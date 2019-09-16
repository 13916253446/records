### 利用css改变字母大小写

`text-transform`可以改变英文的大小写

```css
.test {
  // 首字母大写
  text-transform: capitalize;
  // 全部小写
  text-transform: lowercase;
  // 全部大写
  text-transform: uppercase;
}
```

### 对齐未知文字个数

`text-align-last`

![css skill](https://raw.githubusercontent.com/13916253446/assets/master/public/16c89abe8c0d61f4.7klkcw2yjzm.png)

```css
.test {
  // 两端对齐
  text-align-last: justify;
  // 居中对齐
  text-transform: center;
  // 右对齐
  text-transform: end;
}
```

### 输入框获取焦点失去焦点改变父级元素样式

`:focus-within`冒泡规则(**兼容性不是很好**)

```HTML
<div class="parent">
  <input type="text" />
</div>

<style>
.parent:focus-within {
  border: 1px solid red;
}
</style>
```
