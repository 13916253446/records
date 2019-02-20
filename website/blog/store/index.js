import Vue from 'vue'
import Vuex from 'vuex'
import createStorePlugin from 'components/tools/storePlugin.js'
import whiteList from './cacheWhiteList.js'
//! vue知识总结
import VUEStore from '../modules/VUE/store/store.js'
//! css总结
import CSSStore from '../modules/CSS/store/store.js'
//! 常用ES6总结
import ES6Store from '../modules/ES6/store/store.js'
//! chrome使用总结
import chromeStore from '../modules/chrome/store/store.js'
/* eslint-disable */
//! 新的API
import newAPIStore from '../modules/newAPI/store/store.js'
//! 项目管理工具
import ToolsStore from '../modules/Tools/store/store.js'
//! 插件包
import PackagesStore from '../modules/Packages/store/store.js'
//! 原生js
import javascriptStore from '../modules/javascript/store/store.js'
//! 项目中遇到的坑
import bugStore from '../modules/bug/store/store.js'
//! 干货
import FoodsStore from '../modules/Foods/store/store.js'
//! 性能优化
import performanceStore from '../modules/performance/store/store.js'

/* @init<%
//! ${TplModuleIntroduction}
import ${TplModuleName}Store from '../modules/${TplModuleName}/store/store.js'%> */

Vue.use(Vuex)

const state = {
  //! 页面切换动画名称
  pageChangeAnimation: '',
  //! 需要缓存的组件名称
  keepAliveComponents: [],
  //! 是否显示左边菜单栏
  menuVisible: false,
  //! 当前页面的选择项
  currentPage: ''
}

const mutations = {
  //! 设置页面切换动画名称
  setPageChangeAnimation (state, name = '') {
    state.pageChangeAnimation = name
  },
  //! 设置缓存页面数据
  setKeepAliveComponents (state, aliveLists = []) {
    state.keepAliveComponents = aliveLists
  },
  //! 设置是否显示左边菜单栏
  setMenuVisible (state, val) {
    state.menuVisible = !!val
  },
  //! 设置当前页面的菜单项
  setCurrentPage (state, val) {
    state.currentPage = val
  }
}

//? 添加缓存插件要用的mutations
const cachePluginMutations = {}
for (let key in state) {
  cachePluginMutations[`_set_${key}`] = (originState, val) => {
    originState[key] = val
  }
}

export const store = new Vuex.Store({
  //? TODO:开启严格模式会深度监测状态树来检测不合规的状态变更，开发环境约束好，生产环境关闭掉
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  modules: {
    //! vue知识总结
    VUE: {
      namespaced: true,
      ...VUEStore
    },
    //! css总结
    CSS: {
      namespaced: true,
      ...CSSStore
    },
    //! 常用ES6总结
    ES6: {
      namespaced: true,
      ...ES6Store
    },
    //! chrome使用总结
    chrome: {
      namespaced: true,
      ...chromeStore
    },
    //! 新的API
    newAPI: {
      namespaced: true,
      ...newAPIStore
    },
    //! 项目管理工具
    Tools: {
      namespaced: true,
      ...ToolsStore
    },
    //! 插件包
    Packages: {
      namespaced: true,
      ...PackagesStore
    },
    //! 原生js
    javascript: {
      namespaced: true,
      ...javascriptStore
    },
    //! 项目中遇到的坑
    bug: {
      namespaced: true,
      ...bugStore
    },
    //! 干货
    Foods: {
      namespaced: true,
      ...FoodsStore
    },
    //! 性能优化
    performance: {
      namespaced: true,
      ...performanceStore
    },


    /* @init<%
    //! ${TplModuleIntroduction}
    ${TplModuleName}: {
      namespaced: true,
      ...${TplModuleName}Store
    },%> */
  },
  plugins: [createStorePlugin(whiteList)]
})
/* eslint-enable */
export default store
