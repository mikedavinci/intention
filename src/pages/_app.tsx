import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
});

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <UserProvider>
      <main
        className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body`}
      >
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </main>
    </UserProvider>
  );
}

export default App;
