"use client";
import { useDebounce } from "@/app/hooks/useDebounce";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import useSWR from "swr";

export default function Members() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const {
        data: members,
        error,
        isLoading,
    } = useSWR(
        `/api/community?search=${debouncedSearchTerm}&filter=${filter}`,
        fetcher,
    );

    useEffect(() => {
        if (debouncedSearchTerm) {
            setSearchTerm(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    if (isLoading)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
            </div>
        );

    if (!members)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div>Must be Chain Member to view</div>
            </div>
        );

    if (error)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div>Failed to load members</div>
            </div>
        );

    return (
        <div className="grid min-h-screen content-start px-8 pt-4">
            <div className="flex gap-4 pb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className="rounded border-2 border-gray-300 px-4"
                />
                <select
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded bg-gray-300 p-2"
                >
                    <option value="">All</option>
                    <option value="accepted">Is member</option>
                </select>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                {members.map((member) => (
                    <div
                        key={member.ID}
                        className="flex flex-col justify-between space-y-3 rounded-lg border p-5 shadow-md"
                    >
                        <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-gray-200">
                            {/* Placeholder for member image */}
                            <span className="text-2xl text-gray-500">
                                Photo
                            </span>
                        </div>
                        <div className="flex flex-grow flex-col gap-4">
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
        </div>
    );
}
