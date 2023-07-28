'use client';

import { Flex, Text } from '@chakra-ui/react';
import { useNetwork } from 'wagmi';

import { Team } from './views/Team';
import { Consult } from './views/Consult';
import { Dinner } from './views/Dinner';
import { Origin } from './views/Origin';
import { Offering } from './views/Offering';
import { About } from './views/About';

import { Footer } from './shared/Footer';

export default function Home() {
  const { chain } = useNetwork();

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
      <Text
        p={{ lg: '4rem', sm: '2rem' }}
        id='quote'
        fontSize={{ lg: '24px', sm: '18px' }}
        textAlign='center'
        bg='black'
      >
        Choose The Chain Miami as your trusted partner in community building and
        unlock the full potential of your brand. Together, we will create a
        thriving community that fosters growth, loyalty, and success.
      </Text>

      <Footer />
    </Flex>
  );
}
