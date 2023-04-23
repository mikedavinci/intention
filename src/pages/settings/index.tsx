import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';

function Settings() {
  return <div>Settings</div>;
}

export default Settings;

Settings.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
