"use client";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chainPic from "../../public/chain-color.webp";
import GroupPic from "../../public/chain_group_pic.png";
import { About } from "./About";
import { Consult } from "./Consult";
import { Dinner } from "./Dinner";
import { Offering } from "./Offering";
import { Team } from "./Team";

export default function Home() {
    return (
        <div className="mx-auto flex flex-col items-center justify-between">
            <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-evenly overflow-hidden bg-gradient-to-tr from-[#53cef1] via-[#ff68d3] to-[#f2eff1] p-8 text-white">
                <div className="z-[1] flex max-w-[100rem] flex-col items-start rounded-2xl p-8 text-center lg:p-16">
                    <div className="flex w-full flex-col items-center gap-2">
                        <h1 className="text-6xl font-bold text-gray-900">
                            Miami’s Web3 Plug.
                        </h1>
                        <p className="mt-4 text-lg lg:text-2xl">
                            <span>A community for crypto</span>{" "}
                            <strong className="text-gray-900">
                                extremists
                            </strong>
                        </p>
                        <Link href="#apply" className="mt-20 lg:mt-40">
                            <button className="rounded-lg border-2 border-white bg-transparent px-4 py-1 text-lg font-semibold text-white transition-opacity hover:opacity-60 lg:text-xl">
                                Apply to Join
                            </button>
                        </Link>
                    </div>
                </div>
                <Image
                    id="chain-image"
                    src={chainPic}
                    alt="the chain"
                    className="absolute right-[-880px] top-32 z-50"
                    width={1500}
                    height={1500}
                />
            </div>

            <div className="flex items-center justify-center py-8">
                <Image
                    src={GroupPic}
                    alt="the chain december"
                    height="100%"
                    width="100%"
                />
            </div>

            <About />

            <div className="flex w-full flex-col items-center">
                <Offering />
                <Dinner />
                <Consult />
            </div>

            <Team />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover={false}
                theme="light"
            />
        </div>
    );
}
