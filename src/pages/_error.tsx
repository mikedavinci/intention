// pages/_error.tsx
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  const router = useRouter();

  useEffect(() => {
    // If the status code is not 404, redirect to 404 page
    if (statusCode && statusCode !== 404) {
      router.replace('/404');
    }
  }, [statusCode, router]);

  // Render nothing, as we're redirecting to 404 page for non-404 errors
  return null;
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  let statusCode;

  if (res) {
    // If we are on the server, we can get the status code directly from the response
    statusCode = res.statusCode;
  } else if (err) {
    // If we are on the client, we need to get the status code from the error
    statusCode = err.statusCode;
  }

  // If no status code could be resolved, set it to 500 (internal server error)
  return {
    statusCode: statusCode || 500,
  };
};

export default ErrorPage;
