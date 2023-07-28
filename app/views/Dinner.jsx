'use client';

import {
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Image as ChakraImage,
  HStack,
  Box
} from '@chakra-ui/react';

import { MdBrunchDining } from 'react-icons/md';
import Zoom from 'react-medium-image-zoom';
import Masonry from 'react-masonry-css';
import 'react-medium-image-zoom/dist/styles.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import ImageOne from '../../public/dinner_club_1.png';
import ImageTwo from '../../public/dinner_club_2.png';
import ImageThree from '../../public/dinner_club_3.png';
import ImageFour from '../../public/dinner_club_4.png';
import ImageFive from '../../public/dinner_club_5.png';
import ImageSix from '../../public/dinner_club_6.png';

const NoSSRJoinForm = dynamic(() => import('../forms/JoinForm'), {
  ssr: false
});

export const Dinner = () => {
  return (
    <>
      <Flex
        id='dinner-section'
        direction='column'
        alignItems='flex-start'
        mt='4rem'
        bg='rgba(255, 173, 226, 0.67)'
        py={{ lg: '4rem', sm: '2rem' }}
        px={{ lg: '4rem', sm: '2rem' }}
        style={{
          backdropFilter: 'blur(9.1px)'
        }}
        position='relative'
      >
        <Text
          fontSize={{ lg: '24px', sm: '18px' }}
          mb='1rem'
          color='#ff62c7'
          fontWeight='bold'
        >
          Web3 Dinner Club
        </Text>

        <SimpleGrid columns={{ lg: '2', sm: '1' }} gap='10' placeItems='center'>
          <VStack alignItems='flex-start'>
            <Text color='black' fontSize={{ sm: '14px', lg: '16px' }}>
              The Chain Miami hosts a community driven dinner club that invites
              Miami’s brightest minds in the web 3space to interact, connect,
              and learn from each other. To ensure a high caliber of attendees
              and conversations, The Chain's Dinner Club operates through a
              selective application process.
            </Text>
            <Text
              textAlign='left'
              fontSize='12px'
              width={{ lg: '50%', sm: '100%' }}
              mt='15px'
              fontStyle='italic'
              opacity='0.8'
            >
              To sponsor a Chain dinner or be a dinner host, ping
              monica@thechain.miami
            </Text>
          </VStack>
          <VStack alignItems='center'>
            <HStack
              bg='#0c9ef9'
              w='100%'
              color='white'
              py='.5rem'
              px='1rem'
              borderRadius='10px'
              opacity='0.8'
            >
              <MdBrunchDining />
              <Text fontSize={{ sm: '14px', lg: '16px' }}>
                The first Tuesday of every month
              </Text>
            </HStack>
            <HStack
              bg='#0c9ef9'
              opacity='0.8'
              w='100%'
              color='white'
              py='.5rem'
              px='1rem'
              borderRadius='10px'
            >
              <MdBrunchDining />
              <Text fontSize={{ sm: '14px', lg: '16px' }}>
                A highly curated dinner of 15-20 web3 builders in Miami{' '}
              </Text>
            </HStack>
            <HStack
              bg='#0c9ef9'
              color='white'
              opacity='0.8'
              w='100%'
              py='.5rem'
              px='1rem'
              borderRadius='10px'
            >
              <MdBrunchDining />
              <Text fontSize={{ sm: '14px', lg: '16px' }}>
                Topics, special guests, meaningful connections
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>
        <NoSSRJoinForm />
      </Flex>

      <Flex
        px={{ lg: '3rem', sm: '2rem' }}
        pt={{ lg: '4rem', sm: '2rem' }}
        // bg='linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,240,255,1) 100%)'
        position='relative'
        zIndex='1'
        overflow='hidden'
      >
        <Masonry
          breakpointCols={3}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          <Box borderRadius='20px' overflow='hidden'>
            <Zoom>
              <Image
                src={ImageOne}
                height='100%'
                width='100%'
                placeholder='blur'
              />
            </Zoom>
          </Box>
          <Box borderRadius='20px' overflow='hidden'>
            <Zoom>
              <Image
                src={ImageThree}
                height='100%'
                width='100%'
                placeholder='blur'
              />
            </Zoom>
          </Box>
          <Box borderRadius='20px' overflow='hidden'>
            <Zoom>
              <Image
                src={ImageFour}
                height='100%'
                width='100%'
                placeholder='blur'
              />
            </Zoom>
          </Box>
          <Box borderRadius='20px' overflow='hidden'>
            <Zoom>
              <Image
                src={ImageFive}
                height='100%'
                width='100%'
                placeholder='blur'
              />
            </Zoom>
          </Box>
          <Box borderRadius='20px' overflow='hidden'>
            <Zoom>
              <Image
                src={ImageSix}
                height='100%'
                width='100%'
                placeholder='blur'
              />
            </Zoom>
          </Box>
          <Box borderRadius='20px' overflow='hidden'>
            <Zoom>
              <Image
                src={ImageTwo}
                height='100%'
                width='100%'
                placeholder='blur'
              />
            </Zoom>
          </Box>
        </Masonry>
      </Flex>

      <ChakraImage
        src='/chain-color.png'
        position='absolute'
        left='-680'
        id='chain-image'
        zIndex='-1'
      />
    </>
  );
};
