/**

Axios helper:
Creates an exportable axios client, adding AUTH using interceptors

**/
import axios from 'axios';
import API from 'config/api';

axios.defaults.baseURL = API.URL;

axios.interceptors.request.use(
  async (config) => {
    config.auth = API.AUTH;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
