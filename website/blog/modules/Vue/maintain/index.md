### 组合全局组件

之前我们注册全局组件都是在`index.js`一个个导入组件,然后注册全局组件。这样就造成入口文件代码臃肿，难以维护。

> 我们可以建立以`component.js`里面维护全局组件,入口文件只需要导入这个文件即可。

```javascript
// component.js
export default {
  install: Vue => {
    Vue.component('Icon', Icon)
    Vue.component('Promise', Promise)
  }
}

// index.js
import installComponent from './component.js'
Vue.use(installComponent)
```
