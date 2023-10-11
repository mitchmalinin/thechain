'use client'

import { SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { Tweet } from 'react-tweet'

export const Origin = () => {
  return (
    <SimpleGrid
      id="origin"
      py="2rem"
      gap="5"
      columns={{ lg: '2', sm: '1' }}
      placeItems="center"
      px={{ lg: '4rem', sm: '2rem' }}
    >
      <VStack alignItems="flex-start">
        <Text
          fontSize={{ lg: '24px', sm: '18px' }}
          mb="1rem"
          color="#ff62c7"
          fontWeight="bold"
        >
          The Chain's Origin Story:
        </Text>
        <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
          In the midst of the bull run of 2022, Monica discovered a remarkable
          truth about Miami – a city with people passionate about web3, yet no
          place for them to connect.
        </Text>
        <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
          With a simple tweet to gauge the presence of the local web3 community,
          Monica's expectations were surpassed revealing an undeniable need for
          connection and IRL community for web3 builders in Miami.
        </Text>
        <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
          In June 2022, The Chain was born, a community for local builders and
          forward-thinkers in the web3 space to connect through monthly dinners
          and keep the local web3 community up-to-date by launching a texting
          community that shares upcoming events, and a celebration of community
          wins.
        </Text>
        <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
          In the past year, we've hosted 12 dinners & experiences, uniting 500+
          people. Now, as we enter our growth stage, we're more intentional than
          ever in curating our community.
        </Text>
      </VStack>
      <Tweet id="1524019928273199111" />
    </SimpleGrid>
  )
}
