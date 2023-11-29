"use client";

import { Tweet } from "react-tweet";

export const About = () => {
    console.log("test");
    return (
        <>
            <div
                id="about"
                className="z-10 mt-4 flex max-w-[100rem] flex-col items-start p-4 lg:items-center lg:p-16"
            >
                <h2 className="mb-4 text-lg font-bold text-[#ff62c7] lg:text-2xl">
                    About Us
                </h2>
                <p className="mb-2 w-full text-base leading-8 lg:w-2/3">
                    Welcome to The Chain Miami, we are a curated community and
                    social club for the top web3 executives, builders, and
                    enthusiasts in Miami. Through bear markets and bull, we
                    bring like-minded individuals together, forging genuine
                    friendships and expanding our IRL web3 networks.
                </p>
                <p className="w-full text-base leading-8 lg:w-2/3">
                    At The Chain Miami, we believe in the power of intentional
                    community building. We’re passed the days of generic happy
                    hours and superficial networking. We curate intentional
                    experiences that leave you energized and inspired. We’re
                    here to foster the growth of Miami’s web3 community.
                </p>
            </div>
            <div className="grid max-w-[100rem] grid-cols-1 place-items-center gap-5 px-16 py-8 lg:grid-cols-2">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="mb-4 text-lg font-bold text-[#ff62c7] lg:text-2xl">
                        The Chain's Origin Story
                    </h2>
                    <p className="text-base opacity-80">
                        In the midst of the bull run of 2022, Monica discovered
                        a remarkable truth about Miami – a city with people
                        passionate about web3, yet no place for them to connect.
                    </p>
                    <p className="text-base opacity-80">
                        With a simple tweet to gauge the presence of the local
                        web3 community, Monica's expectations were surpassed
                        revealing an undeniable need for connection and IRL
                        community for web3 builders in Miami.
                    </p>
                    <p className="text-base opacity-80">
                        In June 2022, The Chain was born, a community for local
                        builders and forward-thinkers in the web3 space to
                        connect through monthly dinners and keep the local web3
                        community up-to-date by launching a texting community
                        that shares upcoming events, and a celebration of
                        community wins.
                    </p>
                    <p className="text-base opacity-80">
                        In the past year, we've hosted 12 dinners & experiences,
                        uniting 500+ people. Now, as we enter our growth stage,
                        we're more intentional than ever in curating our
                        community.
                    </p>
                </div>
                <Tweet id="1524019928273199111" />
            </div>
        </>
    );
};
