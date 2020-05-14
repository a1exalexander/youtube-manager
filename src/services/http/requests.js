import { parse, format } from 'date-fns';
import axios from './axiosWrapper';
import { url } from './url';

export class Http {
  login = async ({ email, password }) => {
    const { data } = await axios.post(url.login, { email, password });
    return data;
  };

  getProfile = async () => {
    const { data } = await axios.get(url.profile);
    return data;
  };

  getCatalog = async () => {
    try {
      const { data } = await axios.get(url.catalog);
      const shallowCopy = data.map((item) => ({ ...item, date: format(parse(item.date, 'dd.MM.yyyy', new Date()), 'dd/MM/yyyy') }));
      return shallowCopy;
    } catch {
      return null;
    }
  };
}

export default new Http();
