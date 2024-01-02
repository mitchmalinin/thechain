"use client";

import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
} from "react-icons/ai";

import Image from "next/image";

import Link from "next/link";
import Anna from "../../public/anna.png";
import Ahsley from "../../public/ashley.jpeg";
import Kyle from "../../public/kyle.jpg";
import Mitch from "../../public/mitch.jpeg";
import Monica from "../../public/monica.png";
import Neha from "../../public/neha.jpeg";

const team = [
    {
        name: "Anna Gandrabura",
        role: "Founder - English For IT",
        image: Anna,
        twitter: "https://twitter.com/anna_gandrabura",
        linkedin: "https://www.linkedin.com/in/annagandrabura/",
        instagram: "https://www.instagram.com/annglish/",
    },
    {
        name: "Monica Rojas",
        role: "Founder - The Chain",
        image: Monica,
        twitter: "https://twitter.com/LaMoniRojas",
        linkedin: "https://www.linkedin.com/in/monica-rojas24/",
        instagram: "https://www.instagram.com/la_monirojas/",
    },
    {
        name: "Mitch Malinin",
        role: "Frontend Web Alchemist",
        image: Mitch,
        twitter: "https://twitter.com/0xMrWzrd",
        linkedin: "https://www.linkedin.com/in/mitchmalinin/",
    },
    {
        name: "Kyle Sonlin",
        role: "Entrepreneur, Investor, Bestselling Author",
        image: Kyle,
        twitter: "https://twitter.com/KyleSonlin",
        linkedin: "https://www.linkedin.com/in/kylesonlin/",
    },
    {
        name: "Neha Jwala",
        role: "Co-Founder, Marketer - Nifty Bridge",
        image: Neha,
        twitter: "https://twitter.com/nehaisfunny",
        linkedin: "https://www.linkedin.com/in/neha-jwala/",
    },
    {
        name: "Ashley Caines",
        role: "Web3 Educator",
        image: Ahsley,
        twitter: "https://twitter.com/ashmcai",
        linkedin: "https://www.linkedin.com/in/ashleycaines/",
    },
];

export const Team = () => {
    return (
        <div className="flex flex-col">
            <h2 className="mt-4 p-4 text-center text-lg font-bold text-black lg:text-2xl">
                Meet the Team
            </h2>
            <div className="flex flex-col items-center px-8 py-8 lg:px-20">
                <div
                    className="grid grid-cols-1 gap-8 lg:grid-cols-3"
                    id="team"
                >
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flex min-h-[150px] flex-col items-center justify-center rounded-lg p-4 text-black"
                        >
                            <div className="mb-4 h-24 w-24 overflow-hidden rounded-full grayscale lg:h-40 lg:w-40">
                                <Image
                                    src={member.image}
                                    alt={`${member.name} - ${member.role}`}
                                    fill={true}
                                />
                            </div>
                            <p className="text-lg font-bold lg:text-xl">
                                {member.name}
                            </p>
                            <p className="mt-2 text-center text-xs opacity-70">
                                {member.role}
                            </p>
                            <div className="mt-4 flex gap-2">
                                {member.twitter && (
                                    <Link
                                        href={member.twitter}
                                        className="text-2xl"
                                        target="_blank"
                                    >
                                        <AiFillTwitterSquare />
                                    </Link>
                                )}
                                {member.linkedin && (
                                    <Link
                                        href={member.linkedin}
                                        className="text-2xl"
                                        target="_blank"
                                    >
                                        <AiFillLinkedin />
                                    </Link>
                                )}
                                {member.instagram && (
                                    <Link
                                        href={member.instagram}
                                        className="text-2xl"
                                        target="_blank"
                                    >
                                        <AiFillInstagram />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
