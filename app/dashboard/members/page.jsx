"use client";
import Link from "next/link";
import { useEffect } from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import useSWR from "swr";

export default function Members() {
    const fetcher = (url) => fetch(url).then((r) => r.json());

    const {
        data: members,
        error,
        isLoading,
    } = useSWR("/api/community", fetcher);

    useEffect(() => {
        console.log(members);
    }, [members]);

    if (isLoading)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );

    if (!members)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div>Must be Chain Member to view</div>
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div>Failed to load members</div>
            </div>
        );

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-8 min-h-screen">
            {members.map((member) => (
                <div
                    key={member.ID}
                    className="p-5 shadow-md border rounded-lg space-y-3 flex flex-col justify-between"
                >
                    <div className="w-full overflow-hidden bg-gray-200 flex items-center justify-center h-40">
                        {/* Placeholder for member image */}
                        <span className="text-gray-500 text-2xl">Photo</span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                        <div>
                            <h3 className="text-lg font-black">
                                {member.name}
                            </h3>
                            <p className="text-base">{member.occupation}</p>
                        </div>
                        <p className="text-sm">{member.contribution}</p>
                    </div>

                    <div className="flex flex-row justify-center text-4xl">
                        {member.twitter && (
                            <Link
                                href={`https://twitter.com/${member.twitter}`}
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                <AiFillTwitterSquare />
                            </Link>
                        )}
                        {member.linkedin && (
                            <Link
                                href={member.linkedin}
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                <AiFillLinkedin />
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
