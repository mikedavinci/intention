import { useState, useEffect, useCallback } from 'react';
import UserPagesLayout from '@/components/AppLayout/AppLayout5';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axiosInstance from '../../../interceptors/axios';

function VerifyEmail() {
  const router = useRouter();
  const token = router.query.token;
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const setEmailAndVerify = async () => {
      if (typeof token === 'string' && typeof router.query.email === 'string') {
        setEmail(router.query.email);
        await verifyEmail(token, router.query.email);
      }
    };

    const verifyEmail = async (token: any, email: any) => {
      try {
        const { data } = await axiosInstance.post(
          `verify-email?token=${token}&email=${email}`,
          {
            token,
            email,
          }
        );

        if (data.success) {
          toast.success('Email verified. Redirecting to login page...');
          setTimeout(() => {
            router.push('/user/login');
          }, 1000);
        } else {
          toast.error(data.message);
          setError(true);
        }
      } catch (error: any) {
        if (
          typeof error === 'object' &&
          error !== null &&
          'response' in error &&
          'data' in error.response
        ) {
          toast.error(String(error.response.data.message));
        } else {
          toast.error('An unknown error occurred');
        }
        setError(true);
      }
    };

    setEmailAndVerify();
  }, [token, router]);

  const resendVerificationEmail = useCallback(async () => {
    console.log('Resending verification email to:', email);

    try {
      const { data } = await axiosInstance.post(`resend-verification`, {
        email,
      });
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'response' in error &&
        'data' in error.response
      ) {
        toast.error(String(error.response.data.message));
      } else {
        toast.error('An unknown error occurred');
      }
    }
  }, [email]);

  return (
    <>
      <div className="flex min-h-full justify-center items-center">
        {error ? (
          <>
            <h2 className="text-xl font-bold text-red-600">
              There was an error verifying your email.
            </h2>
            <button
              onClick={resendVerificationEmail}
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Resend Verification Email
            </button>
          </>
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">
            Verifying your email...
          </h2>
        )}
      </div>
    </>
  );
}

export default VerifyEmail;

VerifyEmail.getLayout = function getLayout(page: any, pageProps: any) {
  return <UserPagesLayout {...pageProps}>{page}</UserPagesLayout>;
};
