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
      const originalRequest = error.config;

      // console.log('Original request:', originalRequest);
      // Log the original request

      try {
        const response = await instance.post(
          'refresh',
          {},
          { withCredentials: true }
        );

        console.log('Refresh response:', response);
        // Log the refresh response

        if (response.status === 201) {
          // console.log('interceptor', response);
          // Update token in cookies and headers
          Cookies.set('access_token', response.data.token);
          instance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.token}`;
          originalRequest.headers.Authorization = `Bearer ${response.data.token}`;

          // console.log('Updated request:', originalRequest);
          // Log the updated request

          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error('Refresh error:', refreshError);

        // Remove token and refresh token from cookies
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');

        // Redirect the user to the login page
        // if (typeof window !== 'undefined') {
        //   window.location.href = '/user/login';
        // }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
