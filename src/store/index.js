import Vue from "vue";
import Vuex from "vuex";
import mainFunc from "./modules/mainFunc.js";
import timeStamp from "./modules/timeStamp.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mainFunc: mainFunc,
    timeStamp: timeStamp,
  },
});
