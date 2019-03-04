# `stylus`弹簧动画函数

```stylus
spring-wobbly(t)
  return -0.5 * (2.71828 ** (-6 * t)) * (
    -2 * (2.71828 ** (6 * t)) + sin(12 * t) + 2 * cos(12 * t))

lerp(a, b, p)
  return a + p * (b - a)
```

用法：

```stylus
@keyframes move
  for i in (0..100)
    {i + '%'}
      t = i / 100
      p = spring-wobbly(t)
      left: lerp(100px, 200px, p)
```
