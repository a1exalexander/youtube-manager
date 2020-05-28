import { message } from 'ant-design-vue';
import {
  VIDEO_CLEAN,
  VIDEO_CLIPS_REQUEST,
  VIDEO_CLIPS_SET,
  VIDEO_DETAILS_REQUEST,
  VIDEO_DETAILS_SET,
  VIDEO_SHOTS_REQUEST,
  VIDEO_SHOTS_SET,
  VIDEO_CHARTS_SET,
  VIDEO_CHARTS_REQUEST,
  VIDEO_TAB_SET,
} from '../types';
import { http } from '../../services';
import { cleanState } from '../../utils';

const initState = {
  details: {
    ad_revenue: '',
    category: '',
    click_through_rate: '',
    comments: '',
    date: '',
    description: '',
    dislikes: '',
    engagement_ratio: '',
    id: '',
    image: '',
    impressions: '',
    language_stats: {
      commonly_used_words: [],
      objects: [],
      proper_nouns: [],
      sponsors: null,
      words_count: '',
    },
    length: '',
    likes: '',
    link: '',
    name: '',
    production_owerview: {
      faces_on_camera: '',
      method: '',
      numbers_of_shots_changes: '',
      on_camera_age: '',
      on_camera_gender: '',
      on_camera_location: '',
      on_camera_race: '',
      value: '',
    },
    production_cost: '',
    roi: '',
    topic: '',
    transcript_overview: {
      description_length: '',
      is_sponsored: null,
      keywords_in_description: [],
      keywords_in_title: [],
      most_used_keywords: [],
      title_length: '',
      transcript_length: '',
    },
    views: '',
    watch_time: '',
    watch_time_ratio: '',
  },
  clips: [],
  shots: [],
  charts: {
    watchTime: [],
    likeCount: [],
    impressionCount: [],
    adRevenue: [],
  },
  activeTab: 'overview',
};

const state = () => ({ ...initState });
const mutations = {
  [VIDEO_DETAILS_SET](state, payload) {
    state.details = { ...payload };
  },
  [VIDEO_CLIPS_SET](state, payload) {
    state.clips = [...payload];
  },
  [VIDEO_SHOTS_SET](state, payload) {
    state.shots = [...payload];
  },
  [VIDEO_CHARTS_SET](state, payload) {
    state.charts = { ...state.charts, ...payload };
  },
  [VIDEO_TAB_SET](state, payload) {
    state.activeTab = payload;
  },
  [VIDEO_CLEAN](state) {
    cleanState(state, initState);
  },
};

const actions = {
  [VIDEO_DETAILS_REQUEST]: async ({ getters, commit }, id) => {
    const { isVideoLoaded } = getters;
    try {
      if (!isVideoLoaded) message.loading('Video details are loading...', 0);
      const data = await http.getVideoDetails(id);
      if (data) commit(VIDEO_DETAILS_SET, data);
      if (!isVideoLoaded) setTimeout(() => message.destroy(), 1000);
    } catch ({ msg }) {
      if (!isVideoLoaded) message.destroy();
      message.error(msg);
    }
  },
  [VIDEO_CLIPS_REQUEST]: async ({ commit }) => {
    const data = await http.getClips();
    if (data) commit(VIDEO_CLIPS_SET, data);
  },
  [VIDEO_SHOTS_REQUEST]: async ({ commit }) => {
    const data = await http.getShots();
    if (data) commit(VIDEO_SHOTS_SET, data);
  },
  [VIDEO_CHARTS_REQUEST]: async ({ commit }) => {
    const data = await http.getCharts();
    if (data) commit(VIDEO_CHARTS_SET, data);
  },
  [VIDEO_CLEAN]({ commit }) {
    commit(VIDEO_CLEAN);
  },
};

const getters = {
  getVideoChartWatchLabels: ({ charts }) => charts.watchTime.map(({ x }) => x),
  getVideoChartLikesLabels: ({ charts }) => charts.likeCount.map(({ x }) => x),
  getVideoChartImpressionsLabels: ({ charts }) => charts.impressionCount.map(({ x }) => x),
  getVideoChartAdRevenueLabels: ({ charts }) => charts.adRevenue.map(({ x }) => x),
  isVideoLoaded: ({ details }) => !!details.id,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
