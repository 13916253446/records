import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

function importAll (context) {
  return context.keys().map(context)
}

const homeList = () => import(
  /* webpackChunkName: "home.list" */
  '../views/home.vue'
)

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: homeList
  }
]

const plugins = require.context('@/blog/modules', true, /routes\.js$/)
importAll(plugins).forEach((item = {}) => {
  for (let pKey in item) {
    let pValue = item[pKey]
    if (pKey !== 'default') {
      routes = routes.concat(pValue)
    }
  }
})

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
