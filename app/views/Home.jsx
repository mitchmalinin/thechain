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
        <div className="flex flex-col justify-between items-center mx-auto">
            <div className="flex flex-col items-center justify-evenly p-8 bg-gradient-to-tr from-[#53cef1] via-[#ff68d3] to-[#f2eff1] text-white relative overflow-hidden w-full min-h-[80vh]">
                <div className="flex flex-col items-start rounded-2xl text-center lg:p-16 p-8 z-20 max-w-[100rem]">
                    <div className="flex flex-col items-center w-full gap-2">
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
                            <button className="bg-transparent transition-opacity py-1 px-4 font-semibold rounded-lg text-white border-2 border-white text-lg lg:text-xl hover:opacity-60">
                                Apply to Join
                            </button>
                        </Link>
                    </div>
                </div>
                <Image
                    id="chain-image"
                    src={chainPic}
                    alt="the chain"
                    className="absolute z-50 right-[-880px] top-32"
                    width={1500}
                    height={1500}
                />
            </div>

            <div className="py-8 flex justify-center items-center">
                <Image
                    src={GroupPic}
                    alt="the chain december"
                    height="100%"
                    width="100%"
                />
            </div>

            <About />

            <div className="flex flex-col items-center w-full">
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
