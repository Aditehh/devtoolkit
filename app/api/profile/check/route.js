import { connectToDB } from "@/lib/connectToDB";
import Profile from "@/models/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }

        await connectToDB();

        const currentProfile = await Profile.findOne({ email: session.user.email });

        if (currentProfile) {
            return new Response(JSON.stringify({ 
                profileExists: true, 
                username: currentProfile.username // fixed
            }));
        } else {
            return new Response(JSON.stringify({ profileExists: false }));
        }

    } catch (error) {
        console.error("Error checking profile:", error);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}
