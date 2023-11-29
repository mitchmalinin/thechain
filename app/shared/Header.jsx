"use client";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
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
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    VStack,
    useBreakpointValue,
    useDisclosure,
} from "@chakra-ui/react";

import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaTrophy, FaUserCircle, FaUsers } from "react-icons/fa";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWalletWrapper from "../components/connectWalletWrapper";

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: session } = useSession();

    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    useEffect(() => {
        if (address && session && address !== session.user.id) {
            disconnect();
            signOut({ callbackUrl: window.location.origin });
        }
    }, [address]);

    const handleNavigation = (section) => {
        router.push(`/#${section}`);
        onClose();
    };

    const isDashboardRoute = pathname.includes("/dashboard");

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
                w={{ sm: "75px", lg: "120px" }}
                _hover={{ cursor: "pointer" }}
                p={"0.5rem"}
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
                            <div>
                                <VStack spacing={4} alignItems="flex-start">
                                    {!isDashboardRoute && (
                                        <>
                                            <ChakraLink
                                                color="white"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "#ED73CF",
                                                }}
                                                onClick={() =>
                                                    handleNavigation("apply")
                                                }
                                            >
                                                Apply
                                            </ChakraLink>
                                            <ChakraLink
                                                color="white"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "#ED73CF",
                                                }}
                                                onClick={() =>
                                                    handleNavigation("about")
                                                }
                                            >
                                                About
                                            </ChakraLink>

                                            <ChakraLink
                                                color="white"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "#ED73CF",
                                                }}
                                                onClick={() =>
                                                    handleNavigation("events")
                                                }
                                            >
                                                Events
                                            </ChakraLink>
                                            <ChakraLink
                                                color="white"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "#ED73CF",
                                                }}
                                                onClick={() =>
                                                    handleNavigation("consult")
                                                }
                                            >
                                                Consult
                                            </ChakraLink>
                                            <ChakraLink
                                                color="white"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "#ED73CF",
                                                }}
                                                onClick={() =>
                                                    handleNavigation("team")
                                                }
                                            >
                                                Team
                                            </ChakraLink>
                                        </>
                                    )}
                                    {session?.user?.isMember && (
                                        <Menu>
                                            <MenuButton
                                                as={ChakraLink}
                                                color="white"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "#ED73CF",
                                                }}
                                                rightIcon={<ChevronDownIcon />}
                                                onClick={() => onOpen()}
                                            >
                                                Dashboard
                                            </MenuButton>
                                            <MenuList bg="black">
                                                <MenuItem
                                                    bg="black"
                                                    onClick={() =>
                                                        router.push(
                                                            "/dashboard/profile",
                                                        )
                                                    }
                                                    _hover={{
                                                        textDecoration: "none",
                                                        color: "#ED73CF",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            cursor: "pointer",
                                                            gap: "10px",
                                                        }}
                                                    >
                                                        {session && (
                                                            <FaUserCircle
                                                                fontSize={
                                                                    "1.5rem"
                                                                }
                                                            />
                                                        )}
                                                        Profile
                                                    </div>
                                                </MenuItem>
                                                <MenuItem
                                                    bg="black"
                                                    onClick={() =>
                                                        router.push(
                                                            "/dashboard/members",
                                                        )
                                                    }
                                                    _hover={{
                                                        textDecoration: "none",
                                                        color: "#ED73CF",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            cursor: "pointer",
                                                            gap: "10px",
                                                        }}
                                                    >
                                                        <FaUsers
                                                            fontSize={"1.5rem"}
                                                        />
                                                        Members
                                                    </div>
                                                </MenuItem>
                                                <MenuItem
                                                    bg="black"
                                                    _hover={{
                                                        textDecoration: "none",
                                                        color: "#ED73CF",
                                                    }}
                                                    onClick={() =>
                                                        router.push(
                                                            "/dashboard/leaderboards",
                                                        )
                                                    }
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            cursor: "pointer",
                                                            gap: "10px",
                                                        }}
                                                    >
                                                        <FaTrophy
                                                            fontSize={"1.5rem"}
                                                        />
                                                        Leaderboards
                                                    </div>
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    )}
                                    <Box
                                        display="flex"
                                        justifyContent="flex-end"
                                        ml="10px"
                                    >
                                        <ConnectWalletWrapper />
                                    </Box>
                                </VStack>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </>
            ) : (
                <HStack color="white" justifyContent="center">
                    {!isDashboardRoute && (
                        <>
                            <ChakraLink
                                color="white"
                                _hover={{
                                    textDecoration: "none",
                                    color: "#ED73CF",
                                }}
                                onClick={() => handleNavigation("apply")}
                            >
                                Apply
                            </ChakraLink>
                            <ChakraLink
                                color="white"
                                _hover={{
                                    textDecoration: "none",
                                    color: "#ED73CF",
                                }}
                                onClick={() => handleNavigation("about")}
                            >
                                About
                            </ChakraLink>

                            <ChakraLink
                                _hover={{
                                    textDecoration: "none",
                                    color: "#ED73CF",
                                }}
                                onClick={() => handleNavigation("events")}
                            >
                                Events
                            </ChakraLink>
                            <ChakraLink
                                _hover={{
                                    textDecoration: "none",
                                    color: "#ED73CF",
                                }}
                                onClick={() => handleNavigation("consult")}
                            >
                                Consult
                            </ChakraLink>
                            <ChakraLink
                                _hover={{
                                    textDecoration: "none",
                                    color: "#ED73CF",
                                }}
                                onClick={() => handleNavigation("team")}
                            >
                                Team
                            </ChakraLink>
                        </>
                    )}
                    {session?.user?.isMember && (
                        <Menu>
                            <MenuButton
                                as={ChakraLink}
                                color="white"
                                _hover={{
                                    textDecoration: "none",
                                    color: "#ED73CF",
                                }}
                                rightIcon={<ChevronDownIcon />}
                                onClick={() => onOpen()}
                            >
                                Dashboard
                            </MenuButton>
                            <MenuList bg="black">
                                <MenuItem
                                    bg="black"
                                    onClick={() =>
                                        router.push("/dashboard/profile")
                                    }
                                    _hover={{
                                        textDecoration: "none",
                                        color: "#ED73CF",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer",
                                            gap: "10px",
                                        }}
                                    >
                                        {session && (
                                            <FaUserCircle fontSize={"1.5rem"} />
                                        )}
                                        Profile
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    bg="black"
                                    onClick={() =>
                                        router.push("/dashboard/members")
                                    }
                                    _hover={{
                                        textDecoration: "none",
                                        color: "#ED73CF",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer",
                                            gap: "10px",
                                        }}
                                    >
                                        <FaUsers fontSize={"1.5rem"} />
                                        Members
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    bg="black"
                                    _hover={{
                                        textDecoration: "none",
                                        color: "#ED73CF",
                                    }}
                                    onClick={() =>
                                        router.push("/dashboard/leaderboards")
                                    }
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer",
                                            gap: "10px",
                                        }}
                                    >
                                        <FaTrophy fontSize={"1.5rem"} />
                                        Leaderboards
                                    </div>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                    <Box display="flex" justifyContent="flex-end" ml="10px">
                        <ConnectWalletWrapper />
                    </Box>
                </HStack>
            )}
        </Flex>
    );
};
