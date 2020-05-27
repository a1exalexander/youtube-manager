import { message } from 'ant-design-vue';
import {
  FOLDERS_SET,
  FOLDERS_EDIT,
  FOLDERS_REMOVE,
  FOLDERS_REQUEST,
  FOLDERS_ADD,
  FOLDERS_SELECT,
  FOLDERS_SELECT_ALL,
  FOLDERS_SORTED_SET,
  FOLDERS_VIDEO_COPY,
  FOLDERS_VIDEO_REMOVE,
  FOLDERS_CLEAN,
} from '../types';
import { http } from '../../services';
import { cleanState, sortByNumber, sortByString } from '../../utils';

const initState = {
  loading: false,
  folders: [],
  selectedFolder: null,
  selectedAllFolders: true,
  sortFoldersBy: 'last_modified',
};

const state = () => ({ ...initState });

const mutations = {
  [FOLDERS_SET](state, payload) {
    state.folders = [...payload];
  },
  [FOLDERS_EDIT](state, { id, ...payload }) {
    const idx = state.folders.findIndex((item) => item?.id === id);
    if (idx >= 0) state.folders.splice(idx, 1, { ...state.folders[idx], ...payload });
  },
  [FOLDERS_REMOVE](state, id) {
    const idx = state.folders.findIndex((item) => item?.id === id);
    if (idx >= 0) state.folders.splice(idx, 1);
  },
  [FOLDERS_SELECT](state, payload) {
    state.selectedFolder = payload;
  },
  [FOLDERS_SELECT_ALL](state, payload = true) {
    state.selectedAllFolders = payload;
  },
  [FOLDERS_SORTED_SET](state, payload) {
    state.sortFoldersBy = payload;
  },
  [FOLDERS_CLEAN](state) {
    cleanState(state, initState);
  },
};

const removeVideoAndGetVideos = (folder, id) => {
  const videos = [...(folder?.videos || [])];
  const idx = videos.findIndex((iId) => iId === id);
  videos.splice(idx, 1);
  return videos;
};

const actions = {
  [FOLDERS_REQUEST]: async ({ commit }) => {
    const data = await http.getFolders();
    if (data) {
      commit(FOLDERS_SET, data);
    }
  },
  [FOLDERS_ADD]: async ({ dispatch }, body) => {
    const data = await http.addFolder(body);
    dispatch(FOLDERS_REQUEST);
    if (!data) {
      return false;
    }
    dispatch(FOLDERS_REQUEST);
    return data;
  },
  [FOLDERS_REMOVE]: async ({ commit, dispatch }, id) => {
    commit(FOLDERS_REMOVE, id);
    commit(FOLDERS_SELECT_ALL);
    const data = await http.deleteFolder(id);
    if (!data) {
      dispatch(FOLDERS_REQUEST);
      message.error('Folder not deleted. Please try again later!');
      return false;
    }
    message.success('Folder deleted successfully!');
    return true;
  },
  [FOLDERS_EDIT]: async ({ commit, dispatch }, { payload, successMsg, errorMsg }) => {
    commit(FOLDERS_EDIT, payload);
    const data = await http.editFolder(payload);
    dispatch(FOLDERS_REQUEST);
    if (!data) {
      if (errorMsg) message.error(errorMsg);
      return false;
    }
    if (successMsg) message.success(successMsg);
    return true;
  },
  [FOLDERS_VIDEO_COPY]: async ({ dispatch }, { folder, id }) => {
    const ok = await dispatch(FOLDERS_EDIT, { payload: { id: folder?.id, videos: [...(folder?.videos || []), id] } });
    if (ok) {
      message.success(`Video copied to "${folder?.name}" folder successfully!`);
    } else {
      message.error(`Video not copied to "${folder?.name}" folder. Please try again later!`);
    }
  },
  [FOLDERS_VIDEO_REMOVE]: async ({ getters, dispatch }, id) => {
    const { getSelectedFolder } = getters;
    const videos = removeVideoAndGetVideos(getSelectedFolder, id);
    const ok = await dispatch(FOLDERS_EDIT, { payload: { id: getSelectedFolder?.id, videos } });
    if (ok) {
      message.success(`Video removed from "${getSelectedFolder?.name}" folder successfully!`);
    } else {
      message.error(`Video not removed from "${getSelectedFolder?.name}" folder. Please try again later!`);
    }
  },
  [FOLDERS_CLEAN]: async ({ commit }) => {
    commit(FOLDERS_CLEAN);
  },
};
const getters = {
  getFolders: ({ folders = [], sortFoldersBy }, getters, { catalog: { catalog = [] } }) =>
    folders
      .map((item) => ({
        ...item,
        videos: catalog.filter(({ id }) => item.videos && item.videos.some((vId) => vId === id)),
      }))
      .sort((a, b) => {
        if (sortFoldersBy === 'last_modified') {
          return sortByNumber(a.last_modified, b.last_modified);
        }
        return sortByString(a.name, b.name);
      }),
  hasFolders: ({ folders }) => !!folders.length,
  getSortType: ({ sortFoldersBy }) => {
    const sortTypes = {
      last_modified: 'Last Modified',
      name: 'Name',
    };
    return sortTypes[sortFoldersBy] || sortTypes.last_modified;
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
