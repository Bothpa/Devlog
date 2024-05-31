import axios from 'axios';
const HCTA = axios.create(); // HCTA = Header Containing Token Axios

HCTA.interceptors.request.use(
  function(config) {
    const accessToken = sessionStorage.getItem('devlogAccessToken');
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


export default HCTA;
