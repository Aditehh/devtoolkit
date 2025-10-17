import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/User";
import mongoose from "mongoose";
import { connectToDB } from "@/lib/connectToDB";






const handler = NextAuth({

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

    ],
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         if (account.provider == "github") {
    //             // connect to the database
    //             // const client = await mongoose.connect();
    //             await connectToDB();

    //             // check if the user is already in the database
    //             const currentUser = await User.findOne({ email: user.email });
    //             if (!currentUser) {
    //                 await User.create({ email: user.email });
    //             }

    //         }
    //         return true;
    //     },

    // }

})

export { handler as GET, handler as POST };