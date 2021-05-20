import Vue from "vue";
import Vuex from "vuex";
import { porsche } from "./modules/porsche/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    porsche,
  }
});