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
  CATALOG_FOLDERS_SELECT,
  CATALOG_FOLDERS_SELECT_ALL,
  CATALOG_FOLDERS_SORTED_SET,
  CATALOG_FOLDERS_VIDEO_COPY,
  CATALOG_FOLDERS_VIDEO_REMOVE,
} from '../types';
import { http } from '../../services';
import { onSearch, cleanState } from '../../utils';

const initState = {
  search: '',
  loading: false,
  catalog: [],
  selected: [],
  folders: [],
  selectedFolder: null,
  selectedAllFolders: true,
  sorted: 'last_modified',
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
    const idx = state.folders.findIndex((item) => item?.id === id);
    if (idx >= 0) state.folders.splice(idx, 1, { ...state.folders[idx], ...payload });
  },
  [CATALOG_FOLDERS_REMOVE](state, id) {
    const idx = state.folders.findIndex((item) => item?.id === id);
    if (idx >= 0) state.folders.splice(idx, 1);
  },
  [CATALOG_FOLDERS_SELECT](state, payload) {
    state.selectedFolder = payload;
  },
  [CATALOG_FOLDERS_SELECT_ALL](state, payload = true) {
    state.selectedAllFolders = payload;
  },
  [CATALOG_FOLDERS_SORTED_SET](state, payload) {
    state.sorted = payload;
  },
};

const removeVideoAndGetVideos = (folder, id) => {
  const videos = [...(folder?.videos || [])];
  const idx = videos.findIndex((iId) => iId === id);
  videos.splice(idx, 1);
  return videos;
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
  [CATALOG_FOLDERS_ADD]: async ({ dispatch }, body) => {
    const data = await http.addFolder(body);
    dispatch(CATALOG_FOLDERS_REQUEST);
    if (!data) {
      return false;
    }
    dispatch(CATALOG_FOLDERS_REQUEST);
    return data;
  },
  [CATALOG_FOLDERS_REMOVE]: async ({ commit, dispatch }, id) => {
    commit(CATALOG_FOLDERS_REMOVE, id);
    commit(CATALOG_FOLDERS_SELECT_ALL);
    const data = await http.deleteFolder(id);
    if (!data) {
      dispatch(CATALOG_FOLDERS_REQUEST);
      message.error('Folder not deleted. Please try again later!');
      return false;
    }
    message.success('Folder deleted successfully!');
    return true;
  },
  [CATALOG_FOLDERS_EDIT]: async ({ commit, dispatch }, payload) => {
    commit(CATALOG_FOLDERS_EDIT, payload);
    const data = await http.editFolder(payload);
    if (!data) {
      dispatch(CATALOG_FOLDERS_REQUEST);
      return false;
    }
    return true;
  },
  [CATALOG_FOLDERS_VIDEO_COPY]: async ({ dispatch }, { folder, id }) => {
    const ok = await dispatch(CATALOG_FOLDERS_EDIT, { id: folder?.id, videos: [...(folder?.videos || []), id] });
    if (ok) {
      message.success(`Video copied to "${folder?.name}" folder successfully!`);
    } else {
      message.error(`Video not copied to "${folder?.name}" folder. Please try again later!`);
    }
  },
  [CATALOG_FOLDERS_VIDEO_REMOVE]: async ({ getters, dispatch }, id) => {
    const { getSelectedFolder } = getters;
    const videos = removeVideoAndGetVideos(getSelectedFolder, id);
    const ok = await dispatch(CATALOG_FOLDERS_EDIT, { id: getSelectedFolder?.id, videos });
    if (ok) {
      message.success(`Video removed from "${getSelectedFolder?.name}" folder successfully!`);
    } else {
      message.error(`Video not removed from "${getSelectedFolder?.name}" folder. Please try again later!`);
    }
  },
  [CATALOG_CLEAN]: async ({ commit }) => {
    commit(CATALOG_UPDATE, []);
    commit(CATALOG_SELECTED_SET, []);
    commit(CATALOG_FOLDERS_SET, []);
  },
};
const getters = {
  getCatalog(state) {
    const { catalog = [], selectedFolder = null, folders = [], search = '' } = state;
    return catalog
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
  },
  getVideoNames: ({ catalog }) => catalog.map(({ id, name }) => ({ id, name })),
  isSearch: ({ search }) => !!search,
  isEmpty: ({ catalog, loading }) => !catalog.length && !loading,
  hasSelected: ({ selected }) => !!selected.length,
  getFolders: ({ folders = [], catalog = [], sorted }) =>
    folders
      .map((item) => ({
        ...item,
        videos: catalog.filter(({ id }) => item.videos && item.videos.some((vId) => vId === id)),
      }))
      .sort((a, b) => {
        if (sorted === 'last_modified') {
          return String(b.name).localeCompare(a.name);
        }
        return String(a.name).localeCompare(b.name);
      }),
  hasFolders: ({ folders }) => !!folders.length,
  getSortType: ({ sorted }) => {
    const sortTypes = {
      last_modified: 'Last Modified',
      name: 'Name',
    };
    return sortTypes[sorted] || sortTypes.last_modified;
  },
  getSelectedFolder: ({ folders, selectedFolder }) => folders.find(({ id }) => id === selectedFolder),
  getUnusedFolders: ({ folders }) => (usedFolders = []) =>
    folders.filter(({ id }) => usedFolders.every((item) => item.id !== id)),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
