'use client';

import {
  Flex,
  Text,
  Link as ChakraLink,
  VStack,
  SimpleGrid,
  HStack,
  Box
} from '@chakra-ui/react';

import { FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Flex direction='column'>
      <Box id='footer-background'></Box>
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
            mb={{ lg: '10px', sm: '0' }}
            mt={{ lg: 0, sm: '1.5rem' }}
            color='#ff62c7'
          >
            The Chain
          </Text>
          <HStack color='white'>
            <ChakraLink
              href='https://twitter.com/thechain_miami'
              fontSize='25px'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </ChakraLink>
            <ChakraLink
              href='https://www.instagram.com/thechain_miami/'
              target='_blank'
              rel='noopener noreferrer'
              fontSize='25px'
            >
              <FaInstagram />
            </ChakraLink>
          </HStack>
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

            <ChakraLink href='/#dinner-section'>
              <Text
                fontSize={{ lg: '16px', sm: '14px' }}
                color='white'
                cursor='pointer'
                opacity='0.8'
              >
                Join Us
              </Text>
            </ChakraLink>
          </VStack>
          <VStack alignItems='flex-start'>
            <Text
              fontSize={{ lg: '18px', sm: '16px' }}
              color='#42b5ff'
              fontWeight='bold'
            >
              For Clients
            </Text>

            <ChakraLink href='/#consult-section'>
              <Text
                fontSize={{ lg: '16px', sm: '14px' }}
                color='white'
                cursor='pointer'
                opacity='0.8'
              >
                Hire Us
              </Text>
            </ChakraLink>
            <Text
              fontSize={{ lg: '16px', sm: '14px' }}
              color='white'
              cursor='pointer'
              opacity='0.8'
            >
              Ask Q's
            </Text>
            <Text
              fontSize={{ lg: '16px', sm: '14px' }}
              color='white'
              opacity='0.8'
              cursor='pointer'
            >
              Past Clients
            </Text>
          </VStack>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
