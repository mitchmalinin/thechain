"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit"
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth"
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
  projectId: projectId,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const getSiweMessageOptions = () => ({
  statement: "Sign in to my RainbowKit app",
})

export function Providers({ children, ...props }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider session={props.session}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
          <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <CacheProvider>
              <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </CacheProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}
