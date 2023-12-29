"use client";

import Link from "next/link";
import { offerings } from "../utils/constants";

export const Offering = () => {
    return (
        <div className="mt-24 flex flex-col items-center">
            <h2 className="mb-8 text-lg font-bold text-[#ff62c7] lg:text-2xl">
                Benefits
            </h2>
            <div
                id="offering"
                className="mt-4 grid max-w-[100rem] grid-cols-1 gap-5 px-8 sm:px-16 md:grid-cols-2 lg:mt-0 lg:grid-cols-4"
            >
                {offerings.map((offer, index) => (
                    <div
                        key={index}
                        className="flex min-h-[150px] flex-col items-center justify-start rounded-lg bg-[#000000ed] p-6 text-white"
                    >
                        <img
                            src={offer.icon}
                            alt="icon"
                            className="mb-4 w-10 invert filter"
                        />
                        <h3 className="mb-0 min-h-[45px] text-center text-base font-bold text-[#ff62c7]">
                            {offer.title}
                        </h3>
                        <p className="mt-1 text-center text-sm opacity-80">
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
        </div>
    );
};
