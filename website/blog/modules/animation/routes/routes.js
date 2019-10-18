//? 动画技巧模块路由

//! TODO: 路由例子
let loadPageExample = () => import(/* webpackChunkName: "animation.pageTemplate" */'components/template/page/page.vue')
let loadAnimationDelaySkill = () => import(/* webpackChunkName: "animation.animationDelaySkill" */'../animationDelaySkill/index.vue')
let loadBorderWidth = () => import(/* webpackChunkName: "animation.borderWidth" */'../borderWidth/index.vue')
let loadTransformOrigin = () => import(/* webpackChunkName: "animation.transformOrigin" */'../transformOrigin/index.vue')
let loadAnimationDirection = () => import(/* webpackChunkName: "animation.animationDirection" */'../animationDirection/index.vue')
let loadDirectionAnimation = () => import(/* webpackChunkName: "animation.directionAnimation" */'../directionAnimation/index.vue')
/* @init<%
let load${TplModulePageUpper} = () => import(${TplAnnotationStart} webpackChunkName: "${TplModuleName}.${TplModulePage}" ${TplAnnotationEnd}'../${TplModulePage}/index.vue')%> */

/* eslint-disable */
export const routes = [
  {
    //! 模块/组件名字
    path: '/animation/pageTemplate',
    //! 如果使用keepAlive这个name必须和组件内部的name相同，要不然页面缓存无效
    name: 'pageAnimationTemplate',
    //! 路由懒加载
    component: loadPageExample,
    meta: {
      //? 模块标识 (必传，否则钩子进不来)
      module: 'animation',
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
    path: '/animation/animationDelaySkill',
    name: 'AnimationAnimationDelaySkill',
    component: loadAnimationDelaySkill,
    meta: {
      module: 'animation',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'animation-delay技巧',
      preload () {}
    }
  },
  {
    path: '/animation/borderWidth',
    name: 'AnimationBorderWidth',
    component: loadBorderWidth,
    meta: {
      module: 'animation',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'border-widtd动画技巧',
      preload () {}
    }
  },
  {
    path: '/animation/transformOrigin',
    name: 'AnimationTransformOrigin',
    component: loadTransformOrigin,
    meta: {
      module: 'animation',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: 'transform-origin动画技巧',
      preload () {}
    }
  },
  {
    path: '/animation/animationDirection',
    name: 'AnimationAnimationDirection',
    component: loadAnimationDirection,
    meta: {
      module: 'animation',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '动画方向是否反向',
      preload () {}
    }
  },
  {
    path: '/animation/directionAnimation',
    name: 'AnimationDirectionAnimation',
    component: loadDirectionAnimation,
    meta: {
      module: 'animation',
      loginAuth: false,
      bgClass: '',
      keepAlive: true,
      title: '径向动画里面的数学知识',
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
