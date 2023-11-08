'use client'

import { SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { Tweet } from 'react-tweet'

export const About = () => {
  return (
    <>
      <VStack
        id="about"
        alignItems={{ sm: 'flex-start', lg: 'center' }}
        p={{ lg: '4rem', sm: '1rem' }}
        mt="1rem"
        maxW={'100rem'}
        zIndex={100}
      >
        <Text
          fontSize={{ lg: '24px', sm: '18px' }}
          mb="1rem"
          fontWeight="bold"
          color="#ff62c7"
        >
          About Us
        </Text>
        <Text
          w={{ lg: '70%', sm: '100%' }}
          lineHeight="2"
          fontSize={{ sm: '14px', lg: '16px' }}
        >
          Welcome to The Chain Miami, we are a curated community and social club
          for the top web3 executives, builders, and enthusiasts in Miami.
          Through bear markets and bull, we bring like-minded individuals
          together, forging genuine friendships and expanding our IRL web3
          networks.
        </Text>
        <Text
          w={{ lg: '70%', sm: '100%' }}
          lineHeight="2"
          fontSize={{ sm: '14px', lg: '16px' }}
        >
          At The Chain Miami, we believe in the power of intentional community
          building. We’re passed the days of generic happy hours and superficial
          networking. We curate intentional experiences that leave you energized
          and inspired. We’re here to foster the growth of Miami’s web3
          community.
        </Text>
      </VStack>
      <SimpleGrid
        py="2rem"
        gap="5"
        columns={{ lg: '2', sm: '1' }}
        placeItems="center"
        px={{ lg: '4rem', sm: '2rem' }}
        maxW={'100rem'}
      >
        <VStack alignItems="flex-start">
          <Text
            fontSize={{ lg: '24px', sm: '18px' }}
            mb="1rem"
            color="#ff62c7"
            fontWeight="bold"
          >
            The Chain's Origin Story
          </Text>
          <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
            In the midst of the bull run of 2022, Monica discovered a remarkable
            truth about Miami – a city with people passionate about web3, yet no
            place for them to connect.
          </Text>
          <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
            With a simple tweet to gauge the presence of the local web3
            community, Monica's expectations were surpassed revealing an
            undeniable need for connection and IRL community for web3 builders
            in Miami.
          </Text>
          <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
            In June 2022, The Chain was born, a community for local builders and
            forward-thinkers in the web3 space to connect through monthly
            dinners and keep the local web3 community up-to-date by launching a
            texting community that shares upcoming events, and a celebration of
            community wins.
          </Text>
          <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
            In the past year, we've hosted 12 dinners & experiences, uniting
            500+ people. Now, as we enter our growth stage, we're more
            intentional than ever in curating our community.
          </Text>
        </VStack>
        <Tweet id="1524019928273199111" />
      </SimpleGrid>
    </>
  )
}
