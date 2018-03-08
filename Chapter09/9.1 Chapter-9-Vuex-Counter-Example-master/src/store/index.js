import Vue from 'vue';
import Vuex from 'vuex';
import { countStore } from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countStore,
  },
});
