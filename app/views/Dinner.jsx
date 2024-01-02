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
                className="mt-16 flex w-full flex-col items-center bg-[rgba(255,173,226,0.67)] p-8 lg:p-16"
                style={{ backdropFilter: "blur(9.1px)" }}
            >
                <h2 className="mb-4 self-center text-lg font-bold text-[#ff62c7] lg:text-2xl">
                    Apply to Join Here
                </h2>

                <NoSSRJoinForm />
            </div>

            <div
                id="events"
                className="flex min-h-[300px] w-full justify-center bg-black"
            >
                <div className="grid w-full grid-cols-1 p-8 lg:p-16">
                    <h2 className="mb-4 text-lg font-bold text-[#ff62c7] lg:text-2xl">
                        Upcoming Events
                    </h2>
                    {events.length > 0 ? (
                        events.map((record, index) => (
                            <div
                                key={index}
                                className="flex w-full max-w-[100rem] flex-col-reverse items-center justify-between rounded-lg bg-black py-4 text-white lg:flex-row"
                            >
                                <div className="flex flex-col">
                                    <p className="mb-2.5 text-sm uppercase text-[rgba(255,173,226,0.67)]">
                                        {new Date(
                                            record.event.start_at,
                                        ).toString()}
                                    </p>
                                    <h3 className="max-w-[80%] text-lg lg:text-2xl">
                                        {record.event.name}
                                    </h3>
                                    <button
                                        className="w-25 mt-5 rounded-md bg-gray-100 p-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-300 lg:w-52 lg:text-base"
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
                                    className="mb-4 w-[200px] lg:mb-0 lg:w-[500px]"
                                    src={record.event.cover_url}
                                    alt="event cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="mb-8 text-center text-sm uppercase text-white">
                            No events to show now
                        </p>
                    )}
                </div>
            </div>

            <div className="relative max-w-[100rem] overflow-hidden px-12 pt-16 sm:px-8 sm:pt-8">
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <div className="overflow-hidden rounded-3xl">
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
                    <div className="overflow-hidden rounded-3xl">
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
                    <div className="overflow-hidden rounded-3xl">
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
                    <div className="overflow-hidden rounded-3xl">
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
                    <div className="overflow-hidden rounded-3xl">
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
                    <div className="overflow-hidden rounded-3xl">
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
                className="absolute left-[-680px] -z-10"
                width={1500}
                height={1500}
            />
        </>
    );
};
