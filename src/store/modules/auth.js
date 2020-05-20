import { message } from 'ant-design-vue';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  PROFILE_REQUEST,
  ACCOUNTS_REQUEST,
  PROFILE_CLEAN,
  CHARTS_CLEAN,
  CATALOG_CLEAN,
} from '../types';
import { storage, http } from '../../services';
import { cleanState } from '../../utils';

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
    cleanState(state, initState);
  },
};
const actions = {
  [AUTH_REQUEST]: async ({ commit, dispatch }, formData) => {
    try {
      commit(AUTH_REQUEST);
      const { email, token, name, id } = await http.login(formData);
      commit(AUTH_SUCCESS, { token, user: { name, email, id } });
      dispatch(`profile/${PROFILE_REQUEST}`, null, { root: true });
      dispatch(`profile/${ACCOUNTS_REQUEST}`, null, { root: true });
      return storage.setToken(token);
    } catch (err) {
      commit(AUTH_FAILURE, err);
      message.error(err);
      return storage.removeToken();
    }
  },
  [AUTH_LOGOUT]: ({ commit, dispatch }) => {
    commit(AUTH_LOGOUT);
    dispatch(`profile/${PROFILE_CLEAN}`, null, { root: true });
    dispatch(`charts/${CHARTS_CLEAN}`, null, { root: true });
    dispatch(`catalog/${CATALOG_CLEAN}`, null, { root: true });
    storage.removeToken();
    sessionStorage.clear();
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
