import { message } from 'ant-design-vue';
import {
  CATALOG_SEARCH_SET,
  CATALOG_REQUEST,
  CATALOG_UPDATE,
  CATALOG_CLEAN,
  CATALOG_SELECTED_SET,
  CATALOG_DELETE,
  CATALOG_ADD,
  CATALOG_FOLDERS_SET,
  CATALOG_FOLDERS_EDIT,
  CATALOG_FOLDERS_REMOVE,
  CATALOG_FOLDERS_REQUEST,
  CATALOG_FOLDERS_ADD,
} from '../types';
import { http } from '../../services';
import { onSearch, cleanState } from '../../utils';

const initState = {
  search: '',
  loading: false,
  catalog: [],
  selected: [],
  folders: [],
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
  [CATALOG_FOLDERS_SET](state, payload) {
    state.folders = [...payload];
  },
  [CATALOG_FOLDERS_EDIT](state, { id, ...payload }) {
    const idx = state.folders.findIndex((item) => item === id);
    if (idx >= 0) state.folders.splice(idx, 1, { ...state.folders[idx], ...payload });
  },
  [CATALOG_FOLDERS_REMOVE](state, id) {
    const idx = state.folders.findIndex((item) => item === id);
    if (idx >= 0) state.folders.splice(idx, 1);
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
  [CATALOG_ADD]: async ({ dispatch }, link) => {
    const data = await http.addVideo({ link });
    if (data) {
      dispatch(CATALOG_REQUEST);
      message.success('Video(s) uploaded successfully!');
      return true;
    }
    message.error('Video(s) not uploaded. Please try again later!');
    return false;
  },
  [CATALOG_FOLDERS_REQUEST]: async ({ commit }) => {
    const data = await http.getFolders();
    if (data) {
      commit(CATALOG_FOLDERS_SET, data);
    }
  },
  [CATALOG_FOLDERS_ADD]: async ({ state, commit, dispatch }, body) => {
    const shallowCopy = [...state.folders, { ...body, id: String(Date.now()) }];
    commit(CATALOG_FOLDERS_SET, shallowCopy);
    const data = await http.addFolder(body);
    dispatch(CATALOG_FOLDERS_REQUEST);
    if (!data) {
      message.error('Folder not saved. Please try again later!');
      return false;
    }
    return true;
  },
  [CATALOG_FOLDERS_REMOVE]: async ({ commit, dispatch }, id) => {
    commit(CATALOG_FOLDERS_REMOVE, id);
    const data = await http.deleteFolder(id);
    if (!data) {
      dispatch(CATALOG_FOLDERS_REQUEST);
      message.error('Folder not deleted. Please try again later!');
      return false;
    }
    return true;
  },
  [CATALOG_FOLDERS_EDIT]: async ({ commit, dispatch }, payload) => {
    commit(CATALOG_FOLDERS_EDIT, payload);
    const data = await http.editFolder(payload);
    if (!data) {
      dispatch(CATALOG_FOLDERS_REQUEST);
      message.error('Folder not edited. Please try again later!');
      return false;
    }
    return true;
  },
  [CATALOG_CLEAN]: async ({ commit }) => {
    commit(CATALOG_UPDATE, []);
    commit(CATALOG_SELECTED_SET, []);
    commit(CATALOG_FOLDERS_SET, []);
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
