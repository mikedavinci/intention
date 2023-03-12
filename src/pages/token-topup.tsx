import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Dashboard from '@/components/AppLayout/AppLayout2';

export default function TokenTopup() {
  const handleClick = async (e) => {
    await fetch(`/api/addTokens`, {
      method: 'POST',
    });
  };

  return (
    <>
      <main>
        <button className="btn" onClick={handleClick}>
          Add Tokens
        </button>
      </main>
    </>
  );
}

TokenTopup.getLayout = function getLayout(page: any, pageProps: any) {
  return <Dashboard {...pageProps}>{page}</Dashboard>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
