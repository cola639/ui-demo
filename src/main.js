import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mineComponent from './components/index'

Vue.use(mineComponent)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
