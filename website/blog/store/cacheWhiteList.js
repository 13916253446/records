//? 缓存白名单
//! VUE模块白名单
import VUEWhite from '../modules/VUE/store/cacheWhiteList.js'
//! CSS模块白名单
import CSSWhite from '../modules/CSS/store/cacheWhiteList.js'
//! ES6模块白名单
import ES6White from '../modules/ES6/store/cacheWhiteList.js'
/* eslint-disable */
//! chrome模块白名单
import chromeWhite from '../modules/chrome/store/cacheWhiteList.js'
//! newAPI模块白名单
import newAPIWhite from '../modules/newAPI/store/cacheWhiteList.js'


/* @init<%
//! ${TplModuleName}模块白名单
import ${TplModuleName}White from '../modules/${TplModuleName}/store/cacheWhiteList.js'%> */
export const whiteList = [
  ...VUEWhite,
  ...CSSWhite,
  ...ES6White,
  ...chromeWhite,
  ...newAPIWhite,


  /* @init<%
  ...${TplModuleName}White,%>*/
]
/* eslint-enable */

export default whiteList
