import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import auth from './modules/auth';
import profile from './modules/profile';
import { CATCH_UNAUTHORIZED, AUTH_LOGOUT } from './types';

export * from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    [CATCH_UNAUTHORIZED]({ commit }, error) {
      const status = error?.response?.status;
      if (status === 401) {
        commit(`auth/${AUTH_LOGOUT}`, null, { root: true });
      }
    },
  },
  modules: {
    auth,
    catalog,
    profile,
  },
});

export default store;
