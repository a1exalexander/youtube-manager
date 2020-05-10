import { AUTH_REQUEST, AUHT_SUCCESS, AUTH_FAILURE } from '../mutation-types';
import { http } from '../../services';

const state = () => ({
  user: {
    username: '',
    id: '',
  },
  token: '',
  loading: false,
  error: '',
});
const mutations = {
  [AUTH_REQUEST](state) {
    state.loading = true;
    state.error = '';
  },
  [AUHT_SUCCESS](state, payload) {
    state.user = { ...payload };
    state.error = '';
    state.loading = false;
  },
  [AUTH_FAILURE](state, payload) {
    state.loading = false;
    state.error = payload;
  },
};
const actions = {
  [AUTH_REQUEST]: async ({ commit }, { email, password }) => {
    try {
      const res = await http.login({ email, password });
      commit(AUHT_SUCCESS, res);
      return 1;
    } catch {
      commit(AUTH_FAILURE, 'ERROR');
      return 0;
    }
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
