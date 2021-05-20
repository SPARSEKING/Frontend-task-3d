import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axiosSetup from "../plugins/axios";

Vue.config.productionTip = false;

axiosSetup();

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
