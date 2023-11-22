"use client";

import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import chainPic from "../../public/chain-color.webp";
import ImageOne from "../../public/dinner_club_1.png";
import ImageTwo from "../../public/dinner_club_2.png";
import ImageThree from "../../public/dinner_club_3.png";
import ImageFour from "../../public/dinner_club_4.png";
import ImageFive from "../../public/dinner_club_5.png";
import ImageSix from "../../public/dinner_club_6.png";

const NoSSRJoinForm = dynamic(() => import("../forms/JoinForm"), {
    ssr: false,
});

export const Dinner = () => {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const { data } = await axios.post("/api/events", {
            date: new Date().toISOString(),
        });

        setEvents(data.data);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
            <div
                id="apply"
                className="flex flex-col items-center mt-16 bg-[rgba(255,173,226,0.67)] lg:p-16 p-8"
                style={{ backdropFilter: "blur(9.1px)" }}
            >
                <h2 className="text-lg lg:text-2xl mb-4 text-[#ff62c7] font-bold">
                    Web3 Dinner Club
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center max-w-[100rem]">
                    <div className="flex flex-col items-start gap-6">
                        <p className="text-black text-sm lg:text-base">
                            The Chain Miami hosts a community driven dinner club
                            that invites Miami’s brightest minds in the web
                            3space to interact, connect, and learn from each
                            other. To ensure a high caliber of attendees and
                            conversations, The Chain's Dinner Club operates
                            through a selective application process.
                        </p>
                        <p className="text-left text-xs lg:w-1/2 w-full italic opacity-80">
                            To sponsor a Chain dinner or be a dinner host, ping
                            monica@thechain.miami
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        {[
                            "The first Tuesday of every month",
                            "A highly curated dinner of 15-20 web3 builders in Miami",
                            "Topics, special guests, meaningful connections",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-black text-white mb-2 py-2 px-3 border-l-2 border-white"
                            >
                                <p className="text-xs lg:text-base uppercase">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <NoSSRJoinForm />
            </div>

            <div
                id="events"
                className="bg-black min-h-[300px] w-full flex justify-center"
            >
                <div className="grid grid-cols-1 lg:p-16 p-8 w-full">
                    <h2 className="text-lg lg:text-2xl mb-4 text-[#ff62c7] font-bold">
                        Upcoming Events
                    </h2>
                    {events.length > 0 ? (
                        events.map((record, index) => (
                            <div
                                key={index}
                                className="flex lg:flex-row flex-col-reverse bg-black py-4 text-white items-center justify-between rounded-lg w-full max-w-[100rem]"
                            >
                                <div className="flex flex-col">
                                    <p className="text-sm mb-2.5 text-[rgba(255,173,226,0.67)] uppercase">
                                        {new Date(
                                            record.event.start_at,
                                        ).toString()}
                                    </p>
                                    <h3 className="text-lg lg:text-2xl max-w-[80%]">
                                        {record.event.name}
                                    </h3>
                                    <button
                                        className="lg:w-52 w-25 mt-5 lg:text-base bg-gray-100 text-gray-800 rounded-md p-2 font-semibold text-sm hover:bg-gray-300 transition-colors"
                                        onClick={() =>
                                            window
                                                .open(
                                                    record.event.url,
                                                    "_blank",
                                                )
                                                .focus()
                                        }
                                    >
                                        RSVP
                                    </button>
                                </div>
                                <Image
                                    className="lg:w-[500px] w-[200px] lg:mb-0 mb-4"
                                    src={record.event.cover_url}
                                    alt="event cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-sm mb-8 text-center text-white uppercase">
                            No events to show now
                        </p>
                    )}
                </div>
            </div>

            <div className="px-12 sm:px-8 pt-16 sm:pt-8 relative overflow-hidden max-w-[100rem]">
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <div className="rounded-3xl overflow-hidden">
                        <Zoom>
                            <Image
                                src={ImageOne}
                                alt="dinner images"
                                height="100%"
                                width="100%"
                                placeholder="blur"
                                priority
                            />
                        </Zoom>
                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <Zoom>
                            <Image
                                src={ImageThree}
                                alt="dinner images"
                                height="100%"
                                width="100%"
                                placeholder="blur"
                                priority
                            />
                        </Zoom>
                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <Zoom>
                            <Image
                                src={ImageFour}
                                alt="dinner images"
                                height="100%"
                                width="100%"
                                placeholder="blur"
                                priority
                            />
                        </Zoom>
                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <Zoom>
                            <Image
                                src={ImageFive}
                                alt="dinner images"
                                height="100%"
                                width="100%"
                                placeholder="blur"
                                priority
                            />
                        </Zoom>
                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <Zoom>
                            <Image
                                src={ImageSix}
                                alt="dinner images"
                                height="100%"
                                width="100%"
                                placeholder="blur"
                                priority
                            />
                        </Zoom>
                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <Zoom>
                            <Image
                                src={ImageTwo}
                                alt="dinner images"
                                height="100%"
                                width="100%"
                                placeholder="blur"
                                priority
                            />
                        </Zoom>
                    </div>
                </Masonry>
            </div>

            <Image
                id="chain-image"
                src={chainPic}
                alt="the chain"
                className="absolute -z-10 left-[-680px]"
                width={1500}
                height={1500}
            />
        </>
    );
};
