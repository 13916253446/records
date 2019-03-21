//? 干货模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "Foods.pageTemplate" */'components/template/page/page.vue')
let loadBackForwardCache = () => import(/* webpackChunkName: "Foods.BackForwardCache" */'../BackForwardCache/index.vue')
let loadLGTM = () => import(/* webpackChunkName: "Foods.LGTM" */'../LGTM/index.vue')
let loadBrowserRender = () => import(/* webpackChunkName: "Foods.browserRender" */'../browserRender/index.vue')
let loadPageLifeCircle = () => import(/* webpackChunkName: "Foods.pageLifeCircle" */'../pageLifeCircle/index.vue')
let loadEventCapturePropagation = () => import(/* webpackChunkName: "Foods.eventCapturePropagation" */'../eventCapturePropagation/index.vue')
let loadFontFace = () => import(/* webpackChunkName: "Foods.fontFace" */'../fontFace/index.vue')
let loadChromeFirstPain = () => import(/* webpackChunkName: "Foods.chromeFirstPain" */'../chromeFirstPain/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/Foods/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageFoodsTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'Foods',
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
    path: '/Foods/BackForwardCache',
    name: 'FoodsBackForwardCache',
    component: loadBackForwardCache,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '浏览器往返缓存解决方案',
      preload () {}
    }
  },
  {
    path: '/Foods/LGTM',
    name: 'FoodsLGTM',
    component: loadLGTM,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '程序里面的缩写',
      preload () {}
    }
  },
  {
    path: '/Foods/browserRender',
    name: 'FoodsBrowserRender',
    component: loadBrowserRender,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '浏览器解析过程',
      preload () {}
    }
  },
  {
    path: '/Foods/pageLifeCircle',
    name: 'FoodsPageLifeCircle',
    component: loadPageLifeCircle,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '页面事件',
      preload () {}
    }
  },
  {
    path: '/Foods/eventCapturePropagation',
    name: 'FoodsEventCapturePropagation',
    component: loadEventCapturePropagation,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '事件捕获与冒泡',
      preload () {}
    }
  },
  {
    path: '/Foods/fontFace',
    name: 'FoodsFontFace',
    component: loadFontFace,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '字体文件优化加载和渲染',
      preload () {}
    }
  },
  {
    path: '/Foods/chromeFirstPain',
    name: 'FoodsChromeFirstPain',
    component: loadChromeFirstPain,
    meta: {
      module: 'Foods',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'chrome的第一帧渲染',
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
