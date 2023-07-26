'use client';

import {
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  VStack,
  SimpleGrid
} from '@chakra-ui/react';
import Link from 'next/link';

import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Flex
      w='100%'
      direction={{ base: 'column-reverse', md: 'row', lg: 'row' }}
      alignItems='flex-start'
      justifyContent='space-between'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '2rem' }}
      bg='black'
    >
      <VStack alignItems='flex-start'>
        <Text
          fontWeight='bold'
          fontSize={{ lg: '1.5rem', sm: '1rem' }}
          mb={{ lg: '1rem', sm: '0' }}
          mt={{ lg: 0, sm: '1.5rem' }}
          color='#ff62c7'
        >
          The Chain
        </Text>
      </VStack>

      <SimpleGrid columns={2} spacing={{ base: '2rem', lg: '5rem' }}>
        <VStack alignItems='flex-start'>
          <Text
            fontSize={{ lg: '18px', sm: '16px' }}
            color='#42b5ff'
            fontWeight='bold'
          >
            For Community
          </Text>

          <Text
            fontSize={{ lg: '16px', sm: '14px' }}
            color='white'
            cursor='pointer'
          >
            Join Us
          </Text>

          <Text
            fontSize={{ lg: '16px', sm: '14px' }}
            color='white'
            cursor='pointer'
          >
            Join our texts
          </Text>
        </VStack>
        <VStack alignItems='flex-start'>
          <Text
            fontSize={{ lg: '18px', sm: '16px' }}
            color='#42b5ff'
            fontWeight='bold'
          >
            For Clients
          </Text>

          <Text
            fontSize={{ lg: '16px', sm: '14px' }}
            color='white'
            cursor='pointer'
          >
            Hire Us
          </Text>
          <Text
            fontSize={{ lg: '16px', sm: '14px' }}
            color='white'
            cursor='pointer'
          >
            Ask Q's
          </Text>
          <Text
            fontSize={{ lg: '16px', sm: '14px' }}
            color='white'
            cursor='pointer'
          >
            Past Clients
          </Text>
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};
