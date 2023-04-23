import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:8001/api/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const response = await axios.post(
        'http://localhost:8001/api/refresh',
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        console.log('interceptor', response);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
        return axios(error.config);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
