"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react"
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { SessionProvider } from "next-auth/react"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { gnosis, goerli, mainnet, sepolia } from "wagmi/chains"
import { WALLETCONNECT_PROJECT_ID } from "../config"
const projectId = WALLETCONNECT_PROJECT_ID

const chains = [gnosis, mainnet, goerli, sepolia]
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export function Providers({ children, ...props }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider session={props.session}>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>{" "}
      </SessionProvider>
    </WagmiConfig>
  )
}
