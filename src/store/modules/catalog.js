import { CATALOG_SEARCH_SET } from '../mutation-types';

const state = () => ({
  search: '',
});
const mutations = {
  [CATALOG_SEARCH_SET](state, payload) {
    state.search = payload;
  },
};
const actions = {};
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
