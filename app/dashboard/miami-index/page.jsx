"use client";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { ImSpinner8 } from "react-icons/im";
import useSWR from "swr";

export default function Members() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const { data: session } = useSession();
    const [adminViewOn, setAdminViewOn] = useState(false);

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
            <div className="flex items-center justify-center min-h-screen">
                <ImSpinner8 size={64} className="animate-spin text-[#ff62c7]" />
            </div>
        );

    if (!members)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div>Must be Chain Member to Access</div>
            </div>
        );

    if (error)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div>Failed to load members</div>
            </div>
        );

    const toggleMemberStatus = async (member) => {
        if (member.is_accepted) {
            console.log("already");
            return;
        }

        const user = await (
            await fetch(`/api/profile?wallet_address=${member.wallet_address}`)
        ).json();

        if (user) {
            const sendEmailResponse = await fetch(
                "/api/send-acceptance-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: user.email,
                        name: user.name,
                    }),
                },
            );

            if (sendEmailResponse.ok) {
                console.log("working");
            } else {
                throw new Error("Failed to send acceptance email");
            }
        }
    };

    return (
        <div className="grid content-start min-h-screen px-8 pt-4">
            <div className="flex justify-between gap-4 pb-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        className="px-4 border-2 border-gray-300 rounded"
                    />
                    <select
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 bg-gray-300 rounded"
                        value={filter}
                    >
                        <option value="">All</option>
                        <option value="accepted">Is member</option>
                    </select>
                </div>

                {session.user.isAdmin && (
                    <label className="flex items-center gap-1 switch">
                        <span>Admin View</span>
                        <input
                            type="checkbox"
                            onChange={() => setAdminViewOn((prev) => !prev)}
                        />
                    </label>
                )}
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                {members.map((member) => (
                    <div
                        key={member.ID}
                        className="flex flex-col justify-between p-5 space-y-3 border rounded-lg shadow-md"
                    >
                        {adminViewOn && (
                            <button
                                onClick={() => toggleMemberStatus(member)}
                                className={`${
                                    member.is_accepted
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                } rounded p-2 text-white`}
                            >
                                {member.is_accepted
                                    ? "Accepted"
                                    : "Not Accepted"}
                            </button>
                        )}
                        <div className="flex items-center justify-center w-full h-40 overflow-hidden bg-gray-200">
                            {/* Placeholder for member image */}
                            <span className="text-2xl text-gray-500">
                                Photo
                            </span>
                        </div>
                        <div className="flex flex-col flex-grow gap-4">
                            <div>
                                <h3 className="text-lg font-black">
                                    {member.name}
                                </h3>
                                <p className="text-base">{member.occupation}</p>
                            </div>
                            <p className="text-sm break-words">
                                {member.contribution}
                            </p>
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
