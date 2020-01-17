import Vue from 'vue'
import App from "./App";
// import router from './router/index.js'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
