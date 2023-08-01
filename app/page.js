import Head from 'next/head';
import Home from './Home';

export const metadata = {
  title: 'The Chain',
  description: 'A community for web3 builders in Miami.',
  openGraph: {
    title: 'The Chain',
    description: 'A community for web3 builders in Miami.'
  }
};

export default function Index() {
  return (
    <>
      <Head>
        <title>The Chain</title>
        <meta
          name='description'
          content='A community for web3 builders in Miami.'
        />
        <meta property='og:title' content='The Chain' />
        <meta
          property='og:description'
          content='A community for web3 builders in Miami'
        />
        <meta name='twitter:title' content='The Chain' />
        <meta
          name='twitter:description'
          content='A community for web3 builders in Miami'
        />
      </Head>
      <Home />
    </>
  );
}
