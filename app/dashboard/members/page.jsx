'use client'

import useSWR from 'swr'

import { Box, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'

export default function Members() {
  const fetcher = (url) => fetch(url).then((r) => r.json())

  const { data: members, error } = useSWR('/api/community', fetcher)

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
        <Box
          key={member.ID}
          p={5}
          shadow="md"
          borderWidth="1px"
          h={'min-content'}
        >
          <Text fontWeight="bold">{member.Name}</Text>
          <Text>{member.Occupation}</Text>
          <Text>{member.Contribution}</Text>
          <Link href={member.Linkedin} isExternal>
            LinkedIn
          </Link>
          <Link href={`https://twitter.com/${member.Twitter}`} isExternal>
            Twitter
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  )
}
