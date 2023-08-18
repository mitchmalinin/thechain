import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Button,
  AccordionButton,
  Accordion,
  AccordionItem,
  AccordionPanel,
  useToast,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Box
} from '@chakra-ui/react';
import { Web3Button } from '@web3modal/react';
import { useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { RadioBox } from '../shared/RadioBox';
import { MdCelebration } from 'react-icons/md';

import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';

import { JWT_SECRET } from '../config';

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
  'Other'
];

const JoinForm = () => {
  const { address } = useAccount();

  const { signMessage, isLoading: signatureLoading } = useSignMessage({
    message: 'I hereby submit my application to the chain.',
    async onSuccess(data) {
      submitHandler();
    },
    onError() {
      setIsLoading(false);
      toast({
        position: 'bottom-left',
        render: () => (
          <HStack color='white' p={3} fontSize='14px' bg='#1413146f'>
            <Text>Signature denied.</Text>
          </HStack>
        )
      });
    }
  });

  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [occupation, setOccupation] = useState('Founder');
  const [reasons, setReasons] = useState('');
  const [contribution, setContribution] = useState('');
  const [heardFrom, setHeardFrom] = useState('Twitter');
  const [extras, setExtras] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setTwitter('');
    setLinkedin('');
    setOccupation('Founder');
    setReasons('');
    setContribution('');
    setHeardFrom('Twitter');
    setExtras('');
    setIsSubmissionSuccess(false);
  };

  const validateSubmission = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `/api/submission`,
        {
          address: address
        },
        {
          headers: {
            Authorization:
              'Bearer ' +
              jsonwebtoken.sign({ time: Date.now() }, JWT_SECRET, {
                expiresIn: '1h'
              })
          }
        }
      );
      if (data.status === null) {
        signMessage();
      } else {
        setIsLoading(false);

        toast({
          position: 'bottom-left',
          render: () => (
            <HStack color='white' p={3} fontSize='14px' bg='#1413146f'>
              <Text>You have already made a submission before.</Text>
            </HStack>
          )
        });
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);

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
      Extras: extras
    };

    try {
      const { data } = await axios.post('/api/community', airtableInput, {
        headers: {
          Authorization:
            'Bearer ' +
            jsonwebtoken.sign({ time: Date.now() }, JWT_SECRET, {
              expiresIn: '1h'
            })
        }
      });
      toast({
        position: 'bottom-left',
        render: () => (
          <HStack color='white' p={3} fontSize='14px' bg='#1413146f'>
            <Text>Submission Successful.</Text>
          </HStack>
        )
      });
      setIsSubmissionSuccess(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Accordion w='100%' py='1rem' allowToggle>
        <AccordionItem outline='none' border='none'>
          {({ isExpanded }) => (
            <>
              <AccordionButton
                w='auto'
                outline='none'
                border='2px solid #ff62c7'
                color='white'
                bg='#ff62c7'
                fontSize={{ sm: '14px', lg: '16px' }}
                _hover={{
                  opacity: '0.8'
                }}
              >
                {isExpanded ? 'Close Application' : 'Open Application'}
              </AccordionButton>
              <AccordionPanel>
                <Flex
                  direction='column'
                  alignItems='center'
                  py={{ lg: '2rem', sm: '1rem' }}
                >
                  <Flex direction='column' w='100%'>
                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: 'column', lg: 'row' }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl isRequired color='black' mb={10}>
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Hi, what's your name?
                        </FormLabel>
                        <Input
                          bg='white'
                          color='black'
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </FormControl>

                      <FormControl isRequired color='black'>
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Email Address?
                        </FormLabel>
                        <Input
                          bg='white'
                          type='email'
                          color='black'
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
                      <FormControl color='black' mb={10}>
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Twitter?
                        </FormLabel>
                        <Input
                          bg='white'
                          color='black'
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setTwitter(e.target.value)}
                          value={twitter}
                        />
                      </FormControl>

                      <FormControl color='black'>
                        <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                          Linkedin?
                        </FormLabel>
                        <Input
                          bg='white'
                          color='black'
                          fontSize={{ sm: '14px', lg: '16px' }}
                          onChange={(e) => setLinkedin(e.target.value)}
                          value={linkedin}
                        />
                      </FormControl>
                    </Stack>

                    <FormControl isRequired color='black' mb={10}>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Profession?
                      </FormLabel>
                      <Select
                        bg='white'
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
                          );
                        })}
                      </Select>
                    </FormControl>

                    <FormControl isRequired color='black' mb={10}>
                      <Textarea
                        bg='white'
                        color='black'
                        h='100px'
                        fontSize={{ sm: '14px', lg: '16px' }}
                        placeholder='Please say a few words about you and why you would like to become a member of The Chain. What are your interests? Who are you looking to meet? Any hobbies / interests outside of work?'
                        onChange={(e) => {
                          if (e.target.value.length <= 200) {
                            setReasons(e.target.value);
                          }
                        }}
                        value={reasons}
                      />
                      <FormHelperText textTransform='uppercase'>
                        {200 - reasons.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <FormControl isRequired color='black' mb={10}>
                      <Textarea
                        bg='white'
                        color='black'
                        h='100px'
                        fontSize={{ sm: '14px', lg: '16px' }}
                        placeholder='What do you want to contribute to the community? What areas of expertise or resources can you offer the community?'
                        onChange={(e) => {
                          if (e.target.value.length <= 200)
                            setContribution(e.target.value);
                        }}
                        value={contribution}
                      />
                      <FormHelperText textTransform='uppercase'>
                        {200 - contribution.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <Stack
                      mb={{ base: 10, lg: 0 }}
                      direction={{ base: 'column', lg: 'row' }}
                      spacing={{ base: 0, lg: 5 }}
                    >
                      <FormControl mb='10'>
                        <FormLabel
                          color='black'
                          fontSize={{ sm: '14px', lg: '16px' }}
                        >
                          How did you hear about us?
                        </FormLabel>
                        <RadioBox
                          stack='vertical'
                          options={[
                            'Twitter',
                            'Dinner Club',
                            'Instagram',
                            'Texting Community'
                          ]}
                          updateRadio={setHeardFrom}
                          defaultValue={heardFrom}
                          value={heardFrom}
                          color='black'
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel
                          color='black'
                          fontSize={{ sm: '14px', lg: '16px' }}
                        >
                          Wallet Address
                        </FormLabel>

                        <Web3Button />
                      </FormControl>
                    </Stack>

                    <FormControl isRequired color='black' mb={10}>
                      <Textarea
                        bg='white'
                        color='black'
                        h='100px'
                        fontSize={{ sm: '14px', lg: '16px' }}
                        placeholder='Anything else? Is there something you’d like to share, ask or offer? This is your time to ask!'
                        onChange={(e) => {
                          if (e.target.value.length <= 200) {
                            setExtras(e.target.value);
                          }
                        }}
                        value={extras}
                      />
                      <FormHelperText textTransform='uppercase'>
                        {200 - extras.length} chars left
                      </FormHelperText>
                    </FormControl>

                    <Button
                      mx='auto'
                      mt='2rem'
                      bg='black'
                      border='2px solid black'
                      color='white'
                      isDisabled={!address || !name || !email}
                      isLoading={isLoading || signatureLoading}
                      loadingText={
                        signatureLoading
                          ? 'Waiting for signature..'
                          : 'Submitting..'
                      }
                      _hover={{
                        opacity: '0.8'
                      }}
                      onClick={() => {
                        validateSubmission();
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
            p='2rem'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Box fontSize='2rem' mb='1rem'>
              <MdCelebration />
            </Box>
            <Text color='#ff62c7'>
              Your application to join the chain has been submitted. If chosen,
              you will be contacted.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JoinForm;
