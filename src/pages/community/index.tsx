import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';

function Community() {
  return <div>Community</div>;
}

export default Community;

Community.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
