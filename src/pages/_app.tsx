import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>;
}
