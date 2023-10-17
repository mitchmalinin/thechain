'use client'

import useSWR from 'swr'

import { Box, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'

import { getSession } from 'next-auth/react'

export default function Members() {
  const session = getSession()

  const fetcher = (url) => fetch(url).then((r) => r.json())

  const { data: members, error } = useSWR(
    session.isMember ? '/api/community' : null,
    fetcher
  )

  console.log('session', session)

  if (error) return <div>Failed to load members</div>

  if (!session) {
    return (
      <Flex minH="100vh">
        <div>Need to be a member of The Chain to Access this page</div>
      </Flex>
    )
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
      {members.map((member) => (
        <Box key={member.ID} p={5} shadow="md" borderWidth="1px">
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
