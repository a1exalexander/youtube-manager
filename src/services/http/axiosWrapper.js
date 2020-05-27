import axios from 'axios';
import { Logger } from '../logger';
import { storage } from '../storage';
import { getErrorMessage, getStatus } from '../../utils';
import { CATCH_UNAUTHORIZED } from '../../store/types';

const logger = Logger('[AXIOS]');

axios.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = storage.getToken();
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
    logger.info(response?.config?.url, response?.status);
    return Promise.resolve(response);
  },
  async (error) => {
    const { dispatch } = await import('../../store');
    dispatch(CATCH_UNAUTHORIZED, error);
    const message = getErrorMessage(error);
    const status = error?.response?.status;
    logger.error(status, message);
    return Promise.reject(
      new Error({
        status: getStatus(error),
        msg: getErrorMessage(error),
      }),
    );
  },
);

export default axios;
