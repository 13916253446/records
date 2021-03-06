//? 原生js模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "javascript.pageTemplate" */'components/template/page/page.vue')
let loadSkill = () => import(/* webpackChunkName: "javascript.skill" */'../skill/index.vue')
let loadObject = () => import(/* webpackChunkName: "javascript.object" */'../object/index.vue')
let loadAst = () => import(/* webpackChunkName: "javascript.ast" */'../ast/index.vue')
let loadVoid = () => import(/* webpackChunkName: "javascript.void" */'../void/index.vue')
let loadErrorCollect = () => import(/* webpackChunkName: "javascript.errorCollect" */'../errorCollect/index.vue')
let loadTemporalDeadZone = () => import(/* webpackChunkName: "javascript.temporalDeadZone" */'../temporalDeadZone/index.vue')
let loadTypeOfInstanceof = () => import(/* webpackChunkName: "javascript.typeOfInstanceof" */'../typeOfInstanceof/index.vue')
let loadPrototype = () => import(/* webpackChunkName: "javascript.prototype" */'../prototype/index.vue')
let loadEventLoop = () => import(/* webpackChunkName: "javascript.eventLoop" */'../eventLoop/index.vue')
let loadRequestAnimationFrame = () => import(/* webpackChunkName: "javascript.requestAnimationFrame" */'../requestAnimationFrame/index.vue')
let loadArray = () => import(/* webpackChunkName: "javascript.Array" */'../Array/index.vue')
let loadBreakLoop = () => import(/* webpackChunkName: "javascript.breakLoop" */'../breakLoop/index.vue')
let loadArrayAdvanced = () => import(/* webpackChunkName: "javascript.arrayAdvanced" */'../arrayAdvanced/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/javascript/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageJavascriptTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'javascript',
      //? TODO: 解决ios上面弹性滚动，不同的页面不同的底色问题
      //! 如果是默认配置的底色就不要添加这个项，值为空字符串表示不设置页面底色
      bgClass: '',
      //? 页面是否缓存，缓存页面再次进来将不进行任何请求，以及保持原来滚动位置
      keepAlive: true,
      //? 页面标题
      title: '例子',
      //? 预加载方法，可以预加载后续页面，这个方法会在页面进来之后，空闲的时间去执行，不干扰当前页面
      preload () {}
    }
  },
  {
    path: '/javascript/skill',
    name: 'JavascriptSkill',
    component: loadSkill,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'JS技巧',
      preload () {}
    }
  },
  {
    path: '/javascript/object',
    name: 'JavascriptObject',
    component: loadObject,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '对象相关知识',
      preload () {}
    }
  },
  {
    path: '/javascript/ast',
    name: 'JavascriptAst',
    component: loadAst,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '抽象语法树',
      preload () {}
    }
  },
  {
    path: '/javascript/void',
    name: 'JavascriptVoid',
    component: loadVoid,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'void用法',
      preload () {}
    }
  },
  {
    path: '/javascript/errorCollect',
    name: 'JavascriptErrorCollect',
    component: loadErrorCollect,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '错误搜集',
      preload () {}
    }
  },
  {
    path: '/javascript/temporalDeadZone',
    name: 'JavascriptTemporalDeadZone',
    component: loadTemporalDeadZone,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '暂时性死区',
      preload () {}
    }
  },
  {
    path: '/javascript/typeOfInstanceof',
    name: 'JavascriptTypeOfInstanceof',
    component: loadTypeOfInstanceof,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'typeOf以及Instanceof的使用',
      preload () {}
    }
  },
  {
    path: '/javascript/prototype',
    name: 'JavascriptPrototype',
    component: loadPrototype,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '原型以及原型链',
      preload () {}
    }
  },
  {
    path: '/javascript/eventLoop',
    name: 'JavascriptEventLoop',
    component: loadEventLoop,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '理解浏览器的事件循环',
      preload () {}
    }
  },
  {
    path: '/javascript/requestAnimationFrame',
    name: 'JavascriptRequestAnimationFrame',
    component: loadRequestAnimationFrame,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '关于requestAnimationFrame的总结',
      preload () {}
    }
  },
  {
    path: '/javascript/Array',
    name: 'JavascriptArray',
    component: loadArray,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: false,
      title: '数组的操作',
      preload () {}
    }
  },
  {
    path: '/javascript/breakLoop',
    name: 'JavascriptBreakLoop',
    component: loadBreakLoop,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '退出循环',
      preload () {}
    }
  },
  {
    path: '/javascript/arrayAdvanced',
    name: 'JavascriptArrayAdvanced',
    component: loadArrayAdvanced,
    meta: {
      module: 'javascript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '数组的高级操作',
      preload () {}
    }
  },







  /* @init<%
  {
    path: '/${TplModuleName}/${TplModulePage}',
    name: '${TplModuleNameUpper}${TplModulePageUpper}',
    component: load${TplModulePageUpper},
    meta: {
      module: '${TplModuleName}',
      loginAuth: ${loginAuth},
      bgClass: '',
      keepAlive: ${keepAlive},
      title: '${TplModulePageTitle}',
      preload () {}
    }
  },%> */
]
/* eslint-enable */

export default routes
