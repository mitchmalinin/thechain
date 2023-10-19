'use client'

import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import dynamic from 'next/dynamic'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { FaBookOpen } from 'react-icons/fa'
import { MdOutlineZoomInMap } from 'react-icons/md'
import { RiCommunityFill } from 'react-icons/ri'

import { consults } from '../utils/constants'

const NoSSRConsultForm = dynamic(() => import('../forms/ConsultForm'), {
  ssr: false,
})

export const Consult = () => {
  return (
    <Flex
      id="consult"
      direction="column"
      alignItems="center"
      bg="#ccecff"
      p={{ lg: '4rem', sm: '2rem' }}
    >
      <Flex maxW={'100rem'} direction="column" alignItems="flex-start">
        <Text
          fontSize={{ lg: '24px', sm: '18px' }}
          mb="1rem"
          color="#42b5ff"
          fontWeight="bold"
        >
          Consulting.
        </Text>
        <VStack alignItems="flex-start">
          <Text opacity="0.8" fontSize={{ sm: '14px', lg: '16px' }}>
            At The Chain Miami, we understand that every company or project
            aspires to have a thriving community, but not everyone possesses the
            time, expertise, or patience to build it from scratch. In addition
            to running an exceptional in-person community in Miami, our team at
            The Chain Miami specializes in helping businesses achieve financial
            success through a community-driven approach.
          </Text>
          <NoSSRConsultForm />
        </VStack>
      </Flex>

      <SimpleGrid
        columns={{ lg: 4, md: 2, sm: 1 }}
        gap="5"
        mt={{ lg: '1rem', sm: '0' }}
      >
        {consults.map((offer, index) => {
          return (
            <Flex
              key={index}
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              minH="150px"
              p="2rem"
              boxShadow="inset 5px 5px 10px #c0def0,
              inset -5px -5px 10px #d8faff"
              borderRadius="1rem"
            >
              <Box color="black" fontSize="36px" mb="1rem">
                {index == 0 && <BsFillCalendarEventFill />}
                {index == 1 && <RiCommunityFill />}
                {index == 2 && <FaBookOpen />}
                {index == 3 && <MdOutlineZoomInMap />}
              </Box>

              <Text
                color="black"
                fontSize={{ lg: '1rem', sm: '1rem' }}
                fontWeight="bold"
                mb="1rem"
              >
                {offer.title}
              </Text>
              <Text
                color="black"
                textAlign="center"
                fontSize={{ sm: '14px', lg: '14px' }}
                mt="5px"
                opacity="0.5"
              >
                {offer.content}
              </Text>
            </Flex>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}
