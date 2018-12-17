//? 缓存白名单
//! Vue模块白名单
import VueWhite from '../modules/Vue/store/cacheWhiteList.js'
/* @init<%
//! ${TplModuleName}模块白名单
import ${TplModuleName}White from '../modules/${TplModuleName}/store/cacheWhiteList.js'%> */

/* eslint-disable */
export const whiteList = [
  ...VueWhite,
  /* @init<%
  ...${TplModuleName}White,%>*/
]
/* eslint-enable */

export default whiteList
