import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

// Do not show production tip on startup.
Vue.config.productionTip = false

// Alias axios to Vue.prototype.axios for
// calling it from any component.
Vue.prototype.axios = axios;

// Show accessibility issues at console in dev mode.
if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe)
}

// Create the Vue instance.
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
