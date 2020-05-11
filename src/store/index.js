import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import auth from './modules/auth';
import profile from './modules/profile';

export * from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    catalog,
    profile,
  },
});

export default store;
