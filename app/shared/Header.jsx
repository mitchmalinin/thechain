'use client';

import {
  Flex,
  HStack,
  Link as ChakraLink,
  Box,
  Image as ChakraImage
} from '@chakra-ui/react';
import { Web3Button } from '@web3modal/react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

export const Header = () => {
  return (
    <Flex
      w='100%'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      mb='1rem'
    >
      <ChakraImage
        src='/the-chain-logo.png'
        alt='logo'
        w={{ lg: '150px', sm: '75px' }}
      />

      <HStack color='white' justifyContent='center'>
        <ChakraLink
          href='https://twitter.com/thechain_miami'
          fontSize={{ lg: '25px', sm: '15px' }}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
        </ChakraLink>
        <ChakraLink
          href='https://www.instagram.com/thechain_miami/'
          target='_blank'
          rel='noopener noreferrer'
          fontSize={{ lg: '25px', sm: '15px' }}
        >
          <FaInstagram />
        </ChakraLink>
        {/* <Box display='flex' justifyContent='flex-end' ml='10px'>
          <Web3Button label='Sign In' />
        </Box> */}
      </HStack>
    </Flex>
  );
};
