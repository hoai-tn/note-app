import Vue from "vue";
import Vuex from "vuex";
import tasks from "./modules/tasks";
import dialog from "./modules/dialog";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
    dialog
  }
});