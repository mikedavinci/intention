import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';

function Courses() {
  return <div>courses</div>;
}

export default Courses;

Courses.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
