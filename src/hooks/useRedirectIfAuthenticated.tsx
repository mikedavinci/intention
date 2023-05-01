import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function useRedirectIfAuthenticated() {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const token = Cookies.get('access_token');

  useEffect(() => {
    if (isAuthenticated || token) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, router, token]);

  return false;
}

export default useRedirectIfAuthenticated;
