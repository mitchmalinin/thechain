'use client';

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
  );
}
