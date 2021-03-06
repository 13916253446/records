//? typescript使用模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "typescript.pageTemplate" */'components/template/page/page.vue')
let loadSkill = () => import(/* webpackChunkName: "typescript.skill" */'../skill/index.vue')
let loadTsd = () => import(/* webpackChunkName: "typescript.tsd" */'../tsd/index.vue')
let loadOperator = () => import(/* webpackChunkName: "typescript.operator" */'../operator/index.vue')
let loadVersionChangeLog = () => import(/* webpackChunkName: "typescript.versionChangeLog" */'../versionChangeLog/index.vue')
let loadTsconfig = () => import(/* webpackChunkName: "typescript.tsconfig" */'../tsconfig/index.vue')
let loadUseSkill = () => import(/* webpackChunkName: "typescript.useSkill" */'../useSkill/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */
/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/typescript/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageTypescriptTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'typescript',
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
    path: '/typescript/skill',
    name: 'TypescriptSkill',
    component: loadSkill,
    meta: {
      module: 'typescript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'ts使用技巧',
      preload () {}
    }
  },
  {
    path: '/typescript/tsd',
    name: 'TypescriptTsd',
    component: loadTsd,
    meta: {
      module: 'typescript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '如何编写tsd文件',
      preload () {}
    }
  },
  {
    path: '/typescript/operator',
    name: 'TypescriptOperator',
    component: loadOperator,
    meta: {
      module: 'typescript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '运算符',
      preload () {}
    }
  },
  {
    path: '/typescript/versionChangeLog',
    name: 'TypescriptVersionChangeLog',
    component: loadVersionChangeLog,
    meta: {
      module: 'typescript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '版本变化',
      preload () {}
    }
  },
  {
    path: '/typescript/tsconfig',
    name: 'TypescriptTsconfig',
    component: loadTsconfig,
    meta: {
      module: 'typescript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '理解tsconfig',
      preload () {}
    }
  },
  {
    path: '/typescript/useSkill',
    name: 'TypescriptUseSkill',
    component: loadUseSkill,
    meta: {
      module: 'typescript',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '使用技巧',
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
