import { getIdFromUrl } from 'vue-youtube';
import axios from './axiosWrapper';
import { url } from './url';
import { formatToChartData } from '../../utils';

export class Http {
  login = async ({ email, password }) => {
    const { data } = await axios.post(url.login, { email, password });
    return data;
  };

  getProfile = async () => {
    try {
      const { data } = await axios.get(url.profile);
      return data;
    } catch {
      return null;
    }
  };

  getCatalog = async () => {
    try {
      const { data } = await axios.get(url.videos);
      const shallowCopy = data.map((item) => ({
        ...item,
        videoId: getIdFromUrl(item?.link),
      }));
      return shallowCopy;
    } catch {
      return null;
    }
  };

  getVideoDetails = async (id) => {
    const { data } = await axios.get(`${url.videos}/${id}`);
    data.videoId = getIdFromUrl(data?.link);
    return data;
  };

  deleteVideo = async (id) => {
    try {
      const { data } = await axios.delete(`${url.videos}/${id}`);
      return data;
    } catch {
      return null;
    }
  };

  addVideo = async (body) => {
    try {
      const { data } = await axios.post(url.videos, body);
      return data;
    } catch {
      return null;
    }
  };

  getAccounts = async () => {
    try {
      const { data } = await axios.get(url.accounts);
      return data;
    } catch {
      return null;
    }
  };

  getCharts = async () => {
    try {
      const { data } = await axios.get(url.charts);
      const payload = {
        watchTime: formatToChartData(data?.['watch_time']),
        likeCount: formatToChartData(data?.['like_count']),
        impressionCount: formatToChartData(data?.['impression_count']),
        adRevenue: formatToChartData(data?.['ad_revenue']),
      };
      return payload;
    } catch {
      return null;
    }
  };

  getFolders = async () => {
    try {
      const { data } = await axios.get(url.folders);
      return data;
    } catch {
      return null;
    }
  };

  addFolder = async ({ name, videos = null }) => {
    try {
      const { data } = await axios.post(url.folders, { name, videos });
      return data;
    } catch {
      return null;
    }
  };

  deleteFolder = async (id) => {
    try {
      const { data } = await axios.delete(`${url.folders}/${id}`);
      return data;
    } catch {
      return null;
    }
  };

  editFolder = async ({ id, ...body }) => {
    try {
      const { data } = await axios.patch(`${url.folders}/${id}`, body);
      return data;
    } catch {
      return null;
    }
  };

  getClips = async () => {
    try {
      const { data } = await axios.get(url.clips);
      return data;
    } catch {
      return null;
    }
  };

  getShots = async () => {
    try {
      const { data } = await axios.get(url.shots);
      return data;
    } catch {
      return null;
    }
  };
}

export default new Http();
