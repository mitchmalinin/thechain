import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div id="footer-background" />
            <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between px-8 py-4 lg:px-20 lg:py-8 bg-black">
                <div className="flex flex-col items-start gap-6">
                    <h2 className="font-bold lg:mb-3 text-lg lg:text-2xl lg:mt-0 sm:mt-6 text-[#ff62c7]">
                        The Chain
                    </h2>
                    <div className="flex text-white text-2xl gap-2">
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

                <div className="grid grid-cols-2 gap-8 lg:gap-20 mt-8 md:mt-0">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-base lg:text-lg text-blue-400 font-bold">
                            For Community
                        </h3>
                        <Link
                            href="/#apply"
                            className="text-sm lg:text-base text-white cursor-pointer opacity-80"
                        >
                            Join Us
                        </Link>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-base lg:text-lg text-blue-400 font-bold">
                            For Clients
                        </h3>
                        <Link
                            href="/#consult"
                            className="text-sm lg:text-base text-white cursor-pointer opacity-80"
                        >
                            Hire Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-8 lg:px-20">
                <p className="text-xs my-2.5 text-center">
                    the chain miami © 2023
                </p>
            </div>
        </footer>
    );
};
