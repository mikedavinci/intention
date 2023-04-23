import Dashboard3 from '@/components/AppLayout/AppLayout4';
import React from 'react';

function Projects() {
  return <div>Projects</div>;
}

export default Projects;

Projects.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
