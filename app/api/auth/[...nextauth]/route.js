import { supabase } from "@/app/utils/supabaseClient";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

export function getAuthOptions() {
    const providers = [
        CredentialsProvider({
            async authorize(credentials, req) {
                try {
                    const siwe = new SiweMessage(
                        JSON.parse(credentials?.message || "{}"),
                    );

                    const nextAuthUrl =
                        process.env.NEXTAUTH_URL ||
                        (process.env.VERCEL_URL
                            ? `https://${process.env.VERCEL_URL}`
                            : null);
                    if (!nextAuthUrl) {
                        return null;
                    }

                    const nextAuthHost = new URL(nextAuthUrl).host;
                    if (siwe.domain !== nextAuthHost) {
                        return null;
                    }

                    if (
                        siwe.nonce !==
                        (await getCsrfToken({ req: { headers: req.headers } }))
                    ) {
                        return null;
                    }

                    const result = await siwe.verify({
                        signature: credentials?.signature || "",
                        domain: nextAuthUrl.host,
                        nonce: await getCsrfToken({
                            req: { headers: req.headers },
                        }),
                    });
                    if (result.success) {
                        const address = siwe.address.toLowerCase(); // Normalize the address

                        // Query Supabase
                        const { data, error } = await supabase
                            .from("users")
                            .select("*")
                            .eq("wallet_address", address);

                        if (error) {
                            throw new Error(
                                "Unable to query user from Supabase",
                            );
                        }

                        if (data) {
                            // User is found and is a member
                            const user = {
                                id: data.wallet_address,
                                isMember: true,
                            };
                            return user;
                        }
                        return null; // User not found or not accepted
                    }
                    return null;
                } catch (e) {
                    return null;
                }
            },
            credentials: {
                message: {
                    label: "Message",
                    placeholder: "0x0",
                    type: "text",
                },
                signature: {
                    label: "Signature",
                    placeholder: "0x0",
                    type: "text",
                },
            },
            name: "Ethereum",
        }),
    ];

    return {
        callbacks: {
            async jwt({ token, user }) {
                return { ...token, ...user };
            },

            async session({ session, token }) {
                session.user = token;
                return session;
            },
        },
        providers,
        secret: process.env.NEXTAUTH_SECRET,
        session: {
            strategy: "jwt",
        },
    };
}

const handler = NextAuth(getAuthOptions());

export { handler as GET, handler as POST };
