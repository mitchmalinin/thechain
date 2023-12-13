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
        if (
            address &&
            session &&
            address.toLocaleLowerCase() !== session.user.id
        ) {
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
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#apply"
                >
                    Apply
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#about"
                >
                    About
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#events"
                >
                    Events
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#consult"
                >
                    Consult
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#team"
                >
                    Team
                </Link>
                {session?.user?.isMember && (
                    <Link
                        className="transition-colors hover:text-[#ED73CF]"
                        href="/dashboard/members"
                    >
                        Members
                    </Link>
                )}
            </div>

            <div className="hidden items-center gap-2 text-white lg:flex">
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#apply"
                >
                    Apply
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#about"
                >
                    About
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#events"
                >
                    Events
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#consult"
                >
                    Consult
                </Link>
                <Link
                    className="transition-colors hover:text-[#ED73CF]"
                    href="#team"
                >
                    Team
                </Link>
                {session?.user?.isMember && (
                    <Link
                        className="transition-colors hover:text-[#ED73CF]"
                        href="/dashboard/members"
                    >
                        Members
                    </Link>
                )}
                <div className="ml-2.5 flex justify-end">
                    <ConnectButton chainStatus="none" showBalance={false} />
                </div>
            </div>
        </div>
    );
};
