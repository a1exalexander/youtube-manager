import {
  CHARTS_ACCOUNT_SET,
  CHARTS_AMOUNT_SET,
  CHARTS_VIDEO_SET,
  CHARTS_ACCOUNT_CLEAN,
  CHARTS_AMOUNT_CLEAN,
  CHARTS_VIDEO_CLEAN,
  CHARTS_ACCOUNT_REQUEST,
  CHARTS_AMOUNT_REQUEST,
  CHARTS_VIDEO_REQUEST,
  CHARTS_CLEAN,
} from '../types';
import { http } from '../../services';

const initChartsState = {
  watchTime: [],
  likeCount: [],
  impressionCount: [],
  adRevenue: [],
};

const state = () => ({
  account: { ...initChartsState },
  amount: { ...initChartsState },
  video: { ...initChartsState },
});
const mutations = {
  [CHARTS_ACCOUNT_SET](state, payload) {
    state.account = { ...payload };
  },
  [CHARTS_AMOUNT_SET](state, payload) {
    state.amount = { ...payload };
  },
  [CHARTS_VIDEO_SET](state, payload) {
    state.video = { ...payload };
  },
  [CHARTS_ACCOUNT_CLEAN](state) {
    state.account = { ...initChartsState };
  },
  [CHARTS_AMOUNT_CLEAN](state) {
    state.amount = { ...initChartsState };
  },
  [CHARTS_VIDEO_CLEAN](state) {
    state.video = { ...initChartsState };
  },
};

const actions = {
  [CHARTS_ACCOUNT_REQUEST]: async ({ commit }) => {
    const data = await http.getCharts();
    if (data) commit(CHARTS_ACCOUNT_SET, data);
  },
  [CHARTS_AMOUNT_REQUEST]: async ({ commit }) => {
    const data = await http.getCharts();
    if (data) commit(CHARTS_AMOUNT_SET, data);
  },
  [CHARTS_VIDEO_REQUEST]: async ({ commit }) => {
    const data = await http.getCharts();
    if (data) commit(CHARTS_VIDEO_SET, data);
  },
  [CHARTS_CLEAN]({ commit }) {
    commit(CHARTS_ACCOUNT_CLEAN);
    commit(CHARTS_AMOUNT_CLEAN);
    commit(CHARTS_VIDEO_CLEAN);
  },
};

const getters = {
  getAccountWatchLabels: (state) => state.account.watchTime.map(({ x }) => x),
  getAccountLikesLabels: (state) => state.account.likeCount.map(({ x }) => x),
  getAccountImpressionsLabels: (state) => state.account.impressionCount.map(({ x }) => x),
  getAccountAdRevenueLabels: (state) => state.account.adRevenue.map(({ x }) => x),
  getVideoWatchLabels: (state) => state.video.watchTime.map(({ x }) => x),
  getVideoLikesLabels: (state) => state.video.likeCount.map(({ x }) => x),
  getVideoImpressionsLabels: (state) => state.video.impressionCount.map(({ x }) => x),
  getVideoAdRevenueLabels: (state) => state.video.adRevenue.map(({ x }) => x),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
