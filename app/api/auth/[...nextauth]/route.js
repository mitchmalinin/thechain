const { default: NextAuth } = require("next-auth/next")
const { default: Credentials } = require("next-auth/providers/credentials")

const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        if (
          credentials?.email === "test@test" &&
          credentials?.password === "test"
        ) {
          return {
            id: "1",
            email: "test@test",
          }
        }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
