import VideoLayout from '@/components/AppLayout/VideoLayout';
import React, { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function VideoId() {
  const tabs = [
    { name: 'Overview', href: '#', current: true },
    { name: 'Q&A', href: '#', current: false },
    { name: 'Notes', href: '#', current: false },
    { name: 'Announcements', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const videoSrc = '#';

  return (
    <div>
      <div className="relative pt-56.25%">
        <video className="top-0 left-0 w-full " src={videoSrc} controls />
      </div>
      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={classNames(
                  tab.name === activeTab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.name === activeTab ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={tab.name === activeTab ? 'block' : 'hidden'}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoId;

VideoId.getLayout = function getLayout(page: any, pageProps: any) {
  return <VideoLayout {...pageProps}>{page}</VideoLayout>;
};
