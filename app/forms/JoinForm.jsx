import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdCelebration } from 'react-icons/md'
import { RadioBox } from '../shared/RadioBox'

import axios from 'axios'

const occupations = [
  'Founder',
  'Investor',
  'Developer',
  'Marketer',
  'Community Manager',
  'Business Developer',
  'Designer',
  'IT Support',
  'Student',
  'Other',
]

const JoinForm = () => {
  const toast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [twitter, setTwitter] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [occupation, setOccupation] = useState('Founder')
  const [reasons, setReasons] = useState('')
  const [contribution, setContribution] = useState('')
  const [heardFrom, setHeardFrom] = useState('Twitter')
  const [extras, setExtras] = useState('')
  const [error, setError] = useState(false)
  const [address, setAddress] = useState('')
  const [defaultIndex, setDefaultIndex] = useState([0])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)

  const resetForm = () => {
    setName('')
    setEmail('')
    setTwitter('')
    setLinkedin('')
    setOccupation('Founder')
    setReasons('')
    setContribution('')
    setHeardFrom('Twitter')
    setExtras('')
    setAddress('')
    setIsSubmissionSuccess(false)
  }

  const validateSubmission = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.post(`/api/submission`, {
        address: address,
      })
      if (data.status === null) {
        submitHandler()
      } else {
        setIsLoading(false)

        toast({
          position: 'bottom-left',
          render: () => (
            <HStack color="white" p={3} fontSize="14px" bg="#1413146f">
              <Text>You have already made a submission before.</Text>
            </HStack>
          ),
        })
      }
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  const submitHandler = async () => {
    setIsLoading(true)

    let airtableInput = {
      Name: name,
      Email: email,
      Twitter: twitter,
      Linkedin: linkedin,
      Occupation: occupation,
      Reasons: reasons,
      Contribution: contribution,
      From: heardFrom,
      Wallet: address,
      Extras: extras,
    }

    try {
      await axios.post('/api/community', airtableInput)
      toast({
        position: 'bottom-left',
        render: () => (
          <HStack color="white" p={3} fontSize="14px" bg="#1413146f">
            <Text>Submission Successful.</Text>
          </HStack>
        ),
      })
      setIsSubmissionSuccess(true)
      setIsLoading(false)
    } catch (err) {
      setError(true)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Accordion w="100%" py="1rem" allowToggle>
        <AccordionItem outline="none" border="none">
          {({ isExpanded }) => (
            <>
              <AccordionButton
                w="auto"
                outline="none"
                border="2px solid #ff62c7"
                color="white"
                bg="#ff62c7"
                fontSize={{ sm: '14px', lg: '16px' }}
                _hover={{
                  opacity: '0.8',
                }}
              >
                {isExpanded ? 'Close Application' : 'Open Application'}
              </AccordionButton>
              <AccordionPanel>
                <Flex
                  direction="column"
                  alignItems="center"
                  py={{ lg: '2rem', sm: '1rem' }}
                >
                  <Flex direction="column" w="100%">
                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: 'column', lg: 'row' }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl isRequired color="black" mb={10}>
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Hi, what's your name?
                        </FormLabel>
                        <Input
                          bg="white"
                          color="black"
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel
                          color="black"
                          fontSize={{ sm: '14px', lg: '16px' }}
                        >
                          Enter Wallet Address (Non-ENS)
                        </FormLabel>
                        <Input
                          bg="white"
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="0x00..."
                          value={address}
                          mb={10}
                        />
                      </FormControl>

                      <FormControl isRequired color="black">
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Email Address?
                        </FormLabel>
                        <Input
                          bg="white"
                          type="email"
                          color="black"
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </FormControl>
                    </Stack>

                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: 'column', lg: 'row' }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl color="black" mb={10}>
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Twitter?
                        </FormLabel>
                        <Input
                          bg="white"
                          color="black"
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setTwitter(e.target.value)}
                          value={twitter}
                        />
                      </FormControl>

                      <FormControl color="black">
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Linkedin?
                        </FormLabel>
                        <Input
                          bg="white"
                          color="black"
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setLinkedin(e.target.value)}
                          value={linkedin}
                        />
                      </FormControl>
                    </Stack>

                    <FormControl isRequired color="black" mb={10}>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Profession?
                      </FormLabel>
                      <Select
                        bg="white"
                        fontSize={{ sm: '14px', lg: '16px' }}
                        onChange={(e) =>
                          setOccupation(e.target[e.target.selectedIndex].text)
                        }
                        value={occupation}
                      >
                        {occupations.map((occupation, index) => {
                          return (
                            <option
                              key={index}
                              value={occupation}
                              style={{ background: 'white', color: 'black' }}
                            >
                              {occupation}
                            </option>
                          )
                        })}
                      </Select>
                    </FormControl>

                    <FormControl isRequired color="black" mb={10}>
                      <Textarea
                        bg="white"
                        color="black"
                        h="100px"
                        fontSize={{ sm: '14px', lg: '16px' }}
                        placeholder="Please say a few words about you and why you would like to become a member of The Chain. What are your interests? Who are you looking to meet? Any hobbies / interests outside of work?"
                        onChange={(e) => {
                          if (e.target.value.length <= 200) {
                            setReasons(e.target.value)
                          }
                        }}
                        value={reasons}
                      />
                      <FormHelperText textTransform="uppercase">
                        {200 - reasons.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <FormControl isRequired color="black" mb={10}>
                      <Textarea
                        bg="white"
                        color="black"
                        h="100px"
                        fontSize={{ sm: '14px', lg: '16px' }}
                        placeholder="What do you want to contribute to the community? What areas of expertise or resources can you offer the community?"
                        onChange={(e) => {
                          if (e.target.value.length <= 200)
                            setContribution(e.target.value)
                        }}
                        value={contribution}
                      />
                      <FormHelperText textTransform="uppercase">
                        {200 - contribution.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: 'column', lg: 'row' }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl mb="10">
                        <FormLabel
                          color="black"
                          fontSize={{ sm: '14px', lg: '16px' }}
                        >
                          How did you hear about us?
                        </FormLabel>
                        <RadioBox
                          stack="vertical"
                          options={[
                            'Twitter',
                            'Dinner Club',
                            'Instagram',
                            'Texting Community',
                          ]}
                          updateRadio={setHeardFrom}
                          defaultValue={heardFrom}
                          value={heardFrom}
                          color="black"
                        />
                      </FormControl>
                    </Stack>

                    <FormControl isRequired color="black" mb={10}>
                      <Textarea
                        bg="white"
                        color="black"
                        h="100px"
                        fontSize={{ sm: '14px', lg: '16px' }}
                        placeholder="Anything else? Is there something you’d like to share, ask or offer? This is your time to ask!"
                        onChange={(e) => {
                          if (e.target.value.length <= 200) {
                            setExtras(e.target.value)
                          }
                        }}
                        value={extras}
                      />
                      <FormHelperText textTransform="uppercase">
                        {200 - extras.length} chars left
                      </FormHelperText>
                    </FormControl>

                    {error ? (
                      <div>Sorry something went wrong...</div>
                    ) : (
                      <Button
                        mx="auto"
                        mt="2rem"
                        bg="black"
                        border="2px solid black"
                        color="white"
                        isDisabled={!address || !name || !email}
                        isLoading={isLoading}
                        loadingText={'Submitting..'}
                        _hover={{
                          opacity: '0.8',
                        }}
                        onClick={() => {
                          const regex =
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                          if (regex.test(email)) {
                            validateSubmission()
                          } else {
                            toast({
                              position: 'bottom-left',
                              render: () => (
                                <HStack
                                  color="white"
                                  p={3}
                                  fontSize="14px"
                                  bg="#1413146f"
                                >
                                  <Text>Not a valid email address.</Text>
                                </HStack>
                              ),
                            })
                          }
                        }}
                      >
                        Submit Application
                      </Button>
                    )}
                  </Flex>
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>

      <Modal
        isOpen={isSubmissionSuccess}
        onClose={() => {
          resetForm()
        }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            p="2rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box fontSize="2rem" mb="1rem">
              <MdCelebration />
            </Box>
            <Text color="#ff62c7">
              Your application to join the chain has been submitted. If chosen,
              you will be contacted.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default JoinForm
