"use client";

import dynamic from "next/dynamic";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineZoomInMap } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";

import { consults } from "../utils/constants";

const NoSSRConsultForm = dynamic(() => import("../forms/ConsultForm"), {
    ssr: false,
});

export const Consult = () => {
    return (
        <div
            id="consult"
            className="flex flex-col items-center bg-[#ccecff] lg:p-16 p-8"
        >
            <div className="max-w-[100rem] flex flex-col items-start">
                <h2 className="text-lg lg:text-2xl mb-4 text-[#42b5ff] font-bold">
                    Consulting
                </h2>
                <div className="flex flex-col items-start gap-2">
                    <p className="opacity-80 text-sm lg:text-base">
                        At The Chain Miami, we understand that every company or
                        project aspires to have a thriving community, but not
                        everyone possesses the time, expertise, or patience to
                        build it from scratch. In addition to running an
                        exceptional in-person community in Miami, our team at
                        The Chain Miami specializes in helping businesses
                        achieve financial success through a community-driven
                        approach.
                    </p>
                    <NoSSRConsultForm />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mt-4 mt-0">
                {consults.map((offer, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-start min-h-[150px] p-8 bg-black rounded-lg"
                    >
                        <div className="text-black text-4xl mb-4">
                            {index === 0 && (
                                <BsFillCalendarEventFill className="text-white" />
                            )}
                            {index === 1 && (
                                <RiCommunityFill className="text-white" />
                            )}
                            {index === 2 && (
                                <FaBookOpen className="text-white" />
                            )}
                            {index === 3 && (
                                <MdOutlineZoomInMap className="text-white" />
                            )}
                        </div>

                        <p className="text-[#42b5ff] text-base font-bold mb-4">
                            {offer.title}
                        </p>
                        <p className="text-white text-center text-sm mt-2 opacity-50">
                            {offer.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
