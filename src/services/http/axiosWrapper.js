import axios from 'axios';
import { Logger } from '../logger';
import { storage } from '../storage';
import { getErrorMessage } from '../../utils';

const logger = Logger('axios');

axios.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = storage.getToken();
    logger.debug('REQUEST', { token });
    if (token) {
      headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    const message = getErrorMessage(error);
    logger.error(message);
    return Promise.reject(message);
  },
);

axios.interceptors.response.use(
  (response) => {
    logger.info(response?.data);
    return Promise.resolve(response);
  },
  (error) => {
    const message = getErrorMessage(error);
    const status = error?.response?.status;
    logger.error(status, message);
    return Promise.reject(error);
  },
);

export default axios;
