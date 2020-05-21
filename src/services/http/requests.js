import { format } from 'date-fns';
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
      const shallowCopy = data.map((item) => ({ ...item, date: format(new Date(data?.[0]?.date), 'dd/MM/yyyy') }));
      return shallowCopy;
    } catch {
      return null;
    }
  };

  deleteVideo = async (id) => {
    try {
      const { data } = await axios.delete(`${url.videos}/ad${id}`);
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
}

export default new Http();
