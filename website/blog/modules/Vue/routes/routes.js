//? vue知识总结模块路由

//! TODO: 路由例子
let loadSkill = () => import(/* webpackChunkName: "VUE.skill" */'../skill/index.vue')
let loadPlugin = () => import(/* webpackChunkName: "VUE.plugin" */'../plugin/index.vue')
let loadRender = () => import(/* webpackChunkName: "VUE.render" */'../render/index.vue')
let loadAbstract = () => import(/* webpackChunkName: "VUE.abstract" */'../abstract/index.vue')
let loadMeasureVuePerformance = () => import(/* webpackChunkName: "VUE.measureVuePerformance" */'../measureVuePerformance/index.vue')
let loadExpand = () => import(/* webpackChunkName: "VUE.expand" */'../expand/index.vue')
let loadListeners = () => import(/* webpackChunkName: "VUE.listeners" */'../listeners/index.vue')
let loadSetTitle = () => import(/* webpackChunkName: "VUE.setTitle" */'../setTitle/index.vue')
let loadComponentHooks = () => import(/* webpackChunkName: "VUE.componentHooks" */'../componentHooks/index.vue')
let loadFunctionalComponent = () => import(/* webpackChunkName: "VUE.functionalComponent" */'../functionalComponent/index.vue')
let loadPerformance = () => import(/* webpackChunkName: "VUE.performance" */'../performance/index.vue')
let loadDebuggerTemplate = () => import(/* webpackChunkName: "VUE.debuggerTemplate" */'../debuggerTemplate/index.vue')
let loadMaintain = () => import(/* webpackChunkName: "VUE.maintain" */'../maintain/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    path: '/VUE/skill',
    name: 'VUESkill',
    component: loadSkill,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'vue使用技巧',
      preload () {}
    }
  },
  {
    path: '/VUE/plugin',
    name: 'VUEPlugin',
    component: loadPlugin,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '注册Vue插件',
      preload () {}
    }
  },
  {
    path: '/VUE/render',
    name: 'VUERender',
    component: loadRender,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '深入render函数',
      preload () {}
    }
  },
  {
    path: '/VUE/abstract',
    name: 'VUEAbstract',
    component: loadAbstract,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '抽象组件',
      preload () {}
    }
  },
  {
    path: '/VUE/measureVuePerformance',
    name: 'VUEMeasureVuePerformance',
    component: loadMeasureVuePerformance,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '收集Vue性能',
      preload () {}
    }
  },
  {
    path: '/VUE/expand',
    name: 'VUEExpand',
    component: loadExpand,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '扩展Vue组件',
      preload () {}
    }
  },
  {
    path: '/VUE/listeners',
    name: 'VUEListeners',
    component: loadListeners,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '$listeners的使用技巧',
      preload () {}
    }
  },
  {
    path: '/VUE/setTitle',
    name: 'VUESetTitle',
    component: loadSetTitle,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '更新title的另一种思路',
      preload () {}
    }
  },
  {
    path: '/VUE/componentHooks',
    name: 'VUEComponentHooks',
    component: loadComponentHooks,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '捕获子组件生命周期',
      preload () {}
    }
  },
  {
    path: '/VUE/functionalComponent',
    name: 'VUEFunctionalComponent',
    component: loadFunctionalComponent,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '函数式组件',
      preload () {}
    }
  },
  {
    path: '/VUE/performance',
    name: 'VUEPerformance',
    component: loadPerformance,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'vue性能优化',
      preload () {}
    }
  },
  {
    path: '/VUE/debuggerTemplate',
    name: 'VUEDebuggerTemplate',
    component: loadDebuggerTemplate,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '调试Vue模板',
      preload () {}
    }
  },
  {
    path: '/VUE/maintain',
    name: 'VUEMaintain',
    component: loadMaintain,
    meta: {
      module: 'VUE',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '维护Vue代码结构',
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
