//? css总结模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "CSS.pageTemplate" */'components/template/page/page.vue')
let loadBoxShadow = () => import(/* webpackChunkName: "CSS.boxShadow" */'../boxShadow/index.vue')
let loadSelector = () => import(/* webpackChunkName: "CSS.selector" */'../selector/index.vue')
let loadOftenCss = () => import(/* webpackChunkName: "CSS.oftenCss" */'../oftenCss/index.vue')
let loadCssGetListCount = () => import(/* webpackChunkName: "CSS.cssGetListCount" */'../cssGetListCount/index.vue')
let loadChangeSkin = () => import(/* webpackChunkName: "CSS.changeSkin" */'../changeSkin/index.vue')
let loadBackgroundPosition = () => import(/* webpackChunkName: "CSS.backgroundPosition" */'../backgroundPosition/index.vue')
let loadObjectFit = () => import(/* webpackChunkName: "CSS.objectFit" */'../objectFit/index.vue')
let loadFlexAuto = () => import(/* webpackChunkName: "CSS.flexAuto" */'../flexAuto/index.vue')
let loadSkill = () => import(/* webpackChunkName: "CSS.skill" */'../skill/index.vue')
let loadTriangleShadow = () => import(/* webpackChunkName: "CSS.triangleShadow" */'../triangleShadow/index.vue')
let loadCopyEleStyle = () => import(/* webpackChunkName: "CSS.copyEleStyle" */'../copyEleStyle/index.vue')
let loadContent = () => import(/* webpackChunkName: "CSS.content" */'../content/index.vue')
let loadBorderRadius = () => import(/* webpackChunkName: "CSS.borderRadius" */'../borderRadius/index.vue')
let loadFontSizeMinPx = () => import(/* webpackChunkName: "CSS.fontSizeMinPx" */'../fontSizeMinPx/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/CSS/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageCSSTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'CSS',
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
    path: '/CSS/boxShadow',
    name: 'CSSBoxShadow',
    component: loadBoxShadow,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'box-shadow',
      preload () {}
    }
  },
  {
    path: '/CSS/selector',
    name: 'CSSSelector',
    component: loadSelector,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '重新学习css选择器',
      preload () {}
    }
  },
  {
    path: '/CSS/oftenCss',
    name: 'CSSOftenCss',
    component: loadOftenCss,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '常用css片段',
      preload () {}
    }
  },
  {
    path: '/CSS/cssGetListCount',
    name: 'CSSCssGetListCount',
    component: loadCssGetListCount,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '通过伪类获取列表总数',
      preload () {}
    }
  },
  {
    path: '/CSS/changeSkin',
    name: 'CSSChangeSkin',
    component: loadChangeSkin,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '切换皮肤方案',
      preload () {}
    }
  },
  {
    path: '/CSS/backgroundPosition',
    name: 'CSSBackgroundPosition',
    component: loadBackgroundPosition,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '理解背景定位',
      preload () {}
    }
  },
  {
    path: '/CSS/objectFit',
    name: 'CSSObjectFit',
    component: loadObjectFit,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '理解ObjectFit',
      preload () {}
    }
  },
  {
    path: '/CSS/flexAuto',
    name: 'CSSFlexAuto',
    component: loadFlexAuto,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'flex中神奇的margin',
      preload () {}
    }
  },
  {
    path: '/CSS/skill',
    name: 'CSSSkill',
    component: loadSkill,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'css技巧',
      preload () {}
    }
  },
  {
    path: '/CSS/triangleShadow',
    name: 'CSSTriangleShadow',
    component: loadTriangleShadow,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '实现三角形阴影',
      preload () {}
    }
  },
  {
    path: '/CSS/copyEleStyle',
    name: 'CSSCopyEleStyle',
    component: loadCopyEleStyle,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '复制元素的完整样式',
      preload () {}
    }
  },
  {
    path: '/CSS/content',
    name: 'CSSContent',
    component: loadContent,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '伪元素技巧',
      preload () {}
    }
  },
  {
    path: '/CSS/borderRadius',
    name: 'CSSBorderRadius',
    component: loadBorderRadius,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '深入理解border-radius',
      preload () {}
    }
  },
  {
    path: '/CSS/fontSizeMinPx',
    name: 'CSSFontSizeMinPx',
    component: loadFontSizeMinPx,
    meta: {
      module: 'CSS',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '解决浏览器字体最小12像素问题',
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
