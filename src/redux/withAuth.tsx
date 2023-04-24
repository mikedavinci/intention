import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Dashboard3 from '@/components/AppLayout/AppLayout4';
import MenuDash from '@/components/Menus/MenuDash';

const withAuth = (
  WrappedComponent: any,
  ProtectedComponent: boolean = true
) => {
  const AuthWrapper = (props: any) => {
    const router = useRouter();
    const isAuthenticated = useSelector(
      (state: any) => state.auth.isAuthenticated
    );

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      if (!isAuthenticated && ProtectedComponent) {
        router.push('/user/login');
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return (
        <Dashboard3>
          <MenuDash
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <WrappedComponent {...props} />
        </Dashboard3>
      );
    } else if (!ProtectedComponent) {
      return (
        <Dashboard3>
          <MenuDash
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <WrappedComponent {...props} />
        </Dashboard3>
      );
    }

    return null;
  };

  return AuthWrapper;
};

export default withAuth;
