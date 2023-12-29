"use client";

import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function LeaderboardPage() {
    const { data: session } = useSession();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const {
        data: profile,
        error: profileError,
        isLoading: profileLoading,
    } = useSWR("/api/profile", fetcher);
    const {
        data: members,
        error: userError,
        isLoading: usersLoading,
    } = useSWR(`/api/community?&filter=accepted`, fetcher);

    if (!session) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-lg text-gray-700">
                    Please sign in to view the leaderboard
                </div>
            </div>
        );
    }

    if (profileError || userError) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-red-100">
                <div className="text-lg text-red-700">Error...</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-4">
                {!profile && profileLoading ? (
                    <div className="flex min-h-screen items-center justify-center">
                        <div className="text-lg text-gray-700">
                            Loading Profile...
                        </div>
                    </div>
                ) : (
                    <div className="text-2xl text-gray-700">{profile.name}</div>
                )}
            </div>

            <div className="p-4">
                {!members && usersLoading ? (
                    <div className="flex min-h-screen items-center justify-center">
                        <div className="text-lg text-gray-700">
                            Loading leaderboard...
                        </div>
                    </div>
                ) : (
                    members.map((member) => (
                        <div key={member.id} className="text-lg text-gray-700">
                            {member.name}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
