import {
  PROFILE_REQUEST,
  PROFILE_UPDATE,
  ACCOUNTS_REQUEST,
  ACCOUNTS_UPDATE,
  ACCOUNT_SET,
  PROFILE_CLEAN,
} from '../types';
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
    role: null,
    last_password_change: null,
  },
  accounts: [],
  accountId: null,
  loading: 0,
};

const state = () => ({ ...initState });
const mutations = {
  [PROFILE_REQUEST](state, payload = true) {
    if (payload) {
      state.loading += 1;
    } else {
      state.loading -= 1;
    }
  },
  [PROFILE_UPDATE](state, payload) {
    state.user = { ...initState.user, ...payload };
  },
  [ACCOUNTS_UPDATE](state, payload) {
    state.accounts = [...payload];
  },
  [ACCOUNT_SET](state, payload) {
    state.accountId = payload;
  },
  [PROFILE_CLEAN](state) {
    state.user = { ...initState.user };
    state.account = [];
    state.accountId = null;
  },
};
const actions = {
  [PROFILE_REQUEST]: async ({ commit }) => {
    commit(PROFILE_REQUEST);
    const data = await http.getProfile();
    if (data) commit(PROFILE_UPDATE, data);
    commit(PROFILE_REQUEST, false);
  },
  [ACCOUNTS_REQUEST]: async ({ state, commit }) => {
    commit(PROFILE_REQUEST);
    const data = await http.getAccounts();
    if (data) commit(ACCOUNTS_UPDATE, data);
    commit(PROFILE_REQUEST, false);
    const { 0: account } = data;
    if (!state.accountId && account) commit(ACCOUNT_SET, account?.id);
  },
  [PROFILE_CLEAN]({ commit }) {
    commit(PROFILE_CLEAN);
  },
};

const getters = {
  account: (state) => state.accounts.find(({ id }) => id === state.accountId),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
