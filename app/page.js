'use client';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Team } from './views/Team';
import { Consult } from './views/Consult';
import { Dinner } from './views/Dinner';
import { Origin } from './views/Origin';
import { Offering } from './views/Offering';
import { About } from './views/About';

import { Footer } from './shared/Footer';

export default function Home() {
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
      <Flex
        direction='column'
        justifyContent='space-between'
        minH='100vh'
        maxW='80rem'
        mx='auto'
      >
        <About />
        <Origin />

        <Flex direction='column'>
          <Offering />
          <Dinner />

          <Consult />
        </Flex>
        <Team />

        <Footer />
      </Flex>
    </>
  );
}
