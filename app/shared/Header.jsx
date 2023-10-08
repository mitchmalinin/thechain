"use client"

import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Image as ChakraImage,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { Web3Button } from "@web3modal/react"
import { useRouter } from "next/navigation"

export const Header = () => {
  const router = useRouter()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        w={{ lg: "150px", sm: "75px" }}
        onClick={() => handleNavigation("home")}
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
              <DrawerBody>
                <VStack spacing={4} alignItems="flex-start">
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: "none", color: "#ED73CF" }}
                    onClick={() => handleNavigation("origin")}
                  >
                    Benefits
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: "none", color: "#ED73CF" }}
                    onClick={() => handleNavigation("apply")}
                  >
                    Apply
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: "none", color: "#ED73CF" }}
                    onClick={() => handleNavigation("events")}
                  >
                    Events
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: "none", color: "#ED73CF" }}
                    onClick={() => handleNavigation("consult")}
                  >
                    Consult
                  </ChakraLink>
                  <ChakraLink
                    color="white"
                    _hover={{ textDecoration: "none", color: "#ED73CF" }}
                    onClick={() => handleNavigation("team")}
                  >
                    Team
                  </ChakraLink>
                  <Box display="flex" justifyContent="flex-end" ml="10px"></Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <HStack color="white" justifyContent="center">
          <ChakraLink
            color="white"
            _hover={{ textDecoration: "none", color: "#ED73CF" }}
            onClick={() => handleNavigation("origin")}
          >
            Benefits
          </ChakraLink>
          <ChakraLink
            color="white"
            _hover={{ textDecoration: "none", color: "#ED73CF" }}
            onClick={() => handleNavigation("apply")}
          >
            Apply
          </ChakraLink>
          <ChakraLink
            _hover={{ textDecoration: "none", color: "#ED73CF" }}
            onClick={() => handleNavigation("events")}
          >
            Events
          </ChakraLink>
          <ChakraLink
            _hover={{ textDecoration: "none", color: "#ED73CF" }}
            onClick={() => handleNavigation("consult")}
          >
            Consult
          </ChakraLink>
          <ChakraLink
            _hover={{ textDecoration: "none", color: "#ED73CF" }}
            onClick={() => handleNavigation("team")}
          >
            Team
          </ChakraLink>
          <Box display="flex" justifyContent="flex-end" ml="10px"></Box>
        </HStack>
      )}
    </Flex>
  )
}
