import { useEffect, useState, SyntheticEvent, useCallback } from 'react';
import UserPagesLayout from '@/components/AppLayout/AppLayout5';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import axiosInstance from '../../../interceptors/axios';
import Image from 'next/image';
import { MoonLoader } from 'react-spinners';

function Reset() {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(null);

  const router = useRouter();
  const token = router.query.token;

  const validateToken = useCallback(
    async (token: string) => {
      try {
        const { data } = await axiosInstance.post('validate-token', {
          token,
        });
        if (data.success) {
          setCode(token);
          setShowFields(true);
        } else {
          toast.error('Your reset token has expired. Please request a new one');
          router.push('/user/forgot-password');
        }
      } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
          toast.error(String(error.message));
        } else {
          toast.error('An unknown error occurred');
        }
      }
    },
    [router]
  );

  useEffect(() => {
    if (typeof token === 'string') {
      setCode(token);
      validateToken(token);
    }
  }, [token, validateToken]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (showFields === false) {
      // TODO: implement code validation
      setShowFields(true);
      return; // Exit the function here to avoid performing the password reset process
    }

    try {
      const { data } = await axiosInstance.post('reset', {
        resetToken: code,
        password,
        confirmPassword,
      });

      if (data.success) {
        toast.success(data.message);
        router.push('/user/login');
      } else {
        if (data.expired) {
          toast.error('Your reset token has expired. Please request a new one');
          router.push('/user/forgot-password');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        toast.error(String(error.message));
      } else {
        toast.error('An unknown error occurred');
      }
    }
  };

  return (
    <>
      {isTokenValid === null ? (
        <div className="flex justify-center items-center min-h-screen">
          <MoonLoader size={50} color="#123abc" />
        </div>
      ) : isTokenValid ? (
        <div className="flex min-h-full">
          <div className="flex flex-1 flex-col justify-center  py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96 ">
              <div>
                <img
                  className="h-12 w-auto "
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-6 text-3xl text-center font-bold tracking-tight text-gray-900">
                  Reset your password
                </h2>
                <p className="mt-2 text-center text-lg text-gray-600">
                  or{' '}
                  <Link
                    href="/user/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="reset-code"
                        className="block text-xl font-medium leading-6 text-gray-900"
                      >
                        Reset code
                      </label>
                      <div className="mt-2">
                        <input
                          id="reset-code"
                          name="reset-code"
                          type="text"
                          autoComplete="off"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                    </div>

                    {showFields && (
                      <>
                        <div>
                          <label
                            htmlFor="new-password"
                            className="block text-xl font-medium leading-6 text-gray-900"
                          >
                            New password
                          </label>
                          <div className="mt-2 relative">
                            <input
                              id="new-password"
                              name="new-password"
                              type={showPassword ? 'text' : 'password'}
                              autoComplete="new-password"
                              required
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeIcon className="h-5 w-5" />
                              ) : (
                                <EyeSlashIcon className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="confirm-password"
                            className="block text-xl font-medium leading-6 text-gray-900"
                          >
                            Confirm new password
                          </label>
                          <div className="mt-2 relative">
                            <input
                              id="confirm-password"
                              name="confirm-password"
                              type={showConfirmPassword ? 'text' : 'password'}
                              autoComplete="new-password"
                              required
                              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeIcon className="h-5 w-5" />
                              ) : (
                                <EyeSlashIcon className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Reset password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="https://res.cloudinary.com/dtgmhmxlx/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1681004894/intention/deepmind-kUmcSBJcFPg-unsplash_o96olc.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-2xl">
            Your reset token has expired or is invalid. Please{' '}
            <Link href="/user/forgot-password">
              <a className="text-indigo-600">request a new one</a>
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}

export default Reset;

Reset.getLayout = function getLayout(page: any, pageProps: any) {
  return <UserPagesLayout {...pageProps}>{page}</UserPagesLayout>;
};
