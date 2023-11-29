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
            <h2 className="font-bold text-center mt-4 text-lg lg:text-2xl p-4 text-black">
                Meet the Team
            </h2>
            <div className="flex flex-col items-center px-8 lg:px-20 py-8">
                <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    id="team"
                >
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center min-h-[150px] p-4 rounded-lg text-black"
                        >
                            <div className="w-24 lg:w-40 h-24 lg:h-40 overflow-hidden rounded-full mb-4 grayscale">
                                <Image
                                    src={member.image}
                                    alt={`${member.name} - ${member.role}`}
                                    fill={true}
                                />
                            </div>
                            <p className="text-lg lg:text-xl font-bold">
                                {member.name}
                            </p>
                            <p className="opacity-70 text-center text-xs mt-2">
                                {member.role}
                            </p>
                            <div className="flex mt-4 gap-2">
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

