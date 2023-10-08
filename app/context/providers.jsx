"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit"
import { EthereumClient, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { SessionProvider } from "next-auth/react"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { gnosis, goerli, mainnet, sepolia } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { WALLETCONNECT_PROJECT_ID } from "../config"

const projectId = WALLETCONNECT_PROJECT_ID

const chains = [gnosis, mainnet, goerli, sepolia]
const { publicClient } = configureChains(chains, [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export function Providers({ children, ...props }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <SessionProvider session={props.session}>
          <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </CacheProvider>{" "}
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
