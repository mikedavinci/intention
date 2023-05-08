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
      <main className="pb-8">
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

        <div className="mt-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Overview
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card */}
              {cards.map((card) => (
                <div
                  key={card.name}
                  className="overflow-hidden rounded-lg bg-white shadow"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <card.icon
                          className="h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="truncate text-sm font-medium text-gray-500">
                            {card.name}
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {card.amount}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <a
                        href={card.href}
                        className="font-medium text-cyan-700 hover:text-cyan-900"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
            Recent activity
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul
              role="list"
              className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
            >
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <a
                    href={transaction.href}
                    className="block bg-white px-4 py-4 hover:bg-gray-50"
                  >
                    <span className="flex items-center space-x-4">
                      <span className="flex flex-1 space-x-2 truncate">
                        <BanknotesIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col truncate text-sm text-gray-500">
                          <span className="truncate">{transaction.name}</span>
                          <span>
                            <span className="font-medium text-gray-900">
                              {transaction.amount}
                            </span>{' '}
                            {transaction.currency}
                          </span>
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
              aria-label="Pagination"
            >
              <div className="flex flex-1 justify-between">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>

          {/* Activity table (small breakpoint and up) */}
          <div className="hidden sm:block">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mt-2 flex flex-col">
                <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Transaction
                        </th>
                        <th
                          className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Amount
                        </th>
                        <th
                          className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                          scope="col"
                        >
                          Status
                        </th>
                        <th
                          className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="bg-white">
                          <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                            <div className="flex">
                              <a
                                href={transaction.href}
                                className="group inline-flex space-x-2 truncate text-sm"
                              >
                                <BanknotesIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <p className="truncate text-gray-500 group-hover:text-gray-900">
                                  {transaction.name}
                                </p>
                              </a>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                            <span className="font-medium text-gray-900">
                              {transaction.amount}
                            </span>
                            {transaction.currency}
                          </td>
                          <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                            <span
                              className={classNames(
                                statusStyles[transaction.status],
                                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize'
                              )}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                            <time dateTime={transaction.datetime}>
                              {transaction.date}
                            </time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{' '}
                        <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div className="flex flex-1 justify-between gap-x-3 sm:justify-end">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                      >
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
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
