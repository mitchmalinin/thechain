"use client";

import { useSession } from "next-auth/react";
import { FaMedal, FaTrophy } from "react-icons/fa";
import { MdLooks3, MdLooksOne, MdLooksTwo } from "react-icons/md";

import useSWR from "swr";

export default function LeaderboardPage() {
    const { data: session } = useSession();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const {
        data: profile,
        error: profileError,
        isLoading: profileLoading,
    } = useSWR("/api/points?profile", fetcher);
    const {
        data: members,
        error: userError,
        isLoading: usersLoading,
    } = useSWR(`/api/points`, fetcher);

    if (!session) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-lg text-gray-700">
                    Please sign in to view the leaderboard
                </div>
            </div>
        );
    }

    if (profileError || userError) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-red-100">
                <div className="text-lg text-red-700">Error...</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-4">
                {!profile && profileLoading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="text-lg text-gray-700">
                            Loading Profile...
                        </div>
                    </div>
                ) : (
                    <div className="border-2 border-gray-500 rounded">
                        <div className="flex justify-between p-4 text-2xl text-gray-70">
                            <div className="flex items-center gap-4">
                                <FaTrophy className="text-yellow-500" />
                                {profile.name}
                            </div>
                            <div>{profile.points}</div>
                        </div>
                        <div className="flex justify-between p-4 text-2xl text-gray-700 ">
                            <div className="flex items-center gap-4">
                                <FaMedal />
                                Your Position
                            </div>
                            <div>
                                {members.findIndex(
                                    (member) => member.id === profile.id,
                                ) + 1}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid gap-1 p-4">
                {!members && usersLoading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="text-lg text-gray-700">
                            Loading leaderboard...
                        </div>
                    </div>
                ) : (
                    members.map((member, index) => (
                        <div
                            key={member.id}
                            className="flex justify-between p-4 text-lg text-gray-700 border-2 border-gray-500 rounded"
                        >
                            <div className="flex items-center gap-2">
                                {index === 0 && (
                                    <MdLooksOne className="text-2xl text-yellow-400" />
                                )}
                                {index === 1 && (
                                    <MdLooksTwo className="text-2xl text-gray-500" />
                                )}
                                {index === 2 && (
                                    <MdLooks3 className="text-2xl text-amber-800" />
                                )}
                                {member.name}
                            </div>
                            <div className="">{member.points}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
