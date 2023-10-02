"use client"

import { Flex } from "@chakra-ui/react"

import { About } from "./views/About"
import { Consult } from "./views/Consult"
import { Dinner } from "./views/Dinner"
import { Offering } from "./views/Offering"
import { Origin } from "./views/Origin"
import { Team } from "./views/Team"

import { Footer } from "./shared/Footer"
import { Header } from "./shared/Header"

export default function Home() {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      minH="100vh"
      maxW="80rem"
      mx="auto"
    >
      <Header />
      <About />
      <Origin />

      <Flex direction="column">
        <Offering />
        <Dinner />

        <Consult />
      </Flex>
      <Team />

      <Footer />
    </Flex>
  )
}
