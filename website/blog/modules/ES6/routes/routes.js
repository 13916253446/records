//? 常用ES6总结模块路由
/* eslint-disable */
//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "ES6.pageTemplate" */'components/template/page/page.vue')
let loadAsync = () => import(/* webpackChunkName: "ES6.async" */'../async/index.vue')
let loadClass = () => import(/* webpackChunkName: "ES6.class" */'../class/index.vue')
let loadPromiseTopic = () => import(/* webpackChunkName: "ES6.promiseTopic" */'../promiseTopic/index.vue')
let loadForOf = () => import(/* webpackChunkName: "ES6.forOf" */'../forOf/index.vue')
let loadForAwait = () => import(/* webpackChunkName: "ES6.forAwait" */'../forAwait/index.vue')
let loadNewEs6 = () => import(/* webpackChunkName: "ES6.newEs6" */'../newEs6/index.vue')

/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */
export const routes = [
  {
    //! 模块/组件名字
    path: '/ES6/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageES6Template',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'ES6',
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
    path: '/ES6/async',
    name: 'ES6Async',
    component: loadAsync,
    meta: {
      module: 'ES6',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'async/await使用',
      preload () {}
    }
  },
  {
    path: '/ES6/class',
    name: 'ES6Class',
    component: loadClass,
    meta: {
      module: 'ES6',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'class用法总结',
      preload () {}
    }
  },
  {
    path: '/ES6/promiseTopic',
    name: 'ES6PromiseTopic',
    component: loadPromiseTopic,
    meta: {
      module: 'ES6',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'Promise题目解析',
      preload () {}
    }
  },
  {
    path: '/ES6/forOf',
    name: 'ES6ForOf',
    component: loadForOf,
    meta: {
      module: 'ES6',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '关于for..of的使用',
      preload () {}
    }
  },
  {
    path: '/ES6/forAwait',
    name: 'ES6ForAwait',
    component: loadForAwait,
    meta: {
      module: 'ES6',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '在循环中使用异步',
      preload () {}
    }
  },
  {
    path: '/ES6/newEs6',
    name: 'ES6NewEs6',
    component: loadNewEs6,
    meta: {
      module: 'ES6',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '新的ES6语法',
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
