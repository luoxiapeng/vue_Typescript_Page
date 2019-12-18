import Vue from "vue";
import Vuex from "vuex";
import system from "./modules/system";
import home from "./modules/home";
import user from "./modules/user";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    system,
    user,
    home
  },
  getters
});
