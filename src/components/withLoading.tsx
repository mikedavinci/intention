import React, { useState, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';

interface Props {
  children: React.ReactNode;
}

const withLoading = (WrappedComponent: React.ComponentType<any>) => {
  return function WithLoadingComponent(props: Props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false);
    }, []);

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
};

export default withLoading;
