import { useState } from 'react';
import UserPagesLayout from '@/components/AppLayout/AppLayout5';
import Link from 'next/link';

function Reset() {
  const [code, setCode] = useState('');
  const [showFields, setShowFields] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: implement code validation
    setShowFields(true);
  }

  return (
    <>
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
                        <div className="mt-2">
                          <input
                            id="new-password"
                            name="new-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="block text-xl font-medium leading-6 text-gray-900"
                        >
                          Confirm new password
                        </label>
                        <div className="mt-2">
                          <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                          />
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
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Reset;

Reset.getLayout = function getLayout(page: any, pageProps: any) {
  return <UserPagesLayout {...pageProps}>{page}</UserPagesLayout>;
};
