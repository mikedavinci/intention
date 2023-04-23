import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';

function Exercises() {
  return <div>Exercises</div>;
}

export default Exercises;

Exercises.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
