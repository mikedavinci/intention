import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Disclosure, Menu, RadioGroup, Transition } from '@headlessui/react';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  Bars4Icon,
  Squares2X2Icon as Squares2X2IconMini,
  BanknotesIcon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  BellIcon,
  PencilIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
  HeartIcon,
  Bars3CenterLeftIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Dashboard2 from '@/components/AppLayout/AppLayout3';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Dashboard3 from '@/components/AppLayout/AppLayout4';
import withAuth from '@/redux/withAuth';
import { loginSuccess, logout } from '@/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import axiosInstance from '@/interceptors/axios';
import Cookies from 'js-cookie';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function IndexDashboard(props: any) {
  // const [selected, setSelected] = useState(settings[0]);
  // const [topic, setTopic] = useState('');
  // const [keywords, setKeywords] = useState(['']);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated
  // );
  // const user = useSelector((state: RootState) => state.auth.user);
  // console.log(user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check if the code is running on the client-side
  //   if (typeof window === 'undefined') {
  //     return;
  //   }
  //   (async () => {
  //     try {
  //       const { data } = await axiosInstance.get('user');
  //       // console.log(data);

  //       if (data) {
  //         dispatch(
  //           loginSuccess({
  //             user: data,
  //             token: Cookies.get('access_token'),
  //           })
  //         );
  //       }
  //     } catch (error: any) {
  //       // Check if the error is due to missing Authorization header
  //       if (
  //         error.response?.status !== 500 &&
  //         error.response?.data.message !== 'Authorization header not found'
  //       ) {
  //         toast.error(error.response?.data.message);
  //       }
  //       dispatch(logout());
  //     }
  //   })();
  // }, [dispatch]);

  const isAuthenticated = props.isAuthenticated;
  const token = props.token;

  console.log(isAuthenticated, token);

  return (
    <>
      <Head>
        <title>Dashboard - CodeJourney.ai</title>
        <meta name="description" content="Dashboard - CodeJourney.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .darker-shadow {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
        `}</style>
      </Head>
      <main className="flex-1 pb-8">
        {/* Page header */}
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="min-w-0 flex-1">
                {/* Profile */}
                <div className="flex items-center">
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                        alt=""
                      />
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                        Good morning, Emilia Birch
                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                        <BuildingOfficeIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        Duke street studio
                      </dd>
                      <dt className="sr-only">Account status</dt>
                      <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                        <CheckCircleIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                          aria-hidden="true"
                        />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Add money
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Send money
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuth(IndexDashboard, true, Dashboard2);

IndexDashboard.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard2 {...pageProps}>{page}</Dashboard2>;
};
