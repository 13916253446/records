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
//! Tools模块白名单
import ToolsWhite from '../modules/Tools/store/cacheWhiteList.js'
//! Packages模块白名单
import PackagesWhite from '../modules/Packages/store/cacheWhiteList.js'
//! javascript模块白名单
import javascriptWhite from '../modules/javascript/store/cacheWhiteList.js'
//! bug模块白名单
import bugWhite from '../modules/bug/store/cacheWhiteList.js'
//! Foods模块白名单
import FoodsWhite from '../modules/Foods/store/cacheWhiteList.js'
//! performance模块白名单
import performanceWhite from '../modules/performance/store/cacheWhiteList.js'
//! thought模块白名单
import thoughtWhite from '../modules/thought/store/cacheWhiteList.js'
//! webpack模块白名单
import webpackWhite from '../modules/webpack/store/cacheWhiteList.js'
//! github模块白名单
import githubWhite from '../modules/github/store/cacheWhiteList.js'
//! html模块白名单
import htmlWhite from '../modules/html/store/cacheWhiteList.js'
//! vscode模块白名单
import vscodeWhite from '../modules/vscode/store/cacheWhiteList.js'
//! npm模块白名单
import npmWhite from '../modules/npm/store/cacheWhiteList.js'
//! project模块白名单
import projectWhite from '../modules/project/store/cacheWhiteList.js'
//! flutter模块白名单
import flutterWhite from '../modules/flutter/store/cacheWhiteList.js'
//! standard模块白名单
import standardWhite from '../modules/standard/store/cacheWhiteList.js'


/* @init<%
//! ${TplModuleName}模块白名单
import ${TplModuleName}White from '../modules/${TplModuleName}/store/cacheWhiteList.js'%> */
export const whiteList = [
  ...VUEWhite,
  ...CSSWhite,
  ...ES6White,
  ...chromeWhite,
  ...newAPIWhite,
  ...ToolsWhite,
  ...PackagesWhite,
  ...javascriptWhite,
  ...bugWhite,
  ...FoodsWhite,
  ...performanceWhite,
  ...thoughtWhite,
  ...webpackWhite,
  ...githubWhite,
  ...htmlWhite,
  ...vscodeWhite,
  ...npmWhite,
  ...projectWhite,
  ...flutterWhite,
  ...standardWhite,


  /* @init<%
  ...${TplModuleName}White,%>*/
]
/* eslint-enable */

export default whiteList
