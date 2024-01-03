"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useAccount, useDisconnect } from "wagmi";

export const Header = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        about: false,
        dashboard: false,
    });
    const { data: session } = useSession();

    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (
            address &&
            session &&
            address.toLocaleLowerCase() !== session.user.id
        ) {
            disconnect();
            signOut({ callbackUrl: window.location.origin });
        } else if (!address && session) {
            signOut({ callbackUrl: window.location.origin });
        }
    }, [address, disconnect, session]);

    const handleNavigation = (section) => {
        router.replace(`/#${section}`);
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="flex flex-row items-center justify-between w-full p-2 bg-black">
            <div className="p-2">
                <Image
                    src="/the-chain-logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="cursor-pointer"
                    onClick={() => handleNavigation("home")}
                />
            </div>

            <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <IoMdMenu className="w-6 h-6 text-white" />
            </button>

            <div
                ref={dropdownRef}
                className={`${
                    isMobileMenuOpen
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                } absolute left-0 top-0 z-10 flex w-full flex-col items-start gap-1 bg-black px-6 py-4 text-white transition-transform duration-300 ease-out`}
                style={{
                    transformOrigin: "top right",
                }}
            >
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("apply")}
                >
                    Apply
                </span>
                <div
                    onMouseEnter={() =>
                        setIsDropdownOpen({ dashboard: false, about: true })
                    }
                    className="relative"
                >
                    <span className="transition-colors hover:text-[#ED73CF]">
                        About
                    </span>
                    {isDropdownOpen.about && (
                        <div
                            onMouseLeave={() =>
                                setIsDropdownOpen({
                                    ...isDropdownOpen,
                                    about: false,
                                })
                            }
                            className="absolute left-0 z-10 w-48 mt-2 text-white transition-colors bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                            <div
                                className="py-1 transition-colors"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("about")}
                                >
                                    Origin
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("events")}
                                >
                                    Events
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("consult")}
                                >
                                    Consult
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("team")}
                                >
                                    Team
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                {session?.user?.isMember && (
                    <div
                        onMouseEnter={() =>
                            setIsDropdownOpen({
                                about: false,
                                dashboard: true,
                            })
                        }
                        className="relative"
                    >
                        <span className="transition-colors hover:text-[#ED73CF]">
                            Dashboard
                        </span>
                        {isDropdownOpen.dashboard && (
                            <div
                                onMouseLeave={() =>
                                    setIsDropdownOpen({
                                        ...isDropdownOpen,
                                        dashboard: false,
                                    })
                                }
                                className="absolute left-0 z-10 w-48 mt-2 text-white transition-colors bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                            >
                                <div
                                    className="py-1 transition-colors"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <Link
                                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                        role="menuitem"
                                        href="/dashboard/miami-index"
                                    >
                                        Miami Index
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF] "
                                        role="menuitem"
                                        href="/dashboard/leaderboard"
                                    >
                                        Leaderboard
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950  hover:text-[#ED73CF]"
                                        role="menuitem"
                                        href="/dashboard/profile"
                                    >
                                        Profile
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="items-center hidden gap-2 text-white cursor-pointer lg:flex">
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("apply")}
                >
                    Apply
                </span>
                <div
                    onMouseEnter={() =>
                        setIsDropdownOpen({ dashboard: false, about: true })
                    }
                    className="relative"
                >
                    <span className="transition-colors hover:text-[#ED73CF]">
                        About
                    </span>
                    {isDropdownOpen.about && (
                        <div
                            onMouseLeave={() =>
                                setIsDropdownOpen({
                                    about: false,
                                })
                            }
                            className="absolute left-0 z-10 w-48 mt-2 text-white transition-colors bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                            <div
                                className="py-1 transition-colors"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("about")}
                                >
                                    Origin
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("events")}
                                >
                                    Events
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("consult")}
                                >
                                    Consult
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                    onClick={() => handleNavigation("team")}
                                >
                                    Team
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                {session?.user?.isMember && (
                    <div
                        onMouseEnter={() =>
                            setIsDropdownOpen({
                                about: false,
                                dashboard: true,
                            })
                        }
                        className="relative"
                    >
                        <span className="transition-colors hover:text-[#ED73CF]">
                            Dashboard
                        </span>
                        {isDropdownOpen.dashboard && (
                            <div
                                onMouseLeave={() =>
                                    setIsDropdownOpen({
                                        ...isDropdownOpen,
                                        dashboard: false,
                                    })
                                }
                                className="absolute left-0 z-10 w-48 mt-2 text-white transition-colors bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                            >
                                <div
                                    className="py-1 "
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <Link
                                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF]"
                                        role="menuitem"
                                        href="/dashboard/miami-index"
                                    >
                                        Miami Index
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950 hover:text-[#ED73CF] "
                                        role="menuitem"
                                        href="/dashboard/leaderboard"
                                    >
                                        Leaderboard
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-950  hover:text-[#ED73CF]"
                                        role="menuitem"
                                        href="/dashboard/profile"
                                    >
                                        Profile
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div className="ml-2.5 flex justify-end">
                    <ConnectButton chainStatus="none" showBalance={false} />
                </div>
            </div>
        </div>
    );
};
