'use client';

import {
  Flex,
  Skeleton,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Link as ChakraLink,
  HStack
} from '@chakra-ui/react';
import { useAccount, useNetwork } from 'wagmi';
import { Web3Button } from '@web3modal/react';
import { Tweet } from 'react-tweet';

import { MdBrunchDining } from 'react-icons/md';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { RiCommunityFill } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa';
import { MdOutlineZoomInMap } from 'react-icons/md';
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillInstagram
} from 'react-icons/ai';

import { Header } from './shared/Header';
import { Footer } from './shared/Footer';

import { offerings, consults } from './utils/constants';

export default function Home() {
  const { address } = useAccount();
  const { chain } = useNetwork();

  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      minH='100vh'
      maxW='80rem'
      mx='auto'
    >
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='space-evenly'
        px='2rem'
        py='2rem'
        bg='linear-gradient(14deg, rgba(83,206,241,1) 0%, rgba(255,104,211,1) 51%, rgba(242,239,241,1) 98%)'
        color='white'
      >
        <Flex
          direction={{ lg: 'row', sm: 'column-reverse' }}
          alignItems='flex-start'
          border='2px solid white'
          p={{ lg: '4rem', sm: '2rem' }}
          background='rgba(0,0,0,.2)'
        >
          <Flex direction='column'>
            <Text fontSize={{ lg: '54px', sm: '24px' }} fontWeight='bold'>
              The Chain
            </Text>
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
            <Button
              w='200px'
              mt='1rem'
              bg='transparent'
              border='2px solid white'
              color='white'
              _hover={{
                background: 'transparent',
                opacity: '0.8'
              }}
            >
              Join the Chain
            </Button>
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
      </Flex>

      <ChakraImage
        src='/chain_group_pic.jpeg'
        alt='the chain december'
        py='2rem'
      />

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
            Monica discovered a remarkable truth about Miami – a city with
            people passionate about web3, yet no place for them to connect.{' '}
          </Text>
          <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
            With a simple tweet to gauge the presence of the web3 community,
            Monica's expectations were surpassed as engagement flooded in,
            revealing an undeniable need for connection and IRL community for
            web3 builders.
          </Text>
          <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
            In June 2022, The Chain was born, assembling the best local builders
            and forward-thinkers in the web3 space through hosting monthly
            dinners and keeping the local web3 community up-to-date by launching
            a texting community that shares weekly texts about upcoming events,
            and a celebration of community wins.
          </Text>
        </VStack>
        <Tweet id='1524019928273199111' />
      </SimpleGrid>

      <Flex direction='column'>
        <SimpleGrid
          columns={{ lg: 2, sm: 1 }}
          gap='5'
          mt={{ lg: '1rem', sm: '0' }}
          px={{ sm: '2rem' }}
        >
          {offerings.map((offer, index) => {
            return (
              <Flex
                key={index}
                direction='column'
                alignItems='center'
                justifyContent='center'
                minH='150px'
                p='1.5rem'
                color='black'
                boxShadow='inset 5px 5px 10px #e0e0e0,
              inset -5px -5px 10px #ffffff'
                borderRadius='1rem'
              >
                <Text
                  color='#42b5ff'
                  fontSize={{ lg: '1.2rem', sm: '1rem' }}
                  fontWeight='bold'
                  mb='1rem'
                  textAlign='center'
                >
                  {offer.title}
                </Text>
                <Text
                  color='#6B728E'
                  textAlign='center'
                  fontSize='1rem'
                  mt='5px'
                >
                  {offer.content}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>

        <Flex
          direction='column'
          alignItems='flex-start'
          my='4rem'
          bg='rgba(255, 173, 226, 0.2)'
          p={{ lg: '4rem', sm: '2rem' }}
        >
          <Text
            fontSize={{ lg: '24px', sm: '18px' }}
            mb='1rem'
            color='#ff62c7'
            fontWeight='bold'
          >
            Web3 Dinner Club
          </Text>
          <SimpleGrid
            columns={{ lg: '2', sm: '1' }}
            gap='10'
            placeItems='center'
          >
            <VStack alignItems='flex-start'>
              <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
                The Chain Miami hosts a community driven dinner club that
                invites Miami’s brightest minds in the web 3space to interact,
                connect, and learn from each other. To ensure a high caliber of
                attendees and conversations, The Chain's Dinner Club operates
                through a selective application process.
              </Text>
              <Button
                mt='1rem'
                bg='transparent'
                border='2px solid #ff62c7'
                color='#ff62c7'
                _hover={{
                  background: 'transparent',
                  opacity: '0.8'
                }}
              >
                Apply
              </Button>
            </VStack>
            <VStack alignItems='center'>
              <HStack
                bg='#42b5ff'
                w='100%'
                color='white'
                py='.5rem'
                px='1rem'
                borderRadius='10px'
              >
                <MdBrunchDining />
                <Text fontSize={{ sm: '14px', lg: '16px' }}>
                  The first Tuesday of every month
                </Text>
              </HStack>
              <HStack
                bg='#42b5ff'
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
                bg='#42b5ff'
                w='100%'
                color='white'
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
        </Flex>

        <SimpleGrid columns={{ lg: '3', sm: '1' }} gap='5' px='1rem'>
          <ChakraImage src='/dinner_club_1.jpeg' />
          <ChakraImage src='/dinner_club_2.jpeg' />
          <ChakraImage src='/dinner_club_3.png' />
        </SimpleGrid>

        <Flex
          direction={{ lg: 'row', sm: 'column' }}
          alignItems='center'
          justifyContent='center'
          px='1rem'
          py='2rem'
        >
          <BsChatLeftTextFill />
          <Text textAlign='left' fontSize='12px' fontStyle='italic' ml='10px'>
            Text 305-871-9262 to receive our bi-weekly texts that includes
            upcoming events, and local community wins.
          </Text>
        </Flex>

        <Flex
          direction='column'
          alignItems='flex-start'
          mb='4rem'
          bg='rgba(66, 181, 255, 0.2)'
          p={{ lg: '4rem', sm: '2rem' }}
        >
          <Text
            fontSize={{ lg: '24px', sm: '18px' }}
            mb='1rem'
            color='#42b5ff'
            fontWeight='bold'
          >
            Consulting
          </Text>
          <SimpleGrid columns='1' gap='10' placeItems='center'>
            <VStack alignItems='flex-start'>
              <Text opacity='0.8' fontSize={{ sm: '14px', lg: '16px' }}>
                At The Chain Miami, we understand that every company or project
                aspires to have a thriving community, but not everyone possesses
                the time, expertise, or patience to build it from scratch. In
                addition to running an exceptional in-person community in Miami,
                our team at The Chain Miami specializes in helping businesses
                achieve financial success through a community-driven approach.
              </Text>
              <Button
                mt='1rem'
                bg='transparent'
                border='2px solid #42b5ff'
                color='#42b5ff'
                _hover={{
                  background: 'transparent',
                  opacity: '0.8'
                }}
              >
                Consult
              </Button>
            </VStack>
            <SimpleGrid
              columns={{ lg: 2, sm: 1 }}
              gap='5'
              mt={{ lg: '1rem', sm: '0' }}
            >
              {consults.map((offer, index) => {
                return (
                  <Flex
                    key={index}
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    minH='150px'
                    p='2rem'
                    boxShadow='inset 6px 6px 7px #b6d1e1,
                    inset -6px -6px 7px #ceebfd'
                    borderRadius='1rem'
                  >
                    <Box color='#42b5ff' fontSize='36px' mb='1rem'>
                      {index == 0 && <BsFillCalendarEventFill />}
                      {index == 1 && <RiCommunityFill />}
                      {index == 2 && <FaBookOpen />}
                      {index == 3 && <MdOutlineZoomInMap />}
                    </Box>

                    <Text
                      color='#42b5ff'
                      fontSize={{ lg: '1.2rem', sm: '1rem' }}
                      fontWeight='bold'
                      mb='1rem'
                    >
                      {offer.title}
                    </Text>
                    <Text
                      color='black'
                      textAlign='left'
                      fontSize={{ sm: '14px', lg: '16px' }}
                      mt='5px'
                      opacity='0.5'
                    >
                      {offer.content}
                    </Text>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </SimpleGrid>
        </Flex>
      </Flex>

      <Flex direction='column'>
        <Text
          fontWeight='bold'
          textAlign='center'
          mt='1rem'
          fontSize={{ lg: '1.5rem', sm: '1rem' }}
          p='1rem'
          color='black'
        >
          Meet the Team
        </Text>
        <Flex
          direction='column'
          alignItems='center'
          px={{ base: '2rem', lg: '5rem' }}
          py={{ base: '2rem', lg: '2rem' }}
        >
          <SimpleGrid columns={{ lg: 2, sm: 1 }} gap='2rem'>
            <Flex
              direction='column'
              alignItems='center'
              justifyContent='center'
              minH='150px'
              p='1rem'
              borderRadius='5px'
              color='black'
            >
              <Box
                w={{ lg: '150px', sm: '100px' }}
                h={{ lg: '150px', sm: '100px' }}
                overflow='hidden'
                borderRadius='50%'
                style={{ filter: 'grayscale(1)' }}
                mb='15px'
              >
                <ChakraImage src='/anna.jpg' alt='anna' />
              </Box>
              <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight='bold'>
                Anna Gandrabura
              </Text>
              <Text opacity='0.7' textAlign='center' fontSize='0.8rem' mt='5px'>
                Founder - English For IT
              </Text>
              <HStack mt='15px'>
                <ChakraLink
                  href='https://twitter.com/anna_gandrabura'
                  isExternal
                  fontSize='25px'
                >
                  <AiFillTwitterSquare />
                </ChakraLink>
                <ChakraLink
                  href='https://www.linkedin.com/in/annagandrabura/'
                  isExternal
                  fontSize='25px'
                >
                  <AiFillLinkedin />
                </ChakraLink>
                <ChakraLink
                  href='https://www.instagram.com/annglish/'
                  isExternal
                  fontSize='25px'
                >
                  <AiFillInstagram />
                </ChakraLink>
              </HStack>
            </Flex>

            <Flex
              direction='column'
              alignItems='center'
              justifyContent='center'
              minH='150px'
              p='1rem'
              borderRadius='5px'
              color='black'
            >
              <Box
                w={{ lg: '150px', sm: '100px' }}
                h={{ lg: '150px', sm: '100px' }}
                overflow='hidden'
                borderRadius='50%'
                style={{ filter: 'grayscale(1)' }}
                mb='15px'
              >
                <ChakraImage src='/monica.jpg' alt='monica' />
              </Box>
              <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight='bold'>
                Monica Rojas
              </Text>
              <Text opacity='0.7' textAlign='center' fontSize='0.8rem' mt='5px'>
                Founder - The Chain
              </Text>
              <HStack mt='15px'>
                <ChakraLink href='' isExternal fontSize='25px'>
                  <AiFillTwitterSquare />
                </ChakraLink>
                <ChakraLink href='' isExternal fontSize='25px'>
                  <AiFillLinkedin />
                </ChakraLink>
                <ChakraLink
                  href='https://www.instagram.com/annglish/'
                  isExternal
                  fontSize='25px'
                >
                  <AiFillInstagram />
                </ChakraLink>
              </HStack>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>

      <Text
        p={{ lg: '4rem', sm: '2rem' }}
        id='quote'
        fontSize={{ lg: '24px', sm: '18px' }}
        textAlign='center'
      >
        Choose The Chain Miami as your trusted partner in community building and
        unlock the full potential of your brand. Together, we will create a
        thriving community that fosters growth, loyalty, and success.
      </Text>

      <Footer />
    </Flex>
  );
}
