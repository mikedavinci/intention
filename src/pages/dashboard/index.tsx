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
} from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  BellIcon,
  PencilIcon,
  CheckCircleIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Dashboard2 from '@/components/AppLayout/AppLayout3';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Dashboard3 from '@/components/AppLayout/AppLayout4';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import axiosInstance from '../../interceptors/axios';

const orders = [
  {
    number: 'WU88191111',
    date: 'January 22, 2021',
    datetime: '2021-01-22',
    href: '#',
    invoiceHref: '#',
    total: '$302.00',
    products: [
      {
        id: 1,
        name: 'Nomad Tumbler',
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt:
          'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      // More products...
    ],
  },
  // More orders...
];

const user = {
  name: 'Floyd Miles',
  email: 'floyd.miles@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
];
const breadcrumbs = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
const team = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bessie Richards',
    email: 'bessie.richards@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Black',
    email: 'floyd.black@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
const settings = [
  {
    name: 'Public access',
    description: 'This project would be available to anyone who has the link',
  },
  {
    name: 'Private to Project Members',
    description: 'Only members of this project would be able to access',
  },
  {
    name: 'Private to you',
    description: 'You are the only one able to access this project',
  },
];

const tabs = [
  { name: 'Recently Viewed', href: '#', current: true },
  { name: 'Recently Added', href: '#', current: false },
  { name: 'Favorited', href: '#', current: false },
];
const files = [
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  // More files...
];
const currentFile = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    'Uploaded by': 'Marie Culver',
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
    Resolution: '72 x 72',
  },
  sharedWith: [
    {
      id: 1,
      name: 'Aimee Douglas',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
    },
    {
      id: 2,
      name: 'Andrea McMillan',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function IndexDashboard(props: any) {
  const [selected, setSelected] = useState(settings[0]);
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState(['']);

  return (
    <>
      <Head>
        <title>Dashboard - Helping Giant</title>
        <meta name="description" content="Dashboard - Helping Giant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex">
          <h1 className="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
          <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
            <button
              type="button"
              className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Bars4Icon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use list view</span>
            </button>
            <button
              type="button"
              className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use grid view</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-3 sm:mt-2">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              defaultValue="Recently Viewed"
            >
              <option>Recently Viewed</option>
              <option>Recently Added</option>
              <option>Favorited</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center border-b border-gray-200">
              <nav
                className="-mb-px flex flex-1 space-x-6 xl:space-x-8"
                aria-label="Tabs"
              >
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    aria-current={tab.current ? 'page' : undefined}
                    className={classNames(
                      tab.current
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                    )}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
              <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                <button
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use grid view</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Recently viewed
          </h2>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            {files.map((file) => (
              <li key={file.name} className="relative">
                <div
                  className={classNames(
                    file.current
                      ? 'ring-2 ring-indigo-500 ring-offset-2'
                      : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                    'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100'
                  )}
                >
                  <img
                    src={file.source}
                    alt=""
                    className={classNames(
                      file.current ? '' : 'group-hover:opacity-75',
                      'pointer-events-none object-cover'
                    )}
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.name}
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {file.name}
                </p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">
                  {file.size}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

IndexDashboard.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
