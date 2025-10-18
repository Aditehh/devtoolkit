import { connectToDB } from "@/lib/connectToDB";
import Profile from "@/models/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"; // make sure path is correct

export async function POST(req) {
    try {
        await connectToDB();

        // Get logged-in user session
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response("Unauthorized", { status: 401 });
        }

        const email = session.user.email; // use email from session
        const body = await req.json();
        const { username, bio, profileImage } = body; // only take username, bio, image from body

        // Check if profile exists
        let existingProfile = await Profile.findOne({ email });

        if (existingProfile) {
            existingProfile.username = username;
            existingProfile.bio = bio;
            existingProfile.profileImage = profileImage;
            await existingProfile.save();
            return new Response(JSON.stringify(existingProfile), { status: 200 });
        }

        // Create new profile
        const newProfile = new Profile({ email, username, bio, profileImage });
        await newProfile.save();

        return new Response(JSON.stringify(newProfile), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response("Error saving Profile", { status: 500 });
    }
}
