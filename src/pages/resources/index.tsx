import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';

function Resources() {
  return <div>Resources</div>;
}

export default Resources;

Resources.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
