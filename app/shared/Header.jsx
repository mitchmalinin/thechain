'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Image as ChakraImage,
  Link as ChakraLink,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAccount, useDisconnect } from 'wagmi'

export const Header = () => {
  const router = useRouter()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: session } = useSession()

  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    if (address && session && address !== session.user.id) {
      disconnect()
      signOut({ callbackUrl: window.location.origin })
    }
  }, [address])

  console.log('address-==-=-', address)

  const handleNavigation = (section) => {
    router.push(`/#${section}`)
    onClose()
  }

  return (
    <Flex
      w="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p="0.5rem"
      background="black"
    >
      <ChakraImage
        src="/the-chain-logo.png"
        alt="logo"
        w={{ sm: '75px', lg: '150px' }}
        _hover={{ cursor: 'pointer' }}
        onClick={() => handleNavigation('home')}
      />

      {isMobile ? (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            colorScheme="white"
          />
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent background="black">
              <DrawerCloseButton color="white" />
              <div>
                <VStack spacing={4} alignItems="flex-start">
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: 'none', color: '#ED73CF' }}
                    onClick={() => handleNavigation('origin')}
                  >
                    Benefits
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: 'none', color: '#ED73CF' }}
                    onClick={() => handleNavigation('apply')}
                  >
                    Apply
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: 'none', color: '#ED73CF' }}
                    onClick={() => handleNavigation('events')}
                  >
                    Events
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: 'none', color: '#ED73CF' }}
                    onClick={() => handleNavigation('consult')}
                  >
                    Consult
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: 'none', color: '#ED73CF' }}
                    onClick={() => handleNavigation('team')}
                  >
                    Team
                  </ChakraLink>
                  {session?.user?.isMember && (
                    <ChakraLink
                      color="white"
                      _hover={{ textDecoration: 'none', color: '#ED73CF' }}
                      href={'/dashboard/members'}
                    >
                      Members
                    </ChakraLink>
                  )}
                  <Box display="flex" justifyContent="flex-end" ml="10px">
                    <ConnectButton chainStatus="none" showBalance={false} />
                  </Box>
                </VStack>
              </div>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <HStack color="white" justifyContent="center">
          <ChakraLink
            color="white"
            _hover={{ textDecoration: 'none', color: '#ED73CF' }}
            onClick={() => handleNavigation('origin')}
          >
            Benefits
          </ChakraLink>
          <ChakraLink
            color="white"
            _hover={{ textDecoration: 'none', color: '#ED73CF' }}
            onClick={() => handleNavigation('apply')}
          >
            Apply
          </ChakraLink>
          <ChakraLink
            _hover={{ textDecoration: 'none', color: '#ED73CF' }}
            onClick={() => handleNavigation('events')}
          >
            Events
          </ChakraLink>
          <ChakraLink
            _hover={{ textDecoration: 'none', color: '#ED73CF' }}
            onClick={() => handleNavigation('consult')}
          >
            Consult
          </ChakraLink>
          <ChakraLink
            _hover={{ textDecoration: 'none', color: '#ED73CF' }}
            onClick={() => handleNavigation('team')}
          >
            Team
          </ChakraLink>
          {session?.user?.isMember && (
            <ChakraLink
              color="white"
              _hover={{ textDecoration: 'none', color: '#ED73CF' }}
              href={'/dashboard/members'}
            >
              Members
            </ChakraLink>
          )}
          <Box display="flex" justifyContent="flex-end" ml="10px">
            <ConnectButton chainStatus="none" showBalance={false} />
          </Box>
        </HStack>
      )}
    </Flex>
  )
}
