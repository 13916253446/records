import { isFunction } from 'components/tools/utils.js'
import store from '../store/index.js'
import NProgress from 'nprogress'
//! VUE模块钩子
import { entryBefore as VUEEntryBefore } from '../modules/VUE/routes/routerHooks.js'
//! CSS模块钩子
import { entryBefore as CSSEntryBefore } from '../modules/CSS/routes/routerHooks.js'
//! ES6模块钩子
import { entryBefore as ES6EntryBefore } from '../modules/ES6/routes/routerHooks.js'
//! chrome模块钩子
import { entryBefore as chromeEntryBefore } from '../modules/chrome/routes/routerHooks.js'
//! newAPI模块钩子
import { entryBefore as newAPIEntryBefore } from '../modules/newAPI/routes/routerHooks.js'
/* eslint-disable */
//! Tools模块钩子
import { entryBefore as ToolsEntryBefore } from '../modules/Tools/routes/routerHooks.js'
//! Packages模块钩子
import { entryBefore as PackagesEntryBefore } from '../modules/Packages/routes/routerHooks.js'
//! javascript模块钩子
import { entryBefore as javascriptEntryBefore } from '../modules/javascript/routes/routerHooks.js'
//! bug模块钩子
import { entryBefore as bugEntryBefore } from '../modules/bug/routes/routerHooks.js'
//! Foods模块钩子
import { entryBefore as FoodsEntryBefore } from '../modules/Foods/routes/routerHooks.js'
//! performance模块钩子
import { entryBefore as performanceEntryBefore } from '../modules/performance/routes/routerHooks.js'
//! thought模块钩子
import { entryBefore as thoughtEntryBefore } from '../modules/thought/routes/routerHooks.js'
//! webpack模块钩子
import { entryBefore as webpackEntryBefore } from '../modules/webpack/routes/routerHooks.js'
//! github模块钩子
import { entryBefore as githubEntryBefore } from '../modules/github/routes/routerHooks.js'
//! html模块钩子
import { entryBefore as htmlEntryBefore } from '../modules/html/routes/routerHooks.js'
//! vscode模块钩子
import { entryBefore as vscodeEntryBefore } from '../modules/vscode/routes/routerHooks.js'
//! npm模块钩子
import { entryBefore as npmEntryBefore } from '../modules/npm/routes/routerHooks.js'
//! project模块钩子
import { entryBefore as projectEntryBefore } from '../modules/project/routes/routerHooks.js'

/* @init<%
//! ${TplModuleName}模块钩子
import { entryBefore as ${TplModuleName}EntryBefore } from '../modules/${TplModuleName}/routes/routerHooks.js'%> */

//? 存放钩子模型
const hooksModel = {
  'test': '',
  VUEEntryBefore,
  CSSEntryBefore,
  ES6EntryBefore,
  chromeEntryBefore,
  newAPIEntryBefore,
  ToolsEntryBefore,
  PackagesEntryBefore,
  javascriptEntryBefore,
  bugEntryBefore,
  FoodsEntryBefore,
  performanceEntryBefore,
  thoughtEntryBefore,
  webpackEntryBefore,
  githubEntryBefore,
  htmlEntryBefore,
  vscodeEntryBefore,
  npmEntryBefore,
  projectEntryBefore,


  /* @init<%
  ${TplModuleName}EntryBefore,%>*/
}
/* eslint-enable */

//? 页面切换动画
let isFirst = true
let pageWhereModel = {}
function setPageChangeAnimation (to, from) {
  //! 页面初次进来不产生动画
  if (isFirst) {
    isFirst = false
    return false
  }
  let { fullPath: toPath } = to
  let { fullPath: fromPath } = from
  pageWhereModel[toPath] = pageWhereModel[toPath] || []
  if (pageWhereModel[fromPath] && pageWhereModel[fromPath].indexOf(toPath) > -1) {
    store.commit('setPageChangeAnimation', 'slide-right')
  } else {
    pageWhereModel[toPath].push(fromPath)
    store.commit('setPageChangeAnimation', 'slide-left')
  }
}

//? 路由钩子
export function routerHooks (router) {
  if (!router) throw new Error('没有发现路由原型')

  //! 页面进来之前
  router.beforeEach((to, from, next) => {
    NProgress.start()
    let { meta: { module, title = '我的博客' } = {} } = to || {}
    let setTitleTimer = setTimeout(() => {
      document.title = title
      clearTimeout(setTitleTimer)
    }, 100)
    //? 进入模块级导航钩子
    let entryBefore = hooksModel[`${module}EntryBefore`]
    if (entryBefore && isFunction(entryBefore)) {
      Promise.resolve(entryBefore())
        .then(result => {
          if (result !== false) {
            //! 设置路由动画
            setPageChangeAnimation(to, from)
            next()
          }
        })
        .catch(error => {
          throw new Error(error)
        })
    } else {
      //! 设置路由动画
      setPageChangeAnimation(to, from)
      next()
    }
  })

  //! 页面进来之后
  router.afterEach((to, from) => {
    NProgress.done()
    let { meta: { preload } = {} } = to || {}
    //? 预加载数据
    if (isFunction(preload)) {
      let timer = setTimeout(() => {
        preload()
        clearTimeout(timer)
      }, 2000)
    }
  })

  //! 导航失败
  router.onError(() => {
  })
}

export default routerHooks
