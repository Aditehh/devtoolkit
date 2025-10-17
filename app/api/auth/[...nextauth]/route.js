import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/User";
import mongoose from "mongoose";



const handler = NextAuth({

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if(account.provider == "github") {
                alert("connectted via github")
            }
        },

    }

})

export { handler as GET, handler as POST };