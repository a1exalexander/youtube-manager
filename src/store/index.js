import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import auth from './modules/auth';

export * from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    catalog,
  },
});
