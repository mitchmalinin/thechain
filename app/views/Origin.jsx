'use client';

import { Text, VStack, SimpleGrid } from '@chakra-ui/react';

import { Tweet } from 'react-tweet';

export const Origin = () => {
  return (
    <SimpleGrid
      py='2rem'
      gap='5'
      columns={{ lg: '2', sm: '1' }}
      placeItems='center'
      px={{ sm: '2rem' }}
    >
      <VStack alignItems='flex-start'>
        <Text
          fontSize={{ lg: '24px', sm: '18px' }}
          mb='1rem'
          color='#ff62c7'
          fontWeight='bold'
        >
          The Chain's Origin Story:
        </Text>
        <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
          Uniting Miami's Web3 Community In the midst of the bull run of 2022,
          Monica discovered a remarkable truth about Miami – a city with people
          passionate about web3, yet no place for them to connect.{' '}
        </Text>
        <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
          With a simple tweet to gauge the presence of the web3 community,
          Monica's expectations were surpassed as engagement flooded in,
          revealing an undeniable need for connection and IRL community for web3
          builders.
        </Text>
        <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
          In June 2022, The Chain was born, assembling the best local builders
          and forward-thinkers in the web3 space through hosting monthly dinners
          and keeping the local web3 community up-to-date by launching a texting
          community that shares weekly texts about upcoming events, and a
          celebration of community wins.
        </Text>
      </VStack>
      <Tweet id='1524019928273199111' />
    </SimpleGrid>
  );
};
