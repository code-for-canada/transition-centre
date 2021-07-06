import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

// Do not show production tip on startup.
Vue.config.productionTip = false;

// Alias axios to Vue.prototype.axios for
// calling it from any component.
Vue.prototype.axios = axios;

// Show accessibility issues at console in dev mode.
if (process.env.NODE_ENV === "development") {
  const VueAxe = require("vue-axe").default;
  Vue.use(VueAxe);
}

// Include the client side mock api server for the prototype.
import { makeServer } from "./mocks/api/server";
makeServer(process.env.NODE_ENV);

// Initializations
store.dispatch("getAccount");

// Create the Vue instance.
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
