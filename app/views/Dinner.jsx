"use client"

import {
  Box,
  Button,
  Image as ChakraImage,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

import axios from "axios"
import jsonwebtoken from "jsonwebtoken"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect, useState } from "react"
import Masonry from "react-masonry-css"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import ImageOne from "../../public/dinner_club_1.png"
import ImageTwo from "../../public/dinner_club_2.png"
import ImageThree from "../../public/dinner_club_3.png"
import ImageFour from "../../public/dinner_club_4.png"
import ImageFive from "../../public/dinner_club_5.png"
import ImageSix from "../../public/dinner_club_6.png"

import { JWT_SECRET } from "../config"

const NoSSRJoinForm = dynamic(() => import("../forms/JoinForm"), {
  ssr: false,
})

export const Dinner = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const { data } = await axios.post("/api/events", {
      date: new Date().toISOString(),
    })

    setEvents(data.data)
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <>
      <Flex
        id="apply"
        direction="column"
        alignItems="flex-start"
        mt="4rem"
        bg="rgba(255, 173, 226, 0.67)"
        py={{ lg: "4rem", sm: "2rem" }}
        px={{ lg: "4rem", sm: "2rem" }}
        style={{
          backdropFilter: "blur(9.1px)",
        }}
        position="relative"
      >
        <Text
          fontSize={{ lg: "24px", sm: "18px" }}
          mb="1rem"
          color="#ff62c7"
          fontWeight="bold"
        >
          Web3 Dinner Club
        </Text>

        <SimpleGrid columns={{ lg: "2", sm: "1" }} gap="10" placeItems="center">
          <VStack alignItems="flex-start">
            <Text color="black" fontSize={{ sm: "14px", lg: "16px" }}>
              The Chain Miami hosts a community driven dinner club that invites
              Miami’s brightest minds in the web 3space to interact, connect,
              and learn from each other. To ensure a high caliber of attendees
              and conversations, The Chain's Dinner Club operates through a
              selective application process.
            </Text>
            <Text
              textAlign="left"
              fontSize="12px"
              width={{ lg: "50%", sm: "100%" }}
              mt="15px"
              fontStyle="italic"
              opacity="0.8"
            >
              To sponsor a Chain dinner or be a dinner host, ping
              monica@thechain.miami
            </Text>
          </VStack>
          <VStack alignItems="flex-start">
            <HStack
              bg="black"
              color="white"
              py=".5rem"
              px=".8rem"
              borderLeft="2px solid white"
              justifyContent="flex-start"
            >
              <Text
                fontSize={{ sm: "12px", lg: "16px" }}
                textTransform="uppercase"
              >
                The first Tuesday of every month
              </Text>
            </HStack>
            <HStack
              bg="black"
              color="white"
              py=".5rem"
              px=".8rem"
              borderLeft="2px solid white"
              justifyContent="flex-start"
            >
              <Text
                fontSize={{ sm: "12px", lg: "16px" }}
                textTransform="uppercase"
              >
                A highly curated dinner of 15-20 web3 builders in Miami{" "}
              </Text>
            </HStack>
            <HStack
              bg="black"
              color="white"
              py=".5rem"
              px=".8rem"
              borderLeft="2px solid white"
              justifyContent="flex-start"
            >
              <Text
                fontSize={{ sm: "12px", lg: "16px" }}
                textTransform="uppercase"
              >
                Topics, special guests, meaningful connections
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>
        <NoSSRJoinForm />
      </Flex>

      <SimpleGrid
        id="events"
        columns="1"
        bg="black"
        minH="300px"
        py={{ lg: "4rem", sm: "2rem" }}
        px={{ lg: "4rem", sm: "2rem" }}
      >
        <Text
          fontSize={{ lg: "24px", sm: "18px" }}
          mb="1rem"
          color="#ff62c7"
          fontWeight="bold"
        >
          Upcoming Events
        </Text>
        {events.length > 0 ? (
          events.map((record, index) => {
            return (
              <Flex
                key={index}
                w="100%"
                direction={{ lg: "row", sm: "column-reverse" }}
                bg="black"
                py="1rem"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                borderRadius="5px"
              >
                <Flex direction="column">
                  <Text
                    fontSize="14px"
                    mb="10px"
                    color="rgba(255, 173, 226, 0.67)"
                    textTransform="uppercase"
                  >
                    {new Date(record.event.start_at).toString()}
                  </Text>
                  <Text fontSize={{ lg: "24px", sm: "18px" }} maxW="80%">
                    {record.event.name}
                  </Text>
                  <Button
                    w={{ lg: "200px", sm: "100px" }}
                    mt="20px"
                    fontSize={{ sm: "16px" }}
                    onClick={() =>
                      window.open(record.event.url, "_blank").focus()
                    }
                  >
                    RSVP
                  </Button>
                </Flex>
                <ChakraImage
                  w={{ lg: "500px", sm: "200px" }}
                  mb={{ lg: 0, sm: "1rem" }}
                  src={record.event.cover_url}
                  alt="event cover"
                />
              </Flex>
            )
          })
        ) : (
          <Text
            fontSize="14px"
            mb="2rem"
            textAlign="center"
            color="white"
            textTransform="uppercase"
          >
            No events to show now
          </Text>
        )}
      </SimpleGrid>

      <Flex
        px={{ lg: "3rem", sm: "2rem" }}
        pt={{ lg: "4rem", sm: "2rem" }}
        // bg='linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,240,255,1) 100%)'
        position="relative"
        zIndex="1"
        overflow="hidden"
      >
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Box borderRadius="20px" overflow="hidden">
            <Zoom>
              <Image
                src={ImageOne}
                alt="dinner images"
                height="100%"
                width="100%"
                placeholder="blur"
                priority
              />
            </Zoom>
          </Box>
          <Box borderRadius="20px" overflow="hidden">
            <Zoom>
              <Image
                src={ImageThree}
                alt="dinner images"
                height="100%"
                width="100%"
                placeholder="blur"
                priority
              />
            </Zoom>
          </Box>
          <Box borderRadius="20px" overflow="hidden">
            <Zoom>
              <Image
                src={ImageFour}
                alt="dinner images"
                height="100%"
                width="100%"
                placeholder="blur"
                priority
              />
            </Zoom>
          </Box>
          <Box borderRadius="20px" overflow="hidden">
            <Zoom>
              <Image
                src={ImageFive}
                alt="dinner images"
                height="100%"
                width="100%"
                placeholder="blur"
                priority
              />
            </Zoom>
          </Box>
          <Box borderRadius="20px" overflow="hidden">
            <Zoom>
              <Image
                src={ImageSix}
                alt="dinner images"
                height="100%"
                width="100%"
                placeholder="blur"
                priority
              />
            </Zoom>
          </Box>
          <Box borderRadius="20px" overflow="hidden">
            <Zoom>
              <Image
                src={ImageTwo}
                alt="dinner images"
                height="100%"
                width="100%"
                placeholder="blur"
                priority
              />
            </Zoom>
          </Box>
        </Masonry>
      </Flex>

      <ChakraImage
        src="/chain-color.webp"
        alt="the chain"
        position="absolute"
        left="-680"
        id="chain-image"
        zIndex="-1"
        h="auto"
        w="auto"
      />
    </>
  )
}
