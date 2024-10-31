import axios from 'axios';

//세션 스토리지에 있는 토큰을 헤더에 넣어서 요청을 보내는 axios
const TokenAxios = axios.create({
  baseURL: '/api'
});

TokenAxios.interceptors.request.use(
  function(config) {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

TokenAxios.interceptors.response.use(
  function(response) {
    // 응답이 성공적일 때 처리
    return response;
  },
  function(error) {
    // 응답이 오류일 때 처리
    if (error.response) {
      const status = error.response.status;
      if (status !== 200) {
        alert('로그인이 되어있지 않거나 만료된 세션입니다.');
        sessionStorage.removeItem('accessToken');
        window.location.href = '/account/login';
      }
    }
    return Promise.reject(error);
  }
);

//서버에서 쿠키값을 보내는 것을 허용하는 문구를 헤더에 넣어서 요청을 보내는 axios
const CookieAxios = axios.create({
  baseURL: '/api',
  withCredentials: true
});

CookieAxios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


export { TokenAxios, CookieAxios };
