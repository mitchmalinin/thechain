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

const services = [
  'Community Strategy (ideation, launch, planning)',
  'Community Growth (community led marketing and sales)',
  'Community Management (Launching a Discord, managing a community)',
  'Community-led growth marketing and sales tactics',
  'Planning a Dinner Party',
  'Event Planning (less than 50 people)',
  'Event Planning (more than 50 people)',
  'Throwing a hackathon',
  'Sponsored shoutouts & social media campaigns',
  'Sponsored partnership campaigns with The Chain',
  'New: Launching a micro-niche community',
  'Help me figure out what I need'
];

const budget = [
  '$3000<',
  '$3000 - $10k',
  '$10k - $20k',
  '$20k - $50k',
  '$50k+',
  'Not Sure'
];

const ConsultForm = () => {
  const { address } = useAccount();
  const [contactPreference, setContactPreference] = useState('Email');
  const [projectType, setProjectType] = useState('New');

  return (
    <Accordion w='100%' py='1rem' allowToggle>
      <AccordionItem outline='none' border='none'>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              w='auto'
              outline='none'
              border='2px solid #42b5ff'
              color='#42b5ff'
              fontSize={{ sm: '14px', lg: '16px' }}
              _hover={{
                background: 'transparent',
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
                    <FormControl
                      isRequired
                      color='black'
                      mb={10}
                      fontSize={{ sm: '14px', lg: '16px' }}
                    >
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Hi, What's your name?
                      </FormLabel>
                      <Input
                        fontSize={{ sm: '14px', lg: '16px' }}
                        bg='white'
                        color='black'
                      />
                    </FormControl>

                    <FormControl isRequired color='black'>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Email address
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
                        Phone Number
                      </FormLabel>
                      <Input
                        bg='white'
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>

                    <FormControl isRequired color='black'>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Company/Organization Name (if applicable)
                      </FormLabel>
                      <Input
                        bg='white'
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      />
                    </FormControl>
                  </Stack>

                  <Stack
                    mb={{ base: 10, lg: 10 }}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 0, lg: 5 }}
                  >
                    <FormControl mb='10'>
                      <FormLabel
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      >
                        Preferred Method of Communication
                      </FormLabel>
                      <RadioBox
                        stack='horizontal'
                        options={['Email', 'Phone Number']}
                        updateRadio={setContactPreference}
                        defaultValue={contactPreference}
                        value={contactPreference}
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

                  <Stack
                    mb={{ base: 10, lg: 10 }}
                    direction={{ base: 'row', lg: 'row' }}
                    spacing={{ base: 0, lg: 5 }}
                  >
                    <FormControl>
                      <FormLabel
                        color='black'
                        fontSize={{ sm: '14px', lg: '16px' }}
                      >
                        Project Type
                      </FormLabel>
                      <RadioBox
                        stack='horizontal'
                        options={['New', 'Existing']}
                        updateRadio={setProjectType}
                        defaultValue={projectType}
                        value={projectType}
                        color='black'
                      />
                    </FormControl>
                    <FormControl isRequired color='black'>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Project Name
                      </FormLabel>
                      <Input
                        bg='white'
                        color='black'
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
                      placeholder='Briefly describe the nature of the consulting project or services you’re interested in.'
                    />
                  </FormControl>

                  <Stack
                    mb={{ base: 10, lg: 0 }}
                    direction={{ base: 'row', lg: 'row' }}
                    spacing={{ base: 5, lg: 5 }}
                  >
                    <FormControl isRequired color='black' mb={10}>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        What services are needed?
                      </FormLabel>
                      <Select bg='white' fontSize={{ sm: '14px', lg: '16px' }}>
                        {services.map((service, index) => {
                          return (
                            <option
                              key={index}
                              value={service}
                              style={{ background: 'white', color: 'black' }}
                            >
                              {service}
                            </option>
                          );
                        })}
                      </Select>
                    </FormControl>

                    <FormControl isRequired color='black' mb={10}>
                      <FormLabel fontSize={{ sm: '14px', lg: '16px' }}>
                        Estimated budget
                      </FormLabel>
                      <Select bg='white' fontSize={{ sm: '14px', lg: '16px' }}>
                        {budget.map((b, index) => {
                          return (
                            <option
                              key={index}
                              value={b}
                              style={{ background: 'white', color: 'black' }}
                            >
                              {b}
                            </option>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Stack>

                  <FormControl isRequired color='black' mb={10}>
                    <Textarea
                      bg='white'
                      color='black'
                      h='100px'
                      fontSize={{ sm: '14px', lg: '16px' }}
                      placeholder='What specific challenges or issues are you looking to address through The Chain’s consulting?'
                    />
                  </FormControl>

                  <FormControl isRequired color='black' mb={10}>
                    <Textarea
                      bg='white'
                      color='black'
                      h='100px'
                      fontSize={{ sm: '14px', lg: '16px' }}
                      placeholder='Additional Information / questions.'
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

export default ConsultForm;
