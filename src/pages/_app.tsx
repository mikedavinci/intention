import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../interceptors/axios';
import store from '../redux/store/store';
import { Provider } from 'react-redux';
import withLoading from '../components/withLoading';

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
    <>
      <Provider store={store}>
        <main
          className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body`}
        >
          <ToastContainer
            position="top-right"
            autoClose={1200}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            theme="dark"
          />
          {getLayout(<Component {...pageProps} />, pageProps)}
        </main>
      </Provider>
    </>
  );
}

export default withLoading(App);
