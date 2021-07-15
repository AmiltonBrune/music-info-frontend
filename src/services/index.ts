import axios from 'axios';

axios.defaults.baseURL = 'https://music-info-backend.herokuapp.com/api';

const api = axios.create();

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('@music-info:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
