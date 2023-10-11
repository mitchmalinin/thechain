'use client'

import { Flex } from '@chakra-ui/react'

import { About } from './views/About'
import { Consult } from './views/Consult'
import { Dinner } from './views/Dinner'
import { Offering } from './views/Offering'
import { Origin } from './views/Origin'
import { Team } from './views/Team'

export default function Home() {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      minH="100vh"
      maxW="80rem"
      mx="auto"
    >
      <About />
      <Origin />

      <Flex direction="column">
        <Offering />
        <Dinner />

        <Consult />
      </Flex>
      <Team />
    </Flex>
  )
}
