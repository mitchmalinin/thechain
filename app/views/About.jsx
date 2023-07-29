'use client';

import {
  Flex,
  Text,
  Button,
  VStack,
  Box,
  Link as ChakraLink,
  Image as ChakraImage
} from '@chakra-ui/react';
import Image from 'next/image';
import { Web3Button } from '@web3modal/react';
import GroupPic from '../../public/chain_group_pic.png';

export const About = () => {
  return (
    <>
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='space-evenly'
        px='2rem'
        py='2rem'
        bg='linear-gradient(14deg, rgba(83,206,241,1) 0%, rgba(255,104,211,1) 51%, rgba(242,239,241,1) 98%)'
        color='white'
        position='relative'
        overflow='hidden'
      >
        <Flex
          direction={{ lg: 'row', sm: 'column-reverse' }}
          alignItems='flex-start'
          border='2px solid white'
          borderRadius='20px'
          p={{ lg: '4rem', sm: '2rem' }}
          background='rgba(0,0,0,.2)'
          zIndex='20'
        >
          <Flex direction='column'>
            <ChakraImage
              src='/the-chain-logo.png'
              alt='logo'
              w='150px'
              mb='1rem'
            />
            <Text opacity='0.7'>A community for web3 builders in Miami</Text>
            <Text
              mt='2rem'
              w={{ lg: '70%', sm: '100%' }}
              fontSize={{ sm: '14px', lg: '16px' }}
            >
              Connecting our local community by hosting curated monthly dinners,
              sharing upcoming events and celebrating wins of our local tech
              scenes through our weekly text updates.
            </Text>
            <ChakraLink href='/#dinner-section'>
              <Button
                w='200px'
                mt='1rem'
                bg='transparent'
                border='2px solid white'
                color='white'
                _hover={{
                  opacity: '0.8'
                }}
              >
                Apply to Chain
              </Button>
            </ChakraLink>
          </Flex>

          <Box
            minW='30%'
            display='flex'
            justifyContent='flex-end'
            mb={{ sm: '1rem' }}
          >
            <Web3Button />
          </Box>
        </Flex>

        <VStack
          alignItems='flex-start'
          p={{ lg: '4rem', sm: '1rem' }}
          mt='1rem'
        >
          <Text
            fontSize={{ lg: '24px', sm: '18px' }}
            mb='1rem'
            fontWeight='bold'
          >
            About Us
          </Text>
          <Text
            w={{ lg: '70%', sm: '100%' }}
            lineHeight='1.6'
            fontSize={{ sm: '14px', lg: '16px' }}
          >
            Welcome to The Chain Miami, we are a curated community and social
            club for the top web3 executives, builders, and enthusiasts in
            Miami. Through bear markets and bull, we bring like-minded
            individuals together, forging genuine friendships and expanding our
            IRL web3 networks.
          </Text>
          <Text
            w={{ lg: '70%', sm: '100%' }}
            lineHeight='1.6'
            fontSize={{ sm: '14px', lg: '16px' }}
          >
            At The Chain Miami, we believe in the power of intentional community
            building. We’re passed the days of generic happy hours and
            superficial networking. We curate intentional experiences that leave
            you energized and inspired. We’re here to foster the growth of
            Miami’s web3 community.
          </Text>
        </VStack>

        <ChakraImage
          src='/chain-color.png'
          alt='the chain'
          position='absolute'
          right='-880'
          top='120'
          id='chain-image'
          zIndex='10'
        />
      </Flex>

      <Box py='2rem'>
        <Image
          src={GroupPic}
          alt='the chain december'
          height='100%'
          width='100%'
        />
      </Box>
    </>
  );
};
