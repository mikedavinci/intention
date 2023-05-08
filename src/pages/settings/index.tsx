import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';
import { Fragment, useState } from 'react';
import {
  Disclosure,
  Menu,
  RadioGroup,
  Switch,
  Transition,
} from '@headlessui/react';
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import withAuth from '@/redux/withAuth';

const user = {
  name: 'Lisa Marie',
  email: 'lisamarie@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: true },
  { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
];
const plans = [
  {
    name: 'Startup',
    priceMonthly: 29,
    priceYearly: 290,
    limit: 'Up to 5 active job postings',
  },
  {
    name: 'Business',
    priceMonthly: 99,
    priceYearly: 990,
    limit: 'Up to 25 active job postings',
  },
  {
    name: 'Enterprise',
    priceMonthly: 249,
    priceYearly: 2490,
    limit: 'Unlimited active job postings',
  },
];
const payments = [
  {
    id: 1,
    date: '1/1/2020',
    datetime: '2020-01-01',
    description: 'Business Plan - Annual Billing',
    amount: 'CA$109.00',
    href: '#',
  },
  // More payments...
];
const secondaryNavigation = [
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Logout', href: '#', icon: ArrowLeftOnRectangleIcon },
];
const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function Settings() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);
  return (
    // <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
    //   <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
    //     <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
    //       <nav className="space-y-1">
    //         {subNavigation.map((item) => (
    //           <a
    //             key={item.name}
    //             href={item.href}
    //             className={classNames(
    //               item.current
    //                 ? 'bg-gray-50 text-orange-600 hover:bg-white'
    //                 : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
    //               'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
    //             )}
    //             aria-current={item.current ? 'page' : undefined}
    //           >
    //             <item.icon
    //               className={classNames(
    //                 item.current
    //                   ? 'text-orange-500'
    //                   : 'text-gray-400 group-hover:text-gray-500',
    //                 '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
    //               )}
    //               aria-hidden="true"
    //             />
    //             <span className="truncate">{item.name}</span>
    //           </a>
    //         ))}
    //       </nav>
    //     </aside>

    //     {/* Payment details */}
    //     <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
    //       <section aria-labelledby="payment-details-heading">
    //         <form action="#" method="POST">
    //           <div className="shadow sm:overflow-hidden sm:rounded-md">
    //             <div className="bg-white px-4 py-6 sm:p-6">
    //               <div>
    //                 <h2
    //                   id="payment-details-heading"
    //                   className="text-lg font-medium leading-6 text-gray-900"
    //                 >
    //                   Payment details
    //                 </h2>
    //                 <p className="mt-1 text-sm text-gray-500">
    //                   Update your billing information. Please note that updating
    //                   your location could affect your tax rates.
    //                 </p>
    //               </div>

    //               <div className="mt-6 grid grid-cols-4 gap-6">
    //                 <div className="col-span-4 sm:col-span-2">
    //                   <label
    //                     htmlFor="first-name"
    //                     className="block text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     First name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="first-name"
    //                     id="first-name"
    //                     autoComplete="cc-given-name"
    //                     className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-2">
    //                   <label
    //                     htmlFor="last-name"
    //                     className="block text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     Last name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="last-name"
    //                     id="last-name"
    //                     autoComplete="cc-family-name"
    //                     className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-2">
    //                   <label
    //                     htmlFor="email-address"
    //                     className="block text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     Email address
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="email-address"
    //                     id="email-address"
    //                     autoComplete="email"
    //                     className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-1">
    //                   <label
    //                     htmlFor="expiration-date"
    //                     className="block text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     Expration date
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="expiration-date"
    //                     id="expiration-date"
    //                     autoComplete="cc-exp"
    //                     className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                     placeholder="MM / YY"
    //                   />
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-1">
    //                   <label
    //                     htmlFor="security-code"
    //                     className="flex items-center text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     <span>Security code</span>
    //                     <QuestionMarkCircleIcon
    //                       className="ml-1 h-5 w-5 flex-shrink-0 text-gray-300"
    //                       aria-hidden="true"
    //                     />
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="security-code"
    //                     id="security-code"
    //                     autoComplete="cc-csc"
    //                     className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-2">
    //                   <label
    //                     htmlFor="country"
    //                     className="block text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     Country
    //                   </label>
    //                   <select
    //                     id="country"
    //                     name="country"
    //                     autoComplete="country-name"
    //                     className="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                   >
    //                     <option>United States</option>
    //                     <option>Canada</option>
    //                     <option>Mexico</option>
    //                   </select>
    //                 </div>

    //                 <div className="col-span-4 sm:col-span-2">
    //                   <label
    //                     htmlFor="postal-code"
    //                     className="block text-sm font-medium leading-6 text-gray-900"
    //                   >
    //                     ZIP / Postal code
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="postal-code"
    //                     id="postal-code"
    //                     autoComplete="postal-code"
    //                     className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
    //               <button
    //                 type="submit"
    //                 className="inline-flex justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    //               >
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </section>

    //       {/* Plan */}
    //       <section aria-labelledby="plan-heading">
    //         <form action="#" method="POST">
    //           <div className="shadow sm:overflow-hidden sm:rounded-md">
    //             <div className="space-y-6 bg-white px-4 py-6 sm:p-6">
    //               <div>
    //                 <h2
    //                   id="plan-heading"
    //                   className="text-lg font-medium leading-6 text-gray-900"
    //                 >
    //                   Plan
    //                 </h2>
    //               </div>

    //               <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
    //                 <RadioGroup.Label className="sr-only">
    //                   Pricing plans
    //                 </RadioGroup.Label>
    //                 <div className="relative -space-y-px rounded-md bg-white">
    //                   {plans.map((plan, planIdx) => (
    //                     <RadioGroup.Option
    //                       key={plan.name}
    //                       value={plan}
    //                       className={({ checked }) =>
    //                         classNames(
    //                           planIdx === 0
    //                             ? 'rounded-tl-md rounded-tr-md'
    //                             : '',
    //                           planIdx === plans.length - 1
    //                             ? 'rounded-bl-md rounded-br-md'
    //                             : '',
    //                           checked
    //                             ? 'z-10 border-orange-200 bg-orange-50'
    //                             : 'border-gray-200',
    //                           'relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-3 md:pr-6'
    //                         )
    //                       }
    //                     >
    //                       {({ active, checked }) => (
    //                         <>
    //                           <span className="flex items-center text-sm">
    //                             <span
    //                               className={classNames(
    //                                 checked
    //                                   ? 'bg-orange-500 border-transparent'
    //                                   : 'bg-white border-gray-300',
    //                                 active
    //                                   ? 'ring-2 ring-offset-2 ring-gray-900'
    //                                   : '',
    //                                 'h-4 w-4 rounded-full border flex items-center justify-center'
    //                               )}
    //                               aria-hidden="true"
    //                             >
    //                               <span className="rounded-full bg-white w-1.5 h-1.5" />
    //                             </span>
    //                             <RadioGroup.Label
    //                               as="span"
    //                               className="ml-3 font-medium text-gray-900"
    //                             >
    //                               {plan.name}
    //                             </RadioGroup.Label>
    //                           </span>
    //                           <RadioGroup.Description
    //                             as="span"
    //                             className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
    //                           >
    //                             <span
    //                               className={classNames(
    //                                 checked
    //                                   ? 'text-orange-900'
    //                                   : 'text-gray-900',
    //                                 'font-medium'
    //                               )}
    //                             >
    //                               ${plan.priceMonthly} / mo
    //                             </span>{' '}
    //                             <span
    //                               className={
    //                                 checked
    //                                   ? 'text-orange-700'
    //                                   : 'text-gray-500'
    //                               }
    //                             >
    //                               (${plan.priceYearly} / yr)
    //                             </span>
    //                           </RadioGroup.Description>
    //                           <RadioGroup.Description
    //                             as="span"
    //                             className={classNames(
    //                               checked ? 'text-orange-700' : 'text-gray-500',
    //                               'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
    //                             )}
    //                           >
    //                             {plan.limit}
    //                           </RadioGroup.Description>
    //                         </>
    //                       )}
    //                     </RadioGroup.Option>
    //                   ))}
    //                 </div>
    //               </RadioGroup>

    //               <Switch.Group as="div" className="flex items-center">
    //                 <Switch
    //                   checked={annualBillingEnabled}
    //                   onChange={setAnnualBillingEnabled}
    //                   className={classNames(
    //                     annualBillingEnabled ? 'bg-orange-500' : 'bg-gray-200',
    //                     'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
    //                   )}
    //                 >
    //                   <span
    //                     aria-hidden="true"
    //                     className={classNames(
    //                       annualBillingEnabled
    //                         ? 'translate-x-5'
    //                         : 'translate-x-0',
    //                       'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
    //                     )}
    //                   />
    //                 </Switch>
    //                 <Switch.Label as="span" className="ml-3 text-sm">
    //                   <span className="font-medium text-gray-900">
    //                     Annual billing
    //                   </span>{' '}
    //                   <span className="text-gray-500">(Save 10%)</span>
    //                 </Switch.Label>
    //               </Switch.Group>
    //             </div>
    //             <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
    //               <button
    //                 type="submit"
    //                 className="inline-flex justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    //               >
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </section>

    //       {/* Billing history */}
    //       <section aria-labelledby="billing-history-heading">
    //         <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
    //           <div className="px-4 sm:px-6">
    //             <h2
    //               id="billing-history-heading"
    //               className="text-lg font-medium leading-6 text-gray-900"
    //             >
    //               Billing history
    //             </h2>
    //           </div>
    //           <div className="mt-6 flex flex-col">
    //             <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //               <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
    //                 <div className="overflow-hidden border-t border-gray-200">
    //                   <table className="min-w-full divide-y divide-gray-200">
    //                     <thead className="bg-gray-50">
    //                       <tr>
    //                         <th
    //                           scope="col"
    //                           className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
    //                         >
    //                           Date
    //                         </th>
    //                         <th
    //                           scope="col"
    //                           className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
    //                         >
    //                           Description
    //                         </th>
    //                         <th
    //                           scope="col"
    //                           className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
    //                         >
    //                           Amount
    //                         </th>
    //                         {/*
    //                               `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
    //                             */}
    //                         <th
    //                           scope="col"
    //                           className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
    //                         >
    //                           <span className="sr-only">View receipt</span>
    //                         </th>
    //                       </tr>
    //                     </thead>
    //                     <tbody className="divide-y divide-gray-200 bg-white">
    //                       {payments.map((payment) => (
    //                         <tr key={payment.id}>
    //                           <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
    //                             <time dateTime={payment.datetime}>
    //                               {payment.date}
    //                             </time>
    //                           </td>
    //                           <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
    //                             {payment.description}
    //                           </td>
    //                           <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
    //                             {payment.amount}
    //                           </td>
    //                           <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
    //                             <a
    //                               href={payment.href}
    //                               className="text-orange-600 hover:text-orange-900"
    //                             >
    //                               View receipt
    //                             </a>
    //                           </td>
    //                         </tr>
    //                       ))}
    //                     </tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </main>
    <main className="flex-1 bg-white">
      <div className="relative mx-auto max-w-4xl">
        <div className="pb-16 pt-10">
          <div className="px-4 sm:px-6 lg:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Settings
            </h1>
          </div>
          <div className="px-4 sm:px-6 lg:px-0">
            <div className="py-6">
              {/* Tabs */}
              <div className="lg:hidden">
                <label htmlFor="selected-tab" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="selected-tab"
                  name="selected-tab"
                  className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  defaultValue={tabs.find((tab) => tab.current).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden lg:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current
                            ? 'border-purple-500 text-purple-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                        )}
                      >
                        {tab.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Description list with inline editing */}
              <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h3>
                  <p className="max-w-2xl text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div className="mt-6">
                  <dl className="divide-y divide-gray-200">
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500">
                        Name
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow">Chelsea Hagon</span>
                        <span className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                      <dt className="text-sm font-medium text-gray-500">
                        Photo
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </span>
                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                          <span className="text-gray-300" aria-hidden="true">
                            |
                          </span>
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                      <dt className="text-sm font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow">
                          chelsea.hagon@example.com
                        </span>
                        <span className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500">
                        Job title
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow">
                          Human Resources Manager
                        </span>
                        <span className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Account
                  </h3>
                  <p className="max-w-2xl text-sm text-gray-500">
                    Manage how information is displayed on your account.
                  </p>
                </div>
                <div className="mt-6">
                  <dl className="divide-y divide-gray-200">
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500">
                        Language
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow">English</span>
                        <span className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                        </span>
                      </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                      <dt className="text-sm font-medium text-gray-500">
                        Date format
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow">DD-MM-YYYY</span>
                        <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                          <span className="text-gray-300" aria-hidden="true">
                            |
                          </span>
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </span>
                      </dd>
                    </div>
                    <Switch.Group
                      as="div"
                      className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5"
                    >
                      <Switch.Label
                        as="dt"
                        className="text-sm font-medium text-gray-500"
                        passive
                      >
                        Automatic timezone
                      </Switch.Label>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <Switch
                          checked={automaticTimezoneEnabled}
                          onChange={setAutomaticTimezoneEnabled}
                          className={classNames(
                            automaticTimezoneEnabled
                              ? 'bg-purple-600'
                              : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              automaticTimezoneEnabled
                                ? 'translate-x-5'
                                : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </dd>
                    </Switch.Group>
                    <Switch.Group
                      as="div"
                      className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5"
                    >
                      <Switch.Label
                        as="dt"
                        className="text-sm font-medium text-gray-500"
                        passive
                      >
                        Auto-update applicant data
                      </Switch.Label>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <Switch
                          checked={autoUpdateApplicantDataEnabled}
                          onChange={setAutoUpdateApplicantDataEnabled}
                          className={classNames(
                            autoUpdateApplicantDataEnabled
                              ? 'bg-purple-600'
                              : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              autoUpdateApplicantDataEnabled
                                ? 'translate-x-5'
                                : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </dd>
                    </Switch.Group>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default withAuth(Settings, true, Dashboard3);

Settings.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
