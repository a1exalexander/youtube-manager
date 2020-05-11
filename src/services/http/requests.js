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
}

export default new Http();
