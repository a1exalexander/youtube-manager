import { PROFILE_REQUEST, PROFILE_UPDATE, CATCH_UNAUTHORIZED } from '../types';
import { http } from '../../services';

const initState = {
  user: {
    id: null,
    email: null,
    name: null,
    city: null,
    country: null,
    address: null,
    company: null,
    avatar: null,
  },
  loading: false,
};

const state = () => ({ ...initState });
const mutations = {
  [PROFILE_REQUEST](state, payload = true) {
    state.loading = payload;
  },
  [PROFILE_UPDATE](state, payload) {
    state.user = { ...initState.user, ...payload };
  },
};
const actions = {
  [PROFILE_REQUEST]: async ({ commit, dispatch }) => {
    try {
      commit(PROFILE_REQUEST);
      const data = await http.getProfile();
      commit(PROFILE_UPDATE, data);
    } catch (error) {
      dispatch(CATCH_UNAUTHORIZED, error, { root: true });
    } finally {
      commit(PROFILE_REQUEST, false);
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
