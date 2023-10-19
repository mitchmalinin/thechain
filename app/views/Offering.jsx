'use client'

import {
  Image as ChakraImage,
  Link as ChakraLink,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import { offerings } from '../utils/constants'

export const Offering = () => {
  return (
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
            color="black"
            background="rgba(255, 255, 255, 0.9)"
            boxShadow="inset 5px 5px 10px #e0e0e0,
            inset -5px -5px 10px #ffffff"
            borderRadius="1rem"
          >
            <ChakraImage src={offer.icon} alt="icon" w="40px" mb="15px" />
            <Text
              color="black"
              fontSize={{ lg: '1rem', sm: '1rem' }}
              fontWeight="bold"
              mb="1rem"
              minH="45px"
              textAlign="center"
            >
              {offer.title}
            </Text>
            <Text
              color="#6B728E"
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
  )
}
