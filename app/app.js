import Vue from 'vue'
import router from './routes/index.js'
import store from './store/index.js'
import App from './app.vue'
import 'components/styles/base.styl'
import 'nprogress/nprogress.css'
import 'highlight.js/styles/atom-one-dark.css'

window.$vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
