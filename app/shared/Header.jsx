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
    const { data: session } = useSession();

    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (address && session && address !== session.user.id) {
            disconnect();
            signOut({ callbackUrl: window.location.origin });
        }
    }, [address, disconnect, session]);

    const handleNavigation = (section) => {
        router.push(`/#${section}`);
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
        <div className="flex w-full flex-row items-center justify-between p-2 bg-black">
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
                } absolute top-0 left-0 z-10 gap-1 w-full flex flex-col items-start bg-black text-white py-4 px-6 transition-transform duration-300 ease-out`}
                style={{
                    transformOrigin: "top right",
                }}
            >
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#apply"
                >
                    Apply
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#about"
                >
                    About
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#events"
                >
                    Events
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#consult"
                >
                    Consult
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#team"
                >
                    Team
                </Link>
                {session?.user?.isMember && (
                    <Link
                        className="hover:text-[#ED73CF] transition-colors"
                        href="/dashboard/members"
                    >
                        Members
                    </Link>
                )}
            </div>

            <div className="hidden lg:flex text-white gap-2 items-center">
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#apply"
                >
                    Apply
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#about"
                >
                    About
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#events"
                >
                    Events
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#consult"
                >
                    Consult
                </Link>
                <Link
                    className="hover:text-[#ED73CF] transition-colors"
                    href="#team"
                >
                    Team
                </Link>
                {session?.user?.isMember && (
                    <Link
                        className="hover:text-[#ED73CF] transition-colors"
                        href="/dashboard/members"
                    >
                        Members
                    </Link>
                )}
                <div className="flex justify-end ml-2.5">
                    <ConnectButton chainStatus="none" showBalance={false} />
                </div>
            </div>
        </div>
    );
};
