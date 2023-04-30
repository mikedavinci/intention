import { RootState } from './store/store';
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import useRedirectIfAuthenticated from '@/hooks/useRedirectIfAuthenticated';
import withLoading from '@/components/withLoading';

const withAuth = (
  WrappedComponent: any,
  ProtectedComponent: boolean = true,
  DashboardComponent: React.FC<any> | null = null
) => {
  const AuthWrapper: React.FC = (props) => {
    const store = useStore<RootState>();
    const isAuthenticated = store.getState().auth.isAuthenticated;
    const router = useRouter();
    const token = Cookies.get('access_token');

    // Call useRedirectIfAuthenticated hook
    const redirected = useRedirectIfAuthenticated();

    useEffect(() => {
      if (ProtectedComponent && !(isAuthenticated || token)) {
        router.replace('/user/login');
      }
    }, [isAuthenticated, token, router]);

    const WrappedComponentWithLoading = withLoading(WrappedComponent);

    return (
      <>
        {isAuthenticated || ProtectedComponent ? (
          DashboardComponent ? (
            <DashboardComponent>
              <WrappedComponentWithLoading
                isAuthenticated={isAuthenticated}
                token={token}
                {...props}
              />
            </DashboardComponent>
          ) : (
            <WrappedComponentWithLoading
              isAuthenticated={isAuthenticated}
              token={token}
              {...props}
            />
          )
        ) : (
          <WrappedComponentWithLoading
            isAuthenticated={isAuthenticated}
            token={token}
            {...props}
          />
        )}
      </>
    );
  };

  return AuthWrapper;
};

export default withAuth;
