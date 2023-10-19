'use client'

import {
  Box,
  Button,
  Image as ChakraImage,
  Link as ChakraLink,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'

import { FaInstagram, FaTwitter } from 'react-icons/fa'
import GroupPic from '../../public/chain_group_pic.png'

export const About = () => {
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        px="2rem"
        py="2rem"
        bg="linear-gradient(14deg, rgba(83,206,241,1) 0%, rgba(255,104,211,1) 51%, rgba(242,239,241,1) 98%)"
        color="white"
        position="relative"
        overflow="hidden"
        w={'100%'}
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          border="2px solid white"
          borderRadius="20px"
          p={{ lg: '4rem', sm: '2rem' }}
          background="rgba(0,0,0,.4)"
          zIndex="20"
          maxW={'100rem'}
        >
          <Flex justifyContent="space-between" w="100%">
            <ChakraImage
              mb="1rem"
              src="/the-chain-logo.png"
              alt="logo"
              w={{ lg: '150px', sm: '75px' }}
            />{' '}
            <Flex gap="1rem">
              <ChakraLink
                href="https://twitter.com/thechain_miami"
                fontSize={{ lg: '25px', sm: '15px' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/thechain_miami/"
                target="_blank"
                rel="noopener noreferrer"
                fontSize={{ lg: '25px', sm: '15px' }}
              >
                <FaInstagram />
              </ChakraLink>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Text
              w={{ lg: '70%', sm: '100%' }}
              fontSize={{ sm: '14px', lg: '24px' }}
            >
              Connecting our local community by hosting curated monthly dinners,
              sharing upcoming events and celebrating wins of our local tech
              scene through our weekly text updates.
            </Text>
            <Text opacity="0.7" mt="2rem">
              A community for web3 builders in Miami
            </Text>
            <ChakraLink w="200px" href="/#apply">
              <Button
                mt="15px"
                bg="transparent"
                color="white"
                border="2px solid white"
                fontSize={{ lg: '16px', sm: '12px' }}
                _hover={{
                  opacity: 0.6,
                }}
              >
                Apply to Join
              </Button>
            </ChakraLink>
          </Flex>
        </Flex>

        <VStack
          alignItems="flex-start"
          p={{ lg: '4rem', sm: '1rem' }}
          mt="1rem"
          maxW={'100rem'}
          zIndex={100}
        >
          <Text
            fontSize={{ lg: '24px', sm: '18px' }}
            mb="1rem"
            fontWeight="bold"
          >
            About Us
          </Text>
          <Text
            w={{ lg: '70%', sm: '100%' }}
            lineHeight="1.6"
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
            lineHeight="1.6"
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
          src="/chain-color.webp"
          alt="the chain"
          position="absolute"
          right="-880"
          top="120"
          id="chain-image"
          h="auto"
          w="auto"
          zIndex="10"
        />
      </Flex>

      <Box py="2rem" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={GroupPic}
          alt="the chain december"
          height="100%"
          width="100%"
        />
      </Box>
    </>
  )
}
