//? 项目管理工具模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "Tools.pageTemplate" */'components/template/page/page.vue')
let loadNpm = () => import(/* webpackChunkName: "Tools.npm" */'../npm/index.vue')
let loadLerna = () => import(/* webpackChunkName: "Tools.lerna" */'../lerna/index.vue')
let loadMacSkitll = () => import(/* webpackChunkName: "Tools.MacSkitll" */'../MacSkitll/index.vue')
let loadMarkdownTree = () => import(/* webpackChunkName: "Tools.markdownTree" */'../markdownTree/index.vue')
let loadWebpackErrors = () => import(/* webpackChunkName: "Tools.webpackErrors" */'../webpackErrors/index.vue')
let loadCss = () => import(/* webpackChunkName: "Tools.css" */'../css/index.vue')
let loadGitTheory = () => import(/* webpackChunkName: "Tools.gitTheory" */'../gitTheory/index.vue')
let loadOftenGit = () => import(/* webpackChunkName: "Tools.oftenGit" */'../oftenGit/index.vue')


/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')
%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/Tools/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageToolsTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'Tools',
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
    path: '/Tools/npm',
    name: 'ToolsNpm',
    component: loadNpm,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'npm使用技巧',
      preload () {}
    }
  },
  {
    path: '/Tools/lerna',
    name: 'ToolsLerna',
    component: loadLerna,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'Lerna多项目管理',
      preload () {}
    }
  },
  {
    path: '/Tools/MacSkitll',
    name: 'ToolsMacSkitll',
    component: loadMacSkitll,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'Mac使用技巧',
      preload () {}
    }
  },
  {
    path: '/Tools/markdownTree',
    name: 'ToolsMarkdownTree',
    component: loadMarkdownTree,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'markdown文件编写树形目录',
      preload () {}
    }
  },
  {
    path: '/Tools/webpackErrors',
    name: 'ToolsWebpackErrors',
    component: loadWebpackErrors,
    meta: {
      module: 'Tools',
      loginAuth: true,
      bgClass: '',
      keepAlive: true,
      title: 'webpack错误收集',
      preload () {}
    }
  },
  {
    path: '/Tools/css',
    name: 'ToolsCss',
    component: loadCss,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '常用css代码片段',
      preload () {}
    }
  },
  {
    path: '/Tools/gitTheory',
    name: 'ToolsGitTheory',
    component: loadGitTheory,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'git原理',
      preload () {}
    }
  },
  {
    path: '/Tools/oftenGit',
    name: 'ToolsOftenGit',
    component: loadOftenGit,
    meta: {
      module: 'Tools',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '常用git',
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
