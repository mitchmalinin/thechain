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
} from "@chakra-ui/react"
import axios from "axios"
import jsonwebtoken from "jsonwebtoken"
import { useState } from "react"
import { MdCelebration } from "react-icons/md"
import { useSignMessage } from "wagmi"
import { RadioBox } from "../shared/RadioBox"

import { JWT_SECRET } from "../config"

const services = [
  "Community Strategy (ideation, launch, planning)",
  "Community Growth (community led marketing and sales)",
  "Community Management (Launching a Discord, managing a community)",
  "Community-led growth marketing and sales tactics",
  "Planning a Dinner Party",
  "Event Planning (less than 50 people)",
  "Event Planning (more than 50 people)",
  "Throwing a hackathon",
  "Sponsored shoutouts & social media campaigns",
  "Sponsored partnership campaigns with The Chain",
  "New: Launching a micro-niche community",
  "Help me figure out what I need",
]

const budgets = [
  "$3000<",
  "$3000 - $10k",
  "$10k - $20k",
  "$20k - $50k",
  "$50k+",
  "Not Sure",
]

const ConsultForm = () => {
  const { signMessage, isLoading: signatureLoading } = useSignMessage({
    message: "I hereby submit my application to the chain.",
    async onSuccess(data) {
      submitHandler()
    },
    onError() {
      setIsLoading(false)
      toast({
        position: "bottom-left",
        render: () => (
          <HStack color="white" p={3} fontSize="14px" bg="#1413146f">
            <Text>Signature denied.</Text>
          </HStack>
        ),
      })
    },
  })

  const toast = useToast()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [organization, setOrganization] = useState("")
  const [contactPreference, setContactPreference] = useState("Email")
  const [projectType, setProjectType] = useState("New")
  const [projectName, setProjectName] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  const [service, setService] = useState(
    "Community Strategy (ideation, launch, planning)"
  )
  const [budget, setBudget] = useState("$3000<")
  const [issues, setIssues] = useState("")
  const [extras, setExtras] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setOrganization("")
    setContactPreference("Email")
    setProjectType("New")
    setProjectName("")
    setProjectDesc("")
    setService("Community Strategy (ideation, launch, planning)")
    setBudget("$3000<")
    setIssues("")
    setExtras("")
    setIsSubmissionSuccess(false)
  }

  const validateSubmission = async () => {
    signMessage()
  }

  const submitHandler = async () => {
    setIsLoading(true)

    let airtableInput = {
      Name: name,
      Email: email,
      Phone: phone,
      Organization: organization,
      Comms: contactPreference,
      // Wallet: address,
      "Project Type": projectType,
      "Project Name": projectName,
      "Project Description": projectDesc,
      Services: service,
      Budget: budget,
      Issues: issues,
      Extras: extras,
    }

    try {
      const { data } = await axios.post("/api/consultation", airtableInput)
      toast({
        position: "bottom-left",
        render: () => (
          <HStack color="white" p={3} fontSize="14px" bg="#1413146f">
            <Text>Submission Successful.</Text>
          </HStack>
        ),
      })
      setIsSubmissionSuccess(true)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
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
                border="2px solid #42b5ff"
                color="#42b5ff"
                fontSize={{ sm: "14px", lg: "16px" }}
                _hover={{
                  background: "transparent",
                  opacity: "0.8",
                }}
              >
                {isExpanded ? "Close Application" : "Open Application"}
              </AccordionButton>
              <AccordionPanel>
                <Flex
                  direction="column"
                  alignItems="center"
                  py={{ lg: "2rem", sm: "1rem" }}
                >
                  <Flex direction="column" w="100%">
                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: "column", lg: "row" }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl
                        isRequired
                        color="black"
                        mb={10}
                        fontSize={{ sm: "14px", lg: "16px" }}
                      >
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Hi, what's your name?
                        </FormLabel>
                        <Input
                          fontSize={{ sm: "14px", lg: "16px" }}
                          bg="white"
                          color="black"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </FormControl>

                      <FormControl isRequired color="black">
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Email Address
                        </FormLabel>
                        <Input
                          bg="white"
                          type="email"
                          color="black"
                          fontSize={{ sm: "14px", lg: "16px" }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>
                    </Stack>

                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: "column", lg: "row" }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl isRequired color="black" mb={10}>
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Phone Number
                        </FormLabel>
                        <Input
                          bg="white"
                          color="black"
                          fontSize={{ sm: "14px", lg: "16px" }}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </FormControl>

                      <FormControl color="black">
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Company/Organization Name (if applicable)
                        </FormLabel>
                        <Input
                          bg="white"
                          color="black"
                          fontSize={{ sm: "14px", lg: "16px" }}
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                        />
                      </FormControl>
                    </Stack>

                    <Stack
                      mb={{ base: 10, lg: 10 }}
                      direction={{ base: "column", lg: "row" }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl mb="10">
                        <FormLabel
                          color="black"
                          fontSize={{ sm: "14px", lg: "16px" }}
                        >
                          Preferred Method of Communication
                        </FormLabel>
                        <RadioBox
                          stack="horizontal"
                          options={["Email", "Phone Number"]}
                          updateRadio={setContactPreference}
                          defaultValue={contactPreference}
                          value={contactPreference}
                          color="black"
                        />
                      </FormControl>
                      {/* <FormControl>
                        <FormLabel
                          color='black'
                          fontSize={{ sm: '14px', lg: '16px' }}
                        >
                          Your wallet address (auto fetched)
                        </FormLabel>
                        <Web3Button />
                      </FormControl> */}
                    </Stack>

                    <Stack
                      mb={{ base: 10, lg: 10 }}
                      direction={{ base: "row", lg: "row" }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl>
                        <FormLabel
                          color="black"
                          fontSize={{ sm: "14px", lg: "16px" }}
                        >
                          Project Type
                        </FormLabel>
                        <RadioBox
                          stack="horizontal"
                          options={["New", "Existing"]}
                          updateRadio={setProjectType}
                          defaultValue={projectType}
                          value={projectType}
                          color="black"
                        />
                      </FormControl>
                      <FormControl isRequired color="black">
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Project Name
                        </FormLabel>
                        <Input
                          bg="white"
                          color="black"
                          fontSize={{ sm: "14px", lg: "16px" }}
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </FormControl>
                    </Stack>

                    <FormControl isRequired color="black" mb={10}>
                      <Textarea
                        bg="white"
                        color="black"
                        h="100px"
                        fontSize={{ sm: "14px", lg: "16px" }}
                        placeholder="Briefly describe the nature of the consulting project or services you’re interested in."
                        value={projectDesc}
                        onChange={(e) => {
                          if (e.target.value.length <= 200)
                            setProjectDesc(e.target.value)
                        }}
                      />
                      <FormHelperText textTransform="uppercase">
                        {200 - projectDesc.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: "row", lg: "row" }}
                      spacing={{ base: 5, lg: 5 }}
                    >
                      <FormControl isRequired color="black" mb={10}>
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Required Service
                        </FormLabel>
                        <Select
                          bg="white"
                          fontSize={{ sm: "14px", lg: "16px" }}
                          value={service}
                          onChange={(e) =>
                            setService(e.target[e.target.selectedIndex].text)
                          }
                        >
                          {services.map((service, index) => {
                            return (
                              <option
                                key={index}
                                value={service}
                                style={{ background: "white", color: "black" }}
                              >
                                {service}
                              </option>
                            )
                          })}
                        </Select>
                      </FormControl>

                      <FormControl isRequired color="black" mb={10}>
                        <FormLabel fontSize={{ sm: "14px", lg: "16px" }}>
                          Estimated Budget
                        </FormLabel>
                        <Select
                          bg="white"
                          fontSize={{ sm: "14px", lg: "16px" }}
                          value={budget}
                          onChange={(e) =>
                            setBudget(e.target[e.target.selectedIndex].text)
                          }
                        >
                          {budgets.map((b, index) => {
                            return (
                              <option
                                key={index}
                                value={b}
                                style={{ background: "white", color: "black" }}
                              >
                                {b}
                              </option>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Stack>

                    <FormControl isRequired color="black" mb={10}>
                      <Textarea
                        bg="white"
                        color="black"
                        h="100px"
                        fontSize={{ sm: "14px", lg: "16px" }}
                        placeholder="What specific challenges or issues are you looking to address through The Chain’s consulting?"
                        value={issues}
                        onChange={(e) => {
                          if (e.target.value.length <= 200)
                            setIssues(e.target.value)
                        }}
                      />
                      <FormHelperText textTransform="uppercase">
                        {200 - issues.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <FormControl isRequired color="black" mb={10}>
                      <Textarea
                        bg="white"
                        color="black"
                        h="100px"
                        fontSize={{ sm: "14px", lg: "16px" }}
                        placeholder="Additional Information / questions."
                        value={extras}
                        onChange={(e) => {
                          if (e.target.value.length <= 200)
                            setExtras(e.target.value)
                        }}
                      />
                      <FormHelperText textTransform="uppercase">
                        {200 - extras.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <Button
                      mx="auto"
                      mt="2rem"
                      bg="black"
                      border="2px solid black"
                      color="white"
                      _hover={{
                        opacity: "0.8",
                      }}
                      isDisabled={!name || !email || !phone || !projectName}
                      isLoading={isLoading || signatureLoading}
                      loadingText={
                        signatureLoading
                          ? "Waiting for signature.."
                          : "Submitting.."
                      }
                      onClick={() => {
                        validateSubmission()
                      }}
                    >
                      Submit Application
                    </Button>
                  </Flex>
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Modal isOpen={isSubmissionSuccess} onClose={resetForm} isCentered>
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
            <Text color="#42b5ff">
              Your application to consult the chain has been submitted. You will
              be contacted accordingly.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConsultForm
