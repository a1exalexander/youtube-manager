import {
  CHARTS_ACCOUNT_SET,
  CHARTS_AMOUNT_SET,
  CHARTS_ACCOUNT_CLEAN,
  CHARTS_AMOUNT_CLEAN,
  CHARTS_ACCOUNT_REQUEST,
  CHARTS_AMOUNT_REQUEST,
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
});
const mutations = {
  [CHARTS_ACCOUNT_SET](state, payload) {
    state.account = { ...payload };
  },
  [CHARTS_AMOUNT_SET](state, payload) {
    state.amount = { ...payload };
  },
  [CHARTS_ACCOUNT_CLEAN](state) {
    state.account = { ...initChartsState };
  },
  [CHARTS_AMOUNT_CLEAN](state) {
    state.amount = { ...initChartsState };
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
  [CHARTS_CLEAN]({ commit }) {
    commit(CHARTS_ACCOUNT_CLEAN);
    commit(CHARTS_AMOUNT_CLEAN);
  },
};

const getters = {
  getAccountWatchLabels: ({ account }) => account.watchTime.map(({ x }) => x),
  getAccountLikesLabels: ({ account }) => account.likeCount.map(({ x }) => x),
  getAccountImpressionsLabels: ({ account }) => account.impressionCount.map(({ x }) => x),
  getAccountAdRevenueLabels: ({ account }) => account.adRevenue.map(({ x }) => x),
  getWatchTimeValue: ({ account }) => account.watchTime[account.watchTime.length - 1]?.y,
  getLikeCountValue: ({ account }) => account.likeCount[account.likeCount.length - 1]?.y,
  getImpressionCountValue: ({ account }) => account.impressionCount[account.impressionCount.length - 1]?.y,
  getAdRevenueValue: ({ account }) => account.adRevenue[account.adRevenue.length - 1]?.y,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
