import { message } from 'ant-design-vue';
import {
  CATALOG_SEARCH_SET,
  CATALOG_REQUEST,
  CATALOG_UPDATE,
  CATALOG_CLEAN,
  CATALOG_SELECTED_SET,
  CATALOG_DELETE,
} from '../types';
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
  [CATALOG_SELECTED_SET](state, payload) {
    state.selected = [...payload];
  },
};
const actions = {
  [CATALOG_REQUEST]: async ({ commit }) => {
    commit(CATALOG_REQUEST);
    const data = await http.getCatalog();
    if (data) commit(CATALOG_UPDATE, data);
    commit(CATALOG_REQUEST, false);
  },
  [CATALOG_DELETE]: async ({ state, dispatch, commit }) => {
    const selectedIds = state.selected;
    const result = state.catalog.filter(({ id }) => selectedIds.every((item) => item !== id));
    commit(CATALOG_UPDATE, result);
    commit(CATALOG_SELECTED_SET, []);
    const oks = await Promise.all(
      selectedIds.map(async (id) => {
        const ok = await http.deleteVideo(id);
        return ok;
      }),
    );
    if (oks.some((ok) => !ok)) {
      commit(CATALOG_SELECTED_SET, selectedIds);
      dispatch(CATALOG_REQUEST);
      message.error('Video(s) not deleted. Please try again later!');
    }
  },
  [CATALOG_CLEAN]: async ({ commit }) => {
    commit();
  },
};
const getters = {
  getCatalog: (state) => state.catalog.filter(onSearch(state.search)),
  isSearch: (state) => !!state.search,
  isEmpty: (state) => !state.catalog.length && !state.loading,
  hasSelected: (state) => !!state.selected.length,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
