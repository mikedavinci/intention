import { Fragment, useCallback, useEffect, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  CogIcon,
  HeartIcon,
  HomeIcon,
  PhotoIcon,
  RectangleStackIcon,
  Squares2X2Icon as Squares2X2IconOutline,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
  Squares2X2Icon as Squares2X2IconMini,
} from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import axiosInstance from '@/interceptors/axios';
import { logout, loginSuccess } from '@/redux/authSlice';
import FooterDash from '../Footers/FooterDash';
import MenuDash from '../Menus/MenuDash';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'Course', href: '#', icon: Squares2X2IconOutline, current: false },
  { name: 'Projects', href: '#', icon: PhotoIcon, current: true },
  { name: 'Exercises', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Resources', href: '#', icon: RectangleStackIcon, current: false },
  { name: 'Community', href: '#', icon: HeartIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
];

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
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

function Dashboard3({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  // console.log('user', user);
  // console.log('isAuthenticated', isAuthenticated);
  // console.log('dispatch', dispatch);

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post(
        'logout',
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        delete axiosInstance.defaults.headers.common['Authorization'];
        dispatch(logout());
        toast.success(response.data.message);
        router.push('/user/login');
      } else {
        toast.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error: any) {
      toast.error('Error logging out');
    }
  };

  const fetchUserData = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get('user');
      if (data) {
        dispatch(
          loginSuccess({
            user: data,
            token: Cookies.get('access_token'),
          })
        );
      }
    } catch (error: any) {
      if (
        error.response?.status !== 500 &&
        error.response?.data.message !== 'Authorization header not found'
      ) {
        toast.error(error.response?.data.message);
      }
      dispatch(logout());
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        <MenuDash
          key="menuDash"
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex flex-1 justify-between px-4 sm:px-6">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="desktop-search-field" className="sr-only">
                      Search all files
                    </label>
                    <label htmlFor="mobile-search-field" className="sr-only">
                      Search all files
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        name="mobile-search-field"
                        id="mobile-search-field"
                        className="h-full w-full border-0 py-2 pl-8 pr-3 text-base text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden"
                        placeholder="Search"
                        type="search"
                      />
                      <input
                        name="desktop-search-field"
                        id="desktop-search-field"
                        className="hidden h-full w-full border-0 py-2 pl-8 pr-3 text-sm text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block"
                        placeholder="Search all files"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={userMenuOpen}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                onClick={
                                  item.name === 'Sign out'
                                    ? handleLogout
                                    : undefined
                                }
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    className="rounded-full bg-indigo-600 p-1.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                    <span className="sr-only">Add file</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
        {/* Details sidebar */}
        {/* <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
          <div className="space-y-6 pb-16">
            <div>
              <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                <img src={currentFile.source} alt="" className="object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    <span className="sr-only">Details for </span>
                    {currentFile.name}
                  </h2>
                  <p className="text-sm font-medium text-gray-500">
                    {currentFile.size}
                  </p>
                </div>
                <button
                  type="button"
                  className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Favorite</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Information</h3>
              <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                {Object.keys(currentFile.information).map((key) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 text-sm font-medium"
                  >
                    <dt className="text-gray-500">{key}</dt>
                    <dd className="whitespace-nowrap text-gray-900">
                      {currentFile.information[key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Description</h3>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm italic text-gray-500">
                  Add a description to this image.
                </p>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Add description</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Shared with</h3>
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {currentFile.sharedWith.map((person) => (
                  <li
                    key={person.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center">
                      <img
                        src={person.imageUrl}
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove<span className="sr-only"> {person.name}</span>
                    </button>
                  </li>
                ))}
                <li className="flex items-center justify-between py-2">
                  <button
                    type="button"
                    className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                      Share
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-3">
              <button
                type="button"
                className="flex-1 rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download
              </button>
              <button
                type="button"
                className="flex-1 rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Delete
              </button>
            </div>
          </div>
        </aside> */}
      </div>
      <FooterDash key="footerDash" />
    </>
  );
}

export default Dashboard3;
