'use client'

import {
  Box,
  Image as ChakraImage,
  Link as ChakraLink,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import { offerings } from '../utils/constants'

export const Offering = () => {
  return (
    <Flex flexDir={'column'} alignItems={'center'} mt="6rem">
      <Text
        fontSize={{ lg: '24px', sm: '18px' }}
        mb="1rem"
        color="#ff62c7"
        fontWeight="bold"
      >
        Benefits
      </Text>
      <SimpleGrid
        id="offering"
        columns={{ lg: 4, md: 2, sm: 1 }}
        gap="5"
        mt={{ lg: '1rem', sm: '0' }}
        px={{ lg: '4rem', sm: '2rem' }}
        maxW={'100rem'}
      >
        {offerings.map((offer, index) => {
          return (
            <Flex
              key={index}
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              minH="150px"
              p="1.5rem"
              bg="#000000ed"
              color={'white'}
              borderRadius="0.5rem"
            >
              <ChakraImage
                src={offer.icon}
                alt="icon"
                w="40px"
                mb="15px"
                filter="invert(1)"
              />
              <Text
                fontSize={{ lg: '1rem', sm: '1rem' }}
                fontWeight="bold"
                mb="0x"
                minH="45px"
                textAlign="center"
                color="#ff62c7"
              >
                {offer.title}
              </Text>
              <Text
                color="white"
                textAlign="center"
                fontSize={{ sm: '14px', lg: '14px' }}
                mt="5px"
                opacity="0.8"
              >
                {offer.content}
              </Text>
              {index == 3 && (
                <ChakraLink
                  src="/#consult"
                  mt="15px"
                  fontSize={{ sm: '14px', lg: '14px' }}
                  textDecoration="underline"
                >
                  Learn more
                </ChakraLink>
              )}
            </Flex>
          )
        })}
      </SimpleGrid>
      <SimpleGrid
        columns={{ sm: '1', lg: '3' }}
        spacing={10}
        mt={'64px'}
        bg="#000000ed"
        p={'2rem'}
        color={'white'}
        maxW={'100rem'}
        gap={'4rem'}
      >
        {[
          { metric: '400k+', description: 'social impressions' },
          { metric: '1000+', description: 'connections made' },
          { metric: '17+', description: 'past events' },
        ].map((item, index) => (
          <Box key={index} textAlign="center">
            <Text fontSize="5xl" fontWeight="bold" color={'#42b5ff'}>
              {item.metric}
            </Text>
            <Text fontSize="sm">{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  )
}
