import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div id="footer-background" />
            <div className="flex w-full flex-col-reverse items-start justify-between bg-black px-8 py-4 md:flex-row lg:px-20 lg:py-8">
                <div className="flex flex-col items-start gap-6">
                    <h2 className="text-lg font-bold text-[#ff62c7] sm:mt-6 lg:mb-3 lg:mt-0 lg:text-2xl">
                        The Chain
                    </h2>
                    <div className="flex gap-2 text-2xl text-white">
                        <Link
                            href="https://twitter.com/thechain_miami"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href="https://www.instagram.com/thechain_miami/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 lg:gap-20">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-base font-bold text-blue-400 lg:text-lg">
                            For Community
                        </h3>
                        <Link
                            href="/#apply"
                            className="cursor-pointer text-sm text-white opacity-80 lg:text-base"
                        >
                            Join Us
                        </Link>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-base font-bold text-blue-400 lg:text-lg">
                            For Clients
                        </h3>
                        <Link
                            href="/#consult"
                            className="cursor-pointer text-sm text-white opacity-80 lg:text-base"
                        >
                            Hire Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-black px-8 text-white lg:px-20">
                <p className="my-2.5 text-center text-xs">
                    the chain miami © 2023
                </p>
            </div>
        </footer>
    );
};
