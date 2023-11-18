"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const ConnectWalletWrapper = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleProfileClick = () => {
        router.push("/dashboard/profile");
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "1rem",
                    cursor: "pointer",
                }}
                onClick={handleProfileClick}
            >
                {session && <FaUserCircle fontSize={"1.5rem"} />}
            </div>
            <ConnectButton chainStatus="none" showBalance={false} />
        </div>
    );
};

export default ConnectWalletWrapper;
