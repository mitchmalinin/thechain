"use client"

import { Flex, Spinner } from "@chakra-ui/react"
import { useSession } from "next-auth/react"

export default function Members() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <Flex minH="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
    )
  }

  if (!session && status === "loading") {
    return (
      <Flex minH="100vh">
        <div>Need to be a member of The Chain to Access this page</div>
      </Flex>
    )
  }

  return (
    <Flex minH="100vh">
      <div>Membership Page TEST</div>
    </Flex>
  )
}
