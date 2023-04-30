import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

function useRedirectIfAuthenticated() {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const token = Cookies.get('access_token');

  if (isAuthenticated || token) {
    router.replace('/dashboard');
    return true;
  }

  return false;
}

export default useRedirectIfAuthenticated;
