import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>
  )
}
