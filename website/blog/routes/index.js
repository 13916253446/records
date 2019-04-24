import Vue from 'vue'
import VueRouter from 'vue-router'
import routerHooks from './hooks.js'
//! vue知识总结
import VUERoutes from '../modules/VUE/routes/routes.js'
//! css总结
import CSSRoutes from '../modules/CSS/routes/routes.js'
//! 常用ES6总结
import ES6Routes from '../modules/ES6/routes/routes.js'
//! chrome使用总结
import chromeRoutes from '../modules/chrome/routes/routes.js'
/* eslint-disable */
//! 新的API
import newAPIRoutes from '../modules/newAPI/routes/routes.js'
//! 项目管理工具
import ToolsRoutes from '../modules/Tools/routes/routes.js'
//! 插件包
import PackagesRoutes from '../modules/Packages/routes/routes.js'
//! 原生js
import javascriptRoutes from '../modules/javascript/routes/routes.js'
//! 项目中遇到的坑
import bugRoutes from '../modules/bug/routes/routes.js'
//! 干货
import FoodsRoutes from '../modules/Foods/routes/routes.js'
//! 性能优化
import performanceRoutes from '../modules/performance/routes/routes.js'
//! 编程思想
import thoughtRoutes from '../modules/thought/routes/routes.js'
//! webpack总结
import webpackRoutes from '../modules/webpack/routes/routes.js'
//! github总结
import githubRoutes from '../modules/github/routes/routes.js'
//! html相关
import htmlRoutes from '../modules/html/routes/routes.js'
//! vscode技巧
import vscodeRoutes from '../modules/vscode/routes/routes.js'
//! 关于npm的知识
import npmRoutes from '../modules/npm/routes/routes.js'
//! 前端工程化
import projectRoutes from '../modules/project/routes/routes.js'


/* @init<%
//! ${TplModuleIntroduction}
import ${TplModuleName}Routes from '../modules/${TplModuleName}/routes/routes.js'%> */

const routes = [
  //! vue知识总结
  ...VUERoutes,
  //! css总结
  ...CSSRoutes,
  //! 常用ES6总结
  ...ES6Routes,
  //! chrome使用总结
  ...chromeRoutes,
  //! 新的API
  ...newAPIRoutes,
  //! 项目管理工具
  ...ToolsRoutes,
  //! 404页面
  {
    path: '*',
    name: '404',
    component: import(/* webpackChunkName: "404" */'../404.vue')
  },
  //! 插件包
  ...PackagesRoutes,
  //! 原生js
  ...javascriptRoutes,
  //! 项目中遇到的坑
  ...bugRoutes,
  //! 干货
  ...FoodsRoutes,
  //! 性能优化
  ...performanceRoutes,
  //! 编程思想
  ...thoughtRoutes,
  //! webpack总结
  ...webpackRoutes,
  //! github总结
  ...githubRoutes,
  //! html相关
  ...htmlRoutes,
  //! vscode技巧
  ...vscodeRoutes,
  //! 关于npm的知识
  ...npmRoutes,
  //! 前端工程化
  ...projectRoutes,

  /* @init<%
  //! ${TplModuleIntroduction}
  ...${TplModuleName}Routes,%>*/
]
/* eslint-enable */

Vue.use(VueRouter)
export const router = new VueRouter({
  routes
})
//? 添加路由钩子
routerHooks(router)

//? 第一个桥接为默认路由
if (routes.length > 1) {
  router.addRoutes([
    {
      path: '/',
      name: 'Home',
      redirect: routes[1].path
    }
  ])
}

export default router
