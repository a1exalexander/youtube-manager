import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error);
  },
);

export default axios;
