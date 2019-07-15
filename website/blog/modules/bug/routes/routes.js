//? 项目中遇到的坑模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "bug.pageTemplate" */'components/template/page/page.vue')
let loadWebpack = () => import(/* webpackChunkName: "bug.webpack" */'../webpack/index.vue')
let loadHybrid = () => import(/* webpackChunkName: "bug.hybrid" */'../hybrid/index.vue')
let loadVueFix = () => import(/* webpackChunkName: "bug.vueFix" */'../vueFix/index.vue')
let loadDll = () => import(/* webpackChunkName: "bug.dll" */'../dll/index.vue')

/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/bug/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageBugTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'bug',
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
    path: '/bug/webpack',
    name: 'BugWebpack',
    component: loadWebpack,
    meta: {
      module: 'bug',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'babel无法编译node_modules下面的ES6',
      preload () {}
    }
  },
  {
    path: '/bug/hybrid',
    name: 'BugHybrid',
    component: loadHybrid,
    meta: {
      module: 'bug',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'hybrid存在的一些问题',
      preload () {}
    }
  },
  {
    path: '/bug/vueFix',
    name: 'BugVueFix',
    component: loadVueFix,
    meta: {
      module: 'bug',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'vue相关的问题',
      preload () {}
    }
  },
  {
    path: '/bug/dll',
    name: 'BugDll',
    component: loadDll,
    meta: {
      module: 'bug',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '打包dll问题',
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
