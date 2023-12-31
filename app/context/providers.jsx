"use client";
import {
    RainbowKitProvider,
    darkTheme,
    getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { gnosis, goerli, mainnet, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { WALLETCONNECT_PROJECT_ID } from "../config";

const projectId = WALLETCONNECT_PROJECT_ID;

const chains = [gnosis, mainnet, goerli, sepolia];
const { publicClient } = configureChains(chains, [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: "The Chain",
    projectId: projectId,
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

const getSiweMessageOptions = () => ({
    statement: "Sign in to The Chain",
});

export function Providers({ children, ...props }) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <SessionProvider session={props.session}>
                <RainbowKitSiweNextAuthProvider
                    getSiweMessageOptions={getSiweMessageOptions}
                >
                    <RainbowKitProvider
                        coolMode
                        chains={chains}
                        theme={darkTheme()}
                        modalSize="compact"
                    >
                        {children}
                    </RainbowKitProvider>
                </RainbowKitSiweNextAuthProvider>
            </SessionProvider>
        </WagmiConfig>
    );
}
