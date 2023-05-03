import axiosInstance from '../interceptors/axios';
import Cookies from 'js-cookie';

export async function refreshToken() {
  try {
    const response = await axiosInstance.post(
      'auth/refresh',
      {},
      { withCredentials: true }
    );
    if (response.status === 201 && response.data.token) {
      Cookies.set('access_token', response.data.token);
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.token}`;
      return response.data.token;
    }
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return null;
  }
}
