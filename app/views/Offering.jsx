"use client";

import Link from "next/link";
import { offerings } from "../utils/constants";

export const Offering = () => {
    return (
        <div className="flex flex-col items-center mt-24">
            <h2 className="text-lg lg:text-2xl mb-8 text-[#ff62c7] font-bold">
                Benefits
            </h2>
            <div
                id="offering"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 lg:mt-0 px-8 sm:px-16 max-w-[100rem]"
            >
                {offerings.map((offer, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-start min-h-[150px] p-6 bg-[#000000ed] text-white rounded-lg"
                    >
                        <img
                            src={offer.icon}
                            alt="icon"
                            className="w-10 mb-4 filter invert"
                        />
                        <h3 className="text-base font-bold mb-0 min-h-[45px] text-center text-[#ff62c7]">
                            {offer.title}
                        </h3>
                        <p className="text-center text-sm mt-1 opacity-80">
                            {offer.content}
                        </p>
                        {index === 3 && (
                            <Link
                                href="/#consult"
                                className="mt-4 text-sm underline"
                            >
                                Learn more
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 bg-[#000000ed] px-8 p-10 text-white max-w-[100rem]">
                {[
                    { metric: "400k+", description: "social impressions" },
                    { metric: "1000+", description: "connections made" },
                    { metric: "17+", description: "past events" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="text-center gap-3 flex flex-col"
                    >
                        <p className="text-5xl font-bold text-[#42b5ff]">
                            {item.metric}
                        </p>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
