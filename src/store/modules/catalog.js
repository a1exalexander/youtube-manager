import { SEARCH_SET } from '../mutation-types';

const state = () => ({
  search: '',
});
const mutations = {
  [SEARCH_SET](state, payload) {
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
