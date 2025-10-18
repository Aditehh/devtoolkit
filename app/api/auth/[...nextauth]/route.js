import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/User";
import { connectToDB } from "@/lib/connectToDB";

// Export options so we can use them in getServerSession
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectToDB();

        const existingUser = await User.findOne({ email: user.email })

        if (!existingUser) {
          await User.create({
            email: user.email,
          })
        }
      }
      return true;
    },
    async session({ session }) {
      await connectToDB();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.id = dbUser._id.toString();
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
