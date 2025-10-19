import { connectToDB } from "@/lib/connectToDB";
import Profile from "@/models/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        // 1. Connect to database
        await connectToDB();

        // 2. Get session (must be logged in)
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response(
                JSON.stringify({ error: "Unauthorized" }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }

        const email = session.user.email;
        const body = await req.json();
        const { username, bio, profileImage } = body;

        if (!username) {
            return new Response(
                JSON.stringify({ error: "Username is required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // 3. Check if profile exists
        let existingProfile = await Profile.findOne({ email });

        if (existingProfile) {
            // Update existing profile
            existingProfile.username = username;
            existingProfile.bio = bio || existingProfile.bio;
            existingProfile.profileImage = profileImage || existingProfile.profileImage;
            await existingProfile.save();

            return new Response(
                JSON.stringify({
                    username: existingProfile.username,
                    bio: existingProfile.bio,
                    profileImage: existingProfile.profileImage,
                }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        }

        // 4. Create a new profile
        const newProfile = new Profile({
            email,
            username,
            bio,
            profileImage,
        });
        await newProfile.save();

        // ✅ Send back clean data (frontend will use username to redirect)
        return new Response(
            JSON.stringify({
                username: newProfile.username,
                bio: newProfile.bio,
                profileImage: newProfile.profileImage,
            }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Error saving profile:", error);
        return new Response(
            JSON.stringify({ error: "Server error", details: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
