import Vue from 'vue'
import VueRouter from 'vue-router'
import routerHooks from './hooks.js'
//! vue知识总结
import VUERoutes from '../modules/VUE/routes/routes.js'
//! css总结
import CSSRoutes from '../modules/CSS/routes/routes.js'
/* @init<%
//! ${TplModuleIntroduction}
import ${TplModuleName}Routes from '../modules/${TplModuleName}/routes/routes.js'%> */

Vue.use(VueRouter)
/* eslint-disable */
export const router = new VueRouter({
  routes: [
    //! vue知识总结
    ...VUERoutes,
    //! css总结
    ...CSSRoutes,
    /* @init<%
    //! ${TplModuleIntroduction}
    ...${TplModuleName}Routes,%>*/
  ]
})
/* eslint-enable */
//? 添加路由钩子
routerHooks(router)

export default router
