import "@rainbow-me/rainbowkit/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./context/providers";
import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>
                    <main>
                        <Header />
                        {children}
                        <Footer />
                        <Analytics />
                    </main>
                </Providers>
            </body>
        </html>
    );
}
