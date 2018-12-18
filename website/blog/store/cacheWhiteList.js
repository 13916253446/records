//? 缓存白名单
//! VUE模块白名单
import VUEWhite from '../modules/VUE/store/cacheWhiteList.js'
/* @init<%
//! ${TplModuleName}模块白名单
import ${TplModuleName}White from '../modules/${TplModuleName}/store/cacheWhiteList.js'%> */

/* eslint-disable */
export const whiteList = [
  ...VUEWhite,
  /* @init<%
  ...${TplModuleName}White,%>*/
]
/* eslint-enable */

export default whiteList
