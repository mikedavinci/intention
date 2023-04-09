import Dashboard3 from '@/components/AppLayout/AppLayout4';

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
  return <Dashboard3 {...pageProps}>{page}</Dashboard3>;
};
