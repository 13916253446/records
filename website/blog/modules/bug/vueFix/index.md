# 路由参数类型问题

前提条件是，路由参数是number类型，才会有这些问题

1、通过`query`传递的方式，页面通过`vue-router`的方式进入的时候(`push`,`back`,`go`)这些方法进入的时候，页面参数还是`Number`类型，别的方式进入(**F5刷新，window.location.href，浏览器返回等方式进入**)都会变成`String`类型。

2、通过`params`的方式进入，始终都是`String`类型

3、通过`props`的方式进入，始终都是`String`类型

```javascript
{
  path: '/warehouseDetail',
  props: true,
  name: 'WarehouseDetail',
  component: warehouseDetail,
  meta: {
    title: '仓库详情'
  }
}
```

# 通过`params`方式传递参数的问题

由于`params`方式，是把参数放到内存里面，所以刷新页面后参数会丢失，但是可以设置动态路由的方式，动态路由的参数，也可以通过`params`方式去读取参数，这样就不会丢失了

```javascript
{
  path: '/warehouseDetail/:id',
  name: 'WarehouseDetail',
  component: warehouseDetail,
  meta: {
    title: '仓库详情'
  }
}

// 通过params读取
this.$route.params.id
```
