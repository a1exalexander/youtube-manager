import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import catalog from './modules/catalog';
import auth from './modules/auth';
import profile from './modules/profile';
import charts from './modules/charts';
import folders from './modules/folders';
import video from './modules/video';
import { CATCH_UNAUTHORIZED, AUTH_LOGOUT } from './types';

export * from './types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [new VuexPersistence({ key: 'media-scout-state', storage: sessionStorage }).plugin],
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
    charts,
    folders,
    video,
  },
});

export const { dispatch } = store;
export default store;
