//? vue知识总结模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "VUE.pageTemplate" */'components/template/page/page.vue')
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
    //! 模块/组件名字
    path: '/VUE/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageVUETemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'VUE',
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
