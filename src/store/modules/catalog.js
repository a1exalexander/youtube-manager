import { CATALOG_SEARCH_SET, CATALOG_REQUEST, CATALOG_UPDATE, CATALOG_CLEAN } from '../types';
import { http } from '../../services';
import { onSearch, cleanState } from '../../utils';

const initState = {
  search: '',
  loading: false,
  catalog: [],
  selected: [],
};

const state = () => ({ ...initState });
const mutations = {
  [CATALOG_SEARCH_SET](state, payload) {
    state.search = payload;
  },
  [CATALOG_REQUEST](state, payload = true) {
    state.loading = payload;
  },
  [CATALOG_UPDATE](state, payload) {
    state.catalog = [...payload];
  },
  [CATALOG_CLEAN](state) {
    cleanState(state, initState);
  },
};
const actions = {
  [CATALOG_REQUEST]: async ({ commit }) => {
    commit(CATALOG_REQUEST);
    const data = await http.getCatalog();
    if (data) commit(CATALOG_UPDATE, data);
    commit(CATALOG_REQUEST, false);
  },
  [CATALOG_CLEAN]: async ({ commit }) => {
    commit();
  },
};
const getters = {
  getCatalog: (state) => state.catalog.filter(onSearch(state.search)),
  isSearch: (state) => !!state.search,
  isEmpty: (state) => !state.catalog.length && !state.loading,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
