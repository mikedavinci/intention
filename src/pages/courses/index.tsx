/* eslint-disable @next/next/no-img-element */
import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';
import Link from 'next/link';
import withAuth from '@/redux/withAuth';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export const getServerSideProps = async () => {
  // replace 'http://localhost:3000' with your actual server address
  const res = await fetch('http://localhost:8001/api/courses');
  const courses = await res.json();

  return {
    props: {
      courses,
    },
  };
};

function Courses({ courses }: any) {
  return (
    <div>
      <div className="bg-gray-100 py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Select A Course
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Begin your journey to becoming a software engineer
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={course?.image}
                    alt=""
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={course?.href} className="hover:underline">
                        {course?.name}
                      </a>
                    </p>

                    <a href={course?.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {course?.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {course?.description}
                      </p>
                    </a>
                  </div>

                  <div className="mt-6 flex items-center">
                    {/* <div className="flex-shrink-0">
                      <a href={course.author.href}>
                        <span className="sr-only">{course.author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={course.author.imageUrl}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a
                          href={course.author.href}
                          className="hover:underline"
                        >
                          {course.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={course.datetime}>{course.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{course.readingTime} read</span>
                      </div>
                    </div> */}
                  </div>
                  <br />
                  <Link
                    href={`/courses/${course?.slug}`}
                    className="flex items-center justify-center px-2 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    <LockClosedIcon
                      className="h-5 w-5 mr-1"
                      aria-hidden="true"
                    />
                    <span className="text-base">Unlock</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Courses, true, Dashboard3);

Courses.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
