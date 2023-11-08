'use client'

import {
  Box,
  Button,
  Image as ChakraImage,
  Link as ChakraLink,
  Flex,
  Text,
} from '@chakra-ui/react'

import GroupPic from '../../public/chain_group_pic.png'
import { About } from './About'
import { Consult } from './Consult'
import { Dinner } from './Dinner'
import { Offering } from './Offering'
import { Team } from './Team'

import Image from 'next/image'
export default function Home() {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      mx="auto"
      alignItems="center"
    >
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
        minH="80vh"
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          borderRadius="20px"
          textAlign={'center'}
          p={{ lg: '4rem', sm: '2rem' }}
          zIndex="20"
          maxW={'100rem'}
        >
          <Flex direction="column" alignItems={'center'} width={'100%'}>
            <Text
              fontSize={{ sm: '56px', lg: '56px' }}
              fontWeight={'bold'}
              color={'#131313'}
            >
              Miami’s Web3 Plug.
            </Text>
            <Text mt="1rem" fontSize={{ sm: '16px', lg: '24px' }}>
              <span>A community for crypto</span>{' '}
              <strong style={{ color: '#131313' }}>extremists</strong>
            </Text>
            <ChakraLink href="/#apply">
              <Button
                mt={{ sm: '5rem', lg: '10rem' }}
                bg="transparent"
                color="white"
                border="2px solid white"
                fontSize={{ lg: '20px', sm: '16px' }}
                _hover={{
                  opacity: 0.6,
                }}
              >
                Apply to Join
              </Button>
            </ChakraLink>
          </Flex>
        </Flex>

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
      <About />

      <Flex direction="column" alignItems={'center'} w="100%">
        <Offering />
        <Dinner />

        <Consult />
      </Flex>
      <Team />
    </Flex>
  )
}
