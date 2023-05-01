import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { MoonLoader } from 'react-spinners';
import useRedirectIfAuthenticated from '../hooks/useRedirectIfAuthenticated';
import { useRouter } from 'next/router';

interface WithLoadingProps {
  isAuthenticated: boolean;
  token: string | undefined;
  loading: boolean;
}

const withLoading = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<WithLoadingProps> => {
  const WithLoadingComponent = (props: WithLoadingProps) => {
    const { isAuthenticated, token } = props;
    const [loading, setLoading] = useState(!isAuthenticated && !token);

    useEffect(() => {
      setLoading(!isAuthenticated && !token);
    }, [isAuthenticated, token]);

    console.log('loading:', loading);
    console.log('isAuthenticated:', isAuthenticated);
    console.log('token:', token);

    return (
      <>
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <MoonLoader size={50} color="#123abc" />
          </div>
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };

  return WithLoadingComponent;
};

export default withLoading;
