'use client'

import useSWR from 'swr'

import { Flex, SimpleGrid, Spinner } from '@chakra-ui/react'
import MemberCard from './memberCard'

export default function Members() {
  const fetcher = (url) => fetch(url).then((r) => r.json())

  const { data: members, error, isLoading } = useSWR('/api/community', fetcher)

  if (isLoading)
    return (
      <Flex minH="100vh" alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    )

  if (!members)
    return (
      <Flex minH="100vh" alignItems="center" justifyContent="center">
        <div>Must be Chain Member to view</div>
      </Flex>
    )

  if (error)
    return (
      <Flex minH="100vh" alignItems="center" justifyContent="center">
        <div>Failed to load members</div>
      </Flex>
    )

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} p={4} minH={'100vh'}>
      {members.map((member) => (
        <MemberCard key={member.ID} member={member} />
      ))}
    </SimpleGrid>
  )
}
