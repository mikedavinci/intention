import UserPagesLayout from '@/components/AppLayout/AppLayout5';
import axiosInstance from '../../interceptors/axios';
import { useEffect, useState, SyntheticEvent } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Image from 'next/image';
function Forgot() {
  const [email, setEmail] = useState('');

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post('forgot', { email });

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        toast.error(String(error.response.data.message));
      } else {
        toast.error('An unknown error occurred');
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl text-center font-bold tracking-tight text-gray-900">
                Forgot your password?
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
              {/* 
              <p className="mt-2 text-sm text-gray-600">
                Enter your email address to receive a password reset link.
              </p> */}
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={submit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium leading-6 text-gray-900"
                    >
                      Enter your email address to receive a password reset link.
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email address"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send password reset link
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
    </>
  );
}

export default Forgot;

Forgot.getLayout = function getLayout(page: any, pageProps: any) {
  return <UserPagesLayout {...pageProps}>{page}</UserPagesLayout>;
};
