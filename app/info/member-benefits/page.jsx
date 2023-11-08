'use client'

import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  FaBrain,
  FaComments,
  FaEnvelopeOpen,
  FaHandHoldingHeart,
  FaHandshake,
  FaHeart,
  FaInstagram,
  FaPeopleCarry,
  FaStar,
  FaTicketAlt,
  FaTwitter,
  FaUserFriends,
  FaUserPlus,
  FaUsers,
} from 'react-icons/fa'

const benefits = [
  { text: 'The Chain’s Dinner Club', icon: FaUsers },
  { text: 'Exclusive members-only events', icon: FaEnvelopeOpen },
  {
    text: 'First dibs to discounted and free conference tickets',
    icon: FaTicketAlt,
  },
  { text: 'Featured and have access to Member Directory', icon: FaUserPlus },
  { text: 'Join our members-only group chat', icon: FaComments },
  { text: 'Member Spotlight on The Chain’s Twitter and IG', icon: FaTwitter }, // using Twitter icon as a placeholder
  { text: 'Get rewarded for getting involved', icon: FaStar },
  { text: 'Connect with other builders in web3', icon: FaHandshake },
  { text: 'Create your own profile on our member directory', icon: FaUserPlus },
  { text: 'First dibs on special invitations', icon: FaEnvelopeOpen },
  { text: 'Annual member spotlight on social media', icon: FaInstagram }, // using Instagram icon as a placeholder
  { text: 'Attend our members-only IRL events', icon: FaUsers },
  { text: 'Join our members-only group chat', icon: FaComments },
]

const coreValues = [
  {
    title: 'Give and receive help',
    description: [
      'Conscientious pursuit of helping others. As a member of The Chain how can you prioritize helping others?',
      'Be willing to introduce yourself and to learn about The Chain and people in the community',
      'Try to make friends or at least be polite',
      'Be ready to participate in conversations or events',
    ],
    icon: FaHandHoldingHeart,
  },
  {
    title: 'Kindness',
    description: [
      'Be kind and accepting to everyone despite their backgrounds and beliefs',
    ],
    icon: FaHeart,
  },
  {
    title: 'Inclusivity',
    description: ['Being inclusiveness and intentional is a priority to us'],
    icon: FaUserFriends,
  },
  {
    title: 'Think rigorously',
    description: [
      'We care about being right and it often takes reasoning from first principles to get there.',
    ],
    icon: FaBrain,
  },
  {
    title: 'Collaborate',
    description: [
      'Communities are supposed to create opportunities. The Chain is a multi-generational ecosystem, with a mix of web3 newbies & degens to first time founders and investors.',
      'Collaboration amongst the community is a core metric to track success.',
    ],
    icon: FaPeopleCarry,
  },
]

const MemberBenefits = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' })

  return (
    <Grid
      gridTemplateColumns={'1fr 1fr'}
      bgGradient="linear(to-r, blue.200, pink.200)"
    >
      <Box width="400px" height={'400px'} p={5}></Box>
      <Box width="100%" p={5}>
        {benefits.map((benefit, index) => (
          <Flex direction={columnDirection} key={index}>
            <Icon as={benefit.icon} boxSize={6} color="blue.500" mr={3} />
            <Text
              flex={1}
              borderBottom={
                index === benefits.length - 1 ? 'none' : '1px solid'
              }
              pb={2}
              mb={2}
            >
              {benefit.text}
            </Text>
          </Flex>
        ))}
      </Box>
    </Grid>
  )
}

const CoreValues = () => {
  const gridColumns = useBreakpointValue({
    base: '1fr',
    sm: '1fr 1fr',
    md: '1fr 1fr 1fr',
    lg: '1fr 1fr 1fr 1fr',
  })

  return (
    <Grid width="100%" p={5} gridTemplateColumns={gridColumns} gap={4}>
      {coreValues.map((value, index) => (
        <Box
          bg="white"
          borderRadius="md"
          p={4}
          mb={4}
          key={index}
          border={'1px solid black'}
        >
          <Flex align="center">
            <Icon as={value.icon} boxSize={8} color="pink.300" mr={4} />
            <Text fontSize="xl" fontWeight="bold">
              {value.title}
            </Text>
          </Flex>
          <VStack align="start" spacing={2} mt={3}>
            {value.description.map((desc, i) => (
              <Text key={i}>{desc}</Text>
            ))}
          </VStack>
        </Box>
      ))}
    </Grid>
  )
}
export default function Index() {
  return (
    <Flex w={'100%'} flexDirection={'column'}>
      <MemberBenefits />
      <CoreValues />
    </Flex>
  )
}
