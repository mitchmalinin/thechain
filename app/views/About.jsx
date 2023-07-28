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
            <ChakraImage src='/the-chain-logo.png' w='150px' mb='1rem' />
            <Text opacity='0.7'>A community for web3 builders in Miami</Text>
            <Text
              mt='2rem'
              w={{ lg: '70%', sm: '100%' }}
              fontSize={{ sm: '14px', lg: '16px' }}
            >
              We create a space to connect through our monthly dinners and share
              upcoming events, and celebrate the wins of our local web3 scene
              through our bi-weekly texts
            </Text>
            <ChakraLink href='/#dinner-section'>
              <Button
                w='200px'
                mt='1rem'
                bg='#ff62c7'
                color='white'
                _hover={{
                  opacity: '0.8'
                }}
              >
                Join the Chain
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
            Today is The Chain Miami, the premier community for web3 builders in
            Miami, whether you're new to the web3 space or a seasoned degen. We
            pride ourselves on being an inclusive community of builders and
            forward thinkers, brought together by our shared passion for web3.
            At The Chain Miami, we believe in the power of intentional community
            building. We’re passed the days of generic happy hours and
            superficial networking. We curate intentional experiences that leave
            you energized and inspired. Now more than ever, we seek to unite
            those who are still building during bear markets, connecting
            individuals who share our unwavering belief in the potential of
            web3. Our mission is to bring together like-minded people, fostering
            genuine friendships and expanding our IRL web3 networks.
          </Text>
        </VStack>

        <ChakraImage
          src='/chain-color.png'
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
