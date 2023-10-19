import airtable from 'airtable'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getCsrfToken } from 'next-auth/react'
import { SiweMessage } from 'siwe'

airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN,
})

const base = airtable.base(process.env.AIRTABLE_COMMUNITY_BASE_ID)
const CommunityMembersTable = base('Applications')

export function getAuthOptions() {
  const providers = [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const siwe = new SiweMessage(JSON.parse(credentials?.message || '{}'))

          const nextAuthUrl =
            process.env.NEXTAUTH_URL ||
            (process.env.VERCEL_URL
              ? `https://${process.env.VERCEL_URL}`
              : null)
          if (!nextAuthUrl) {
            return null
          }

          const nextAuthHost = new URL(nextAuthUrl).host
          if (siwe.domain !== nextAuthHost) {
            return null
          }

          if (
            siwe.nonce !==
            (await getCsrfToken({ req: { headers: req.headers } }))
          ) {
            return null
          }

          const result = await siwe.verify({
            signature: credentials?.signature || '',
            domain: nextAuthUrl.host,
            nonce: await getCsrfToken({ req: { headers: req.headers } }),
          })

          if (result.success) {
            const address = siwe.address
            const records = await CommunityMembersTable.select({
              filterByFormula: `AND({Wallet} = '${address}', {isAccepted} = '1')`,
            }).firstPage()
            const isMember = records.length > 0
            const user = {
              id: address,
              isMember,
            }
            return user
          }
          return null
        } catch (e) {
          return null
        }
      },
      credentials: {
        message: {
          label: 'Message',
          placeholder: '0x0',
          type: 'text',
        },
        signature: {
          label: 'Signature',
          placeholder: '0x0',
          type: 'text',
        },
      },
      name: 'Ethereum',
    }),
  ]

  return {
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user }
      },

      async session({ session, token }) {
        session.user = token
        return session
      },
    },
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
    },
  }
}

const handler = NextAuth(getAuthOptions())

export { handler as GET, handler as POST }
