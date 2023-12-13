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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        <div className="flex w-full flex-row items-center justify-between bg-black p-2">
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
                <IoMdMenu className="h-6 w-6 text-white" />
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
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("about")}
                >
                    About
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("events")}
                >
                    Events
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("consult")}
                >
                    Consult
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("team")}
                >
                    Team
                </span>
                {session?.user?.isMember && (
                    <div
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        className="relative"
                    >
                        <span className="transition-colors hover:text-[#ED73CF]">
                            Dashboard
                        </span>
                        {isDropdownOpen && (
                            <div
                                onMouseLeave={() => setIsDropdownOpen(false)}
                                className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 transition-colors"
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

            <div className="hidden cursor-pointer items-center gap-2 text-white lg:flex">
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("apply")}
                >
                    Apply
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("about")}
                >
                    About
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("events")}
                >
                    Events
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("consult")}
                >
                    Consult
                </span>
                <span
                    className="transition-colors hover:text-[#ED73CF]"
                    onClick={() => handleNavigation("team")}
                >
                    Team
                </span>
                {session?.user?.isMember && (
                    <div
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        className="relative"
                    >
                        <span className="transition-colors hover:text-[#ED73CF]">
                            Dashboard
                        </span>
                        {isDropdownOpen && (
                            <div
                                onMouseLeave={() => setIsDropdownOpen(false)}
                                className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 transition-colors"
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
