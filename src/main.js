import Vue from 'vue'
import App from './App.vue'





import './assets/sass/style.scss'

import store from './store/index'






Vue.config.productionTip = false

import router from './router/index'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
