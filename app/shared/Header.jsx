'use client';

import { Flex, Text, HStack } from '@chakra-ui/react';
import { Web3Button } from '@web3modal/react';

export const Header = () => {
  return (
    <Flex
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      mb='2rem'
    >
      <HStack fontSize={{ lg: '24px', sm: '18px' }}>
        <Text>The Chain</Text>
      </HStack>
      <HStack>
        <Web3Button />
      </HStack>
    </Flex>
  );
};
