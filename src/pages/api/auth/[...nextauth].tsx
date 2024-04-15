import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 70 * 30,
      },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          async redirect({ url, baseUrl }) {
            return baseUrl
          },
          async session({ session, token, user }) {
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            return token
          }
      },
})