import { Box } from "@chakra-ui/react"

import { Analytics } from "@vercel/analytics/react"
import { Poppins } from "next/font/google"
import "./globals.css"

import { Providers } from "./context/providers"

const poppins = Poppins({ subsets: ["latin"], weight: "500" })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Box>
            {children}
            <Analytics />
          </Box>
        </Providers>
      </body>
    </html>
  )
}
