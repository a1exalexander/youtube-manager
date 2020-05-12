import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT, PROFILE_REQUEST } from '../types';
import { storage, http } from '../../services';

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
  token: storage.getToken(),
  loading: false,
  error: '',
};

const state = () => ({ ...initState });
const mutations = {
  [AUTH_REQUEST](state) {
    state.loading = true;
    state.error = '';
  },
  [AUTH_SUCCESS](state, { user, token }) {
    state.user = { ...initState.user, ...user };
    state.token = token;
    state.error = '';
    state.loading = false;
  },
  [AUTH_FAILURE](state, payload) {
    state.loading = false;
    state.error = payload;
    state.token = null;
  },
  [AUTH_LOGOUT](state) {
    state.loading = false;
    state.error = null;
    state.token = null;
  },
};
const actions = {
  [AUTH_REQUEST]: async ({ commit, dispatch }, formData) => {
    try {
      commit(AUTH_REQUEST);
      const { email, token, name, id } = await http.login(formData);
      commit(AUTH_SUCCESS, { token, user: { name, email, id } });
      dispatch(`profile/${PROFILE_REQUEST}`, null, { root: true });
      return storage.setToken(token);
    } catch (err) {
      commit(AUTH_FAILURE, err);
      return storage.removeToken();
    }
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    commit(AUTH_LOGOUT);
    storage.removeToken();
  },
};

const getters = {
  isAuth: (state) => !!state.token,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
