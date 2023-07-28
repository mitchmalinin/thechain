import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  AccordionButton,
  Accordion,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/react';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { RadioBox } from '../shared/RadioBox';

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
  const [heardFrom, setHeardFrom] = useState('Twitter');
  return (
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
                        Hi, What's your name?
                      </FormLabel>
                      <Input
                        bg='white'
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>

                    <FormControl isRequired color='black'>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Email address?
                      </FormLabel>
                      <Input
                        bg='white'
                        type='email'
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>
                  </Stack>

                  <Stack
                    mb={{ base: 10, lg: 0 }}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 0, lg: 5 }}
                  >
                    <FormControl isRequired color='black' mb={10}>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Twitter?
                      </FormLabel>
                      <Input
                        bg='white'
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>

                    <FormControl isRequired color='black'>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Linkedin?
                      </FormLabel>
                      <Input
                        bg='white'
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>
                  </Stack>

                  <FormControl isRequired color='black' mb={10}>
                    <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                      What's your occupation?
                    </FormLabel>
                    <Select bg='white' fontSize={{ sm: '14px', lg: '16px' }}>
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
                    />
                  </FormControl>

                  <FormControl isRequired color='black' mb={10}>
                    <Textarea
                      bg='white'
                      color='black'
                      h='100px'
                      fontSize={{ sm: '14px', lg: '16px' }}
                      placeholder='What do you want to contribute to the community? What areas of expertise or resources can you offer the community?'
                    />
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
                        stack='horizontal'
                        options={['Twitter', 'Friends', 'Linkedin']}
                        updateRadio={setHeardFrom}
                        defaultValue={heardFrom}
                        value={heardFrom}
                        color='black'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      >
                        Your wallet address (auto fetched)
                      </FormLabel>
                      <Input
                        bg='black'
                        color='white'
                        value={address || 'Wallet not connected'}
                        isReadOnly={true}
                        isDisabled={true}
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>
                  </Stack>

                  <FormControl isRequired color='black' mb={10}>
                    <Textarea
                      bg='white'
                      color='black'
                      h='100px'
                      fontSize={{ sm: '14px', lg: '16px' }}
                      placeholder='Anything else? Is there something you’d like to share, ask or offer? This is your time to ask!'
                    />
                  </FormControl>

                  <Button
                    mx='auto'
                    mt='2rem'
                    bg='black'
                    border='2px solid black'
                    color='white'
                    _hover={{
                      opacity: '0.8'
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
  );
};

export default JoinForm;
