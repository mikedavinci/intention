import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <>
      <Image
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
        alt=""
        width={40}
        height={40}
        className="h-8 w-auto"
      />
    </>
  );
};

export default Logo;
