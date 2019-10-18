//? chrome使用总结模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "chrome.pageTemplate" */'components/template/page/page.vue')
let loadSkill = () => import(/* webpackChunkName: "chrome.skill" */'../skill/index.vue')
let loadPerformance = () => import(/* webpackChunkName: "chrome.performance" */'../performance/index.vue')
let loadNativeLazy = () => import(/* webpackChunkName: "chrome.nativeLazy" */'../nativeLazy/index.vue')
let loadCoverage = () => import(/* webpackChunkName: "chrome.coverage" */'../coverage/index.vue')
let loadPerformanceMonitor = () => import(/* webpackChunkName: "chrome.performanceMonitor" */'../performanceMonitor/index.vue')
let loadLCP = () => import(/* webpackChunkName: "chrome.LCP" */'../LCP/index.vue')
let loadCopyEleStyle = () => import(/* webpackChunkName: "chrome.copyEleStyle" */'../copyEleStyle/index.vue')
let loadScreenshot = () => import(/* webpackChunkName: "chrome.screenshot" */'../screenshot/index.vue')
let loadColor = () => import(/* webpackChunkName: "chrome.color" */'../color/index.vue')
let loadPauseJs = () => import(/* webpackChunkName: "chrome.pauseJs" */'../pauseJs/index.vue')
let loadLiveJs = () => import(/* webpackChunkName: "chrome.liveJs" */'../liveJs/index.vue')
let loadSearchSkill = () => import(/* webpackChunkName: "chrome.searchSkill" */'../searchSkill/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/chrome/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageChromeTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'chrome',
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
    path: '/chrome/skill',
    name: 'ChromeSkill',
    component: loadSkill,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'Chrome使用的一些技巧',
      preload () {}
    }
  },
  {
    path: '/chrome/performance',
    name: 'ChromePerformance',
    component: loadPerformance,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'devTool里面performance',
      preload () {}
    }
  },
  {
    path: '/chrome/nativeLazy',
    name: 'ChromeNativeLazy',
    component: loadNativeLazy,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '原生懒加载',
      preload () {}
    }
  },
  {
    path: '/chrome/coverage',
    name: 'ChromeCoverage',
    component: loadCoverage,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '查看代码覆盖率',
      preload () {}
    }
  },
  {
    path: '/chrome/performanceMonitor',
    name: 'ChromePerformanceMonitor',
    component: loadPerformanceMonitor,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '性能实时监测',
      preload () {}
    }
  },
  {
    path: '/chrome/LCP',
    name: 'ChromeLCP',
    component: loadLCP,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '分析页面第一帧渲染的性能',
      preload () {}
    }
  },
  {
    path: '/chrome/copyEleStyle',
    name: 'ChromeCopyEleStyle',
    component: loadCopyEleStyle,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '复制元素的完整样式',
      preload () {}
    }
  },
  {
    path: '/chrome/screenshot',
    name: 'ChromeScreenshot',
    component: loadScreenshot,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '截屏',
      preload () {}
    }
  },
  {
    path: '/chrome/color',
    name: 'ChromeColor',
    component: loadColor,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '调试工具里面颜色快捷操作',
      preload () {}
    }
  },
  {
    path: '/chrome/pauseJs',
    name: 'ChromePauseJs',
    component: loadPauseJs,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '暂停当前正在执行的代码',
      preload () {}
    }
  },
  {
    path: '/chrome/liveJs',
    name: 'ChromeLiveJs',
    component: loadLiveJs,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '控制台实时的执行表达式',
      preload () {}
    }
  },
  {
    path: '/chrome/searchSkill',
    name: 'ChromeSearchSkill',
    component: loadSearchSkill,
    meta: {
      module: 'chrome',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'Chrome搜索技巧',
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
