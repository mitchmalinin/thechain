'use client'

import {
  Box,
  Link as ChakraLink,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai'

import Image from 'next/image'

import Anna from '../../public/anna.png'
import Ahsley from '../../public/ashley.jpeg'
import Kyle from '../../public/kyle.jpg'
import Mitch from '../../public/mitch.jpeg'
import Monica from '../../public/monica.png'
import Neha from '../../public/neha.jpeg'

export const Team = () => {
  return (
    <Flex direction="column">
      <Text
        fontWeight="bold"
        textAlign="center"
        mt="1rem"
        fontSize={{ lg: '1.5rem', sm: '1rem' }}
        p="1rem"
        color="black"
      >
        Meet the Team
      </Text>
      <Flex
        direction="column"
        alignItems="center"
        px={{ base: '2rem', lg: '5rem' }}
        py={{ base: '2rem', lg: '2rem' }}
      >
        <SimpleGrid
          columns={{ lg: 3, md: 3, sm: 2 }}
          gap="2rem"
          id="team"
          alignItems={'baseline'}
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="150px"
            p="1rem"
            borderRadius="5px"
            color="black"
          >
            <Box
              w={{ lg: '150px', sm: '100px' }}
              h={{ lg: '150px', sm: '100px' }}
              overflow="hidden"
              borderRadius="50%"
              style={{ filter: 'grayscale(1)' }}
              mb="15px"
            >
              <Image
                src={Anna}
                alt="Anna"
                height="100%"
                width="100%"
                placeholder="blur"
              />
            </Box>
            <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight="bold">
              Anna Gandrabura
            </Text>
            <Text opacity="0.7" textAlign="center" fontSize="0.8rem" mt="5px">
              Founder - English For IT
            </Text>
            <HStack mt="15px">
              <ChakraLink
                href="https://twitter.com/anna_gandrabura"
                isExternal
                fontSize="25px"
              >
                <AiFillTwitterSquare />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/annagandrabura/"
                isExternal
                fontSize="25px"
              >
                <AiFillLinkedin />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/annglish/"
                isExternal
                fontSize="25px"
              >
                <AiFillInstagram />
              </ChakraLink>
            </HStack>
          </Flex>

          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="150px"
            p="1rem"
            borderRadius="5px"
            color="black"
          >
            <Box
              w={{ lg: '150px', sm: '100px' }}
              h={{ lg: '150px', sm: '100px' }}
              overflow="hidden"
              borderRadius="50%"
              style={{ filter: 'grayscale(1)' }}
              mb="15px"
            >
              <Image
                src={Monica}
                alt="Monica"
                height="100%"
                width="100%"
                placeholder="blur"
              />
            </Box>
            <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight="bold">
              Monica Rojas
            </Text>
            <Text opacity="0.7" textAlign="center" fontSize="0.8rem" mt="5px">
              Founder - The Chain
            </Text>
            <HStack mt="15px">
              <ChakraLink
                href="https://twitter.com/LaMoniRojas"
                isExternal
                fontSize="25px"
              >
                <AiFillTwitterSquare />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/monica-rojas24/"
                isExternal
                fontSize="25px"
              >
                <AiFillLinkedin />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/la_monirojas/"
                isExternal
                fontSize="25px"
              >
                <AiFillInstagram />
              </ChakraLink>
            </HStack>
          </Flex>

          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="150px"
            p="1rem"
            borderRadius="5px"
            color="black"
          >
            <Box
              w={{ lg: '150px', sm: '100px' }}
              h={{ lg: '150px', sm: '100px' }}
              overflow="hidden"
              borderRadius="50%"
              style={{ filter: 'grayscale(1)' }}
              mb="15px"
            >
              <Image
                src={Mitch}
                alt="MrWzrd"
                height="100%"
                width="100%"
                placeholder="blur"
              />
            </Box>
            <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight="bold">
              Mitch Malinin
            </Text>
            <Text opacity="0.7" textAlign="center" fontSize="0.8rem" mt="5px">
              Frontend Web Alchemist
            </Text>
            <HStack mt="15px">
              <ChakraLink
                href="https://twitter.com/0xMrWzrd"
                isExternal
                fontSize="25px"
              >
                <AiFillTwitterSquare />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/mitchmalinin/"
                isExternal
                fontSize="25px"
              >
                <AiFillLinkedin />
              </ChakraLink>
            </HStack>
          </Flex>

          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="150px"
            p="1rem"
            borderRadius="5px"
            color="black"
          >
            <Box
              w={{ lg: '150px', sm: '100px' }}
              h={{ lg: '150px', sm: '100px' }}
              overflow="hidden"
              borderRadius="50%"
              style={{ filter: 'grayscale(1)' }}
              mb="15px"
            >
              <Image
                src={Kyle}
                alt="Kyle"
                height="100%"
                width="100%"
                placeholder="blur"
              />
            </Box>
            <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight="bold">
              Kyle Sonlin
            </Text>
            <Text opacity="0.7" textAlign="center" fontSize="0.8rem" mt="5px">
              Entrepreneur, Investor, Bestselling Author
            </Text>
            <HStack mt="15px">
              <ChakraLink
                href="https://twitter.com/KyleSonlin"
                isExternal
                fontSize="25px"
              >
                <AiFillTwitterSquare />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/kylesonlin/"
                isExternal
                fontSize="25px"
              >
                <AiFillLinkedin />
              </ChakraLink>
            </HStack>
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="150px"
            p="1rem"
            borderRadius="5px"
            color="black"
          >
            <Box
              w={{ lg: '150px', sm: '100px' }}
              h={{ lg: '150px', sm: '100px' }}
              overflow="hidden"
              borderRadius="50%"
              style={{ filter: 'grayscale(1)' }}
              mb="15px"
            >
              <Image
                src={Neha}
                alt="Kyle"
                height="100%"
                width="100%"
                placeholder="blur"
              />
            </Box>
            <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight="bold">
              Neha Jwala
            </Text>
            <Text opacity="0.7" textAlign="center" fontSize="0.8rem" mt="5px">
              Co-Founder, Marketer - Nifty Bridge
            </Text>
            <HStack mt="15px">
              <ChakraLink
                href="https://twitter.com/nehaisfunny"
                isExternal
                fontSize="25px"
              >
                <AiFillTwitterSquare />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/neha-jwala/"
                isExternal
                fontSize="25px"
              >
                <AiFillLinkedin />
              </ChakraLink>
            </HStack>
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="150px"
            p="1rem"
            borderRadius="5px"
            color="black"
          >
            <Box
              w={{ lg: '150px', sm: '100px' }}
              h={{ lg: '150px', sm: '100px' }}
              overflow="hidden"
              borderRadius="50%"
              style={{ filter: 'grayscale(1)' }}
              mb="15px"
            >
              <Image
                src={Ahsley}
                alt="Ash"
                height="100%"
                width="100%"
                placeholder="blur"
              />
            </Box>
            <Text fontSize={{ lg: '1.2rem', sm: '1rem' }} fontWeight="bold">
              Ashley Caines
            </Text>
            <Text opacity="0.7" textAlign="center" fontSize="0.8rem" mt="5px">
              Web3 Educator
            </Text>
            <HStack mt="15px">
              <ChakraLink
                href="https://twitter.com/ashmcai"
                isExternal
                fontSize="25px"
              >
                <AiFillTwitterSquare />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/ashleycaines/"
                isExternal
                fontSize="25px"
              >
                <AiFillLinkedin />
              </ChakraLink>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
