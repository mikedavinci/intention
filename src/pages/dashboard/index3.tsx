//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`/api/generatePost`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ topic, keywords }),
//       });
//       const data = await response.json();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//  <div className="bg-indigo-600 ">
//         <header className="py-5">
//           <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//             <h1 className="text-3xl font-bold tracking-tight text-white">
//               Dashboard
//             </h1>
//             <Link
//               href={'/post/new'}
//               className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-400 hover:text-white"
//             >
//               New Post
//             </Link>
//           </div>
//         </header>
//       </div>

//       <main className="container mx-auto px-4 pt-10 pb-12 lg:pb-16 ">
//         <section aria-labelledby="recent-heading" className="mt-4">
//           <h2 id="recent-heading" className="sr-only">
//             Recent orders
//           </h2>
//           <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
//             <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
//               {orders.map((order) => (
//                 <div
//                   key={order.number}
//                   className="border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
//                 >
//                   <h3 className="sr-only">
//                     Order placed on{' '}
//                     <time dateTime={order.createdDatetime}>
//                       {order.createdDate}
//                     </time>
//                   </h3>

//                   <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
//                     <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
//                       <div>
//                         <dt className="font-medium text-gray-900">
//                           Order number
//                         </dt>
//                         <dd className="mt-1 text-gray-500">{order.number}</dd>
//                       </div>
//                       <div className="hidden sm:block">
//                         <dt className="font-medium text-gray-900">
//                           Date placed
//                         </dt>
//                         <dd className="mt-1 text-gray-500">
//                           <time dateTime={order.createdDatetime}>
//                             {order.createdDate}
//                           </time>
//                         </dd>
//                       </div>
//                       <div>
//                         <dt className="font-medium text-gray-900">
//                           Total amount
//                         </dt>
//                         <dd className="mt-1 font-medium text-gray-900">
//                           {order.total}
//                         </dd>
//                       </div>
//                     </dl>

//                     <Menu
//                       as="div"
//                       className="relative flex justify-end lg:hidden"
//                     >
//                       <div className="flex items-center">
//                         <Menu.Button className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
//                           <span className="sr-only">
//                             Options for order {order.number}
//                           </span>
//                           <EllipsisVerticalIcon
//                             className="h-6 w-6"
//                             aria-hidden="true"
//                           />
//                         </Menu.Button>
//                       </div>

//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           <div className="py-1">
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href={order.href}
//                                   className={classNames(
//                                     active
//                                       ? 'bg-gray-100 text-gray-900'
//                                       : 'text-gray-700',
//                                     'block px-4 py-2 text-sm'
//                                   )}
//                                 >
//                                   View
//                                 </a>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href={order.invoiceHref}
//                                   className={classNames(
//                                     active
//                                       ? 'bg-gray-100 text-gray-900'
//                                       : 'text-gray-700',
//                                     'block px-4 py-2 text-sm'
//                                   )}
//                                 >
//                                   Invoice
//                                 </a>
//                               )}
//                             </Menu.Item>
//                           </div>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>

//                     <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
//                       <a
//                         href={order.href}
//                         className="flex items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                       >
//                         <span>View Order</span>
//                         <span className="sr-only">{order.number}</span>
//                       </a>
//                       <a
//                         href={order.invoiceHref}
//                         className="flex items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                       >
//                         <span>View Invoice</span>
//                         <span className="sr-only">
//                           for order {order.number}
//                         </span>
//                       </a>
//                     </div>
//                   </div>

//                   {/* Products */}
//                   <h4 className="sr-only">Items</h4>
//                   <ul role="list" className="divide-y divide-gray-200">
//                     {order.products.map((product) => (
//                       <li key={product.id} className="p-4 sm:p-6">
//                         <div className="flex items-center sm:items-start">
//                           <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
//                             <img
//                               src={product.imageSrc}
//                               alt={product.imageAlt}
//                               className="h-full w-full object-cover object-center"
//                             />
//                           </div>
//                           <div className="ml-6 flex-1 text-sm">
//                             <div className="font-medium text-gray-900 sm:flex sm:justify-between">
//                               <h5>{product.name}</h5>
//                               <p className="mt-2 sm:mt-0">{product.price}</p>
//                             </div>
//                             <p className="hidden text-gray-500 sm:mt-2 sm:block">
//                               {product.description}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="mt-6 sm:flex sm:justify-between">
//                           <div className="flex items-center">
//                             <CheckCircleIcon
//                               className="h-5 w-5 text-green-500"
//                               aria-hidden="true"
//                             />
//                             <p className="ml-2 text-sm font-medium text-gray-500">
//                               Delivered on{' '}
//                               <time dateTime={order.deliveredDatetime}>
//                                 {order.deliveredDate}
//                               </time>
//                             </p>
//                           </div>

//                           <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
//                             <div className="flex flex-1 justify-center">
//                               <a
//                                 href={product.href}
//                                 className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
//                               >
//                                 View product
//                               </a>
//                             </div>
//                             <div className="flex flex-1 justify-center pl-4">
//                               <a
//                                 href="#"
//                                 className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
//                               >
//                                 Buy again
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/*
//        * Posts List Section
//        */}


//  <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
//    <div className="flex">
//      <h1 className="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
//      <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
//        <button
//          type="button"
//          className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//        >
//          <Bars4Icon className="h-5 w-5" aria-hidden="true" />
//          <span className="sr-only">Use list view</span>
//        </button>
//        <button
//          type="button"
//          className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//        >
//          <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" />
//          <span className="sr-only">Use grid view</span>
//        </button>
//      </div>
   </div>

   {/* Tabs */}
   {/* <div className="mt-3 sm:mt-2">
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
             <Link
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
             </Link>
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
   </div> */}

   {/* Gallery */}
   {/* <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
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
               <span className="sr-only">View details for {file.name}</span>
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
 </div>; */}