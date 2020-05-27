import { message } from 'ant-design-vue';
import {
  CATALOG_SEARCH_SET,
  CATALOG_REQUEST,
  CATALOG_UPDATE,
  CATALOG_CLEAN,
  CATALOG_SELECTED_SET,
  CATALOG_DELETE,
  CATALOG_ADD,
  CATALOG_SORT_SET,
} from '../types';
import { http } from '../../services';
import { onSearch, cleanState } from '../../utils';
import { sortByDate, sortByString, sortByNumber } from '../../utils/sort';

const initState = {
  search: '',
  loading: false,
  catalog: [],
  selected: [],
  sortBy: 'date',
  sortDirection: 'desc',
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
  [CATALOG_SORT_SET](state, { sortBy, sortDirection }) {
    state.sortBy = sortBy;
    state.sortDirection = sortDirection;
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
  [CATALOG_CLEAN]: async ({ commit }) => {
    commit(CATALOG_CLEAN);
  },
};
const getters = {
  getCatalog(state, getters, { folders: { selectedFolder = null, folders = [] } }) {
    const { catalog = [], search = '', sortBy, sortDirection } = state;
    const filtered = catalog
      .map((item) => ({
        ...item,
        folders: folders.filter(({ videos }) => (videos || []).some((id) => id === item.id)),
      }))
      .filter(onSearch(search))
      .filter((item) => {
        if (selectedFolder) {
          const folder = folders.find(({ id }) => selectedFolder === id);
          if (folder) {
            return (folder.videos || []).some((id) => id === item.id);
          }
        }
        return true;
      });
    const sorted = filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return sortByString(a?.name, b?.name, sortDirection);
        case 'date':
          return sortByDate(a?.date, b?.date, sortDirection);
        default:
          return sortByNumber(a?.id, b?.id, sortDirection);
      }
    });
    console.log(sorted);
    return sorted;
  },
  getVideoNames: ({ catalog }) => catalog.map(({ id, name }) => ({ id, name })),
  isSearch: ({ search }) => !!search,
  isEmpty: ({ catalog, loading }) => !catalog.length && !loading,
  hasSelected: ({ selected }) => !!selected.length,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
