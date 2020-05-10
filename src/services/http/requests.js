import axios from './axiosWrapper';
import * as url from './url';

export class Http {
  login = async ({ email, password }) => {
    const { data } = await axios.post(url.auth.login, { email, password });
    return data;
  };
}

export default new Http();
