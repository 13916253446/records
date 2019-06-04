import Vue from 'vue'
import router from './routes/index.js'
import App from './app.vue'
import 'components/styles/base.styl'
import 'nprogress/nprogress.css'
import 'highlight.js/styles/atom-one-dark.css'

window.$vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
