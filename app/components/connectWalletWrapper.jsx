"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWalletWrapper = () => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <ConnectButton chainStatus="none" showBalance={false} />
        </div>
    );
};

export default ConnectWalletWrapper;
