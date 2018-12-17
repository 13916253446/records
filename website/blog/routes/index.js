import Vue from 'vue'
import VueRouter from 'vue-router'
import routerHooks from './hooks.js'
//! Vue知识点总结
import VueRoutes from '../modules/Vue/routes/routes.js'
/* @init<%
//! ${TplModuleIntroduction}
import ${TplModuleName}Routes from '../modules/${TplModuleName}/routes/routes.js'%> */

Vue.use(VueRouter)
/* eslint-disable */
export const router = new VueRouter({
  routes: [
    //! Vue知识点总结
    ...VueRoutes,
    /* @init<%
    //! ${TplModuleIntroduction}
    ...${TplModuleName}Routes,%>*/
  ]
})
/* eslint-enable */
//? 添加路由钩子
routerHooks(router)

export default router
