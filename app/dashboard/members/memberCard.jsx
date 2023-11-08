import { Box, Flex, Link, Text } from '@chakra-ui/react'

export default function MemberCard({ member }) {
  console.log('membver ', member)
  return (
    <Box p={5} shadow="md" borderWidth="1px" h={'min-content'}>
      <Text fontWeight="bold">{member.Name}</Text>
      <Text>Occupation: {member.Occupation}</Text>
      <Text>Contribution: {member.Contribution}</Text>
      <Text>Reason: {member.Reasons}</Text>
      <Flex gap={1}>
        <Link href={member.Linkedin} isExternal>
          LinkedIn
        </Link>
        <Link href={`https://twitter.com/${member.Twitter}`} isExternal>
          Twitter
        </Link>{' '}
      </Flex>
    </Box>
  )
}
