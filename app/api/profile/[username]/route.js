import { connectToDB } from "@/lib/connectToDB";
import Profile from "@/models/Profile";

export async function GET(req, { params }) {
    try {
        await connectToDB();

        const { username } = params;

        if (!username) {
            return new Response(JSON.stringify({ error: "username required" }))
        }

        const profile = await Profile.findOne({ username });

        if (!profile) {
            return new Response(JSON.stringify({ error: "Profile not found" }), {
                status: 404
            })
        }

        return new Response(JSON.stringify(profile), { status: 200 })
    } catch (error) {
        console.error("Error fetching profile", error);
        return new Response(JSON.stringify({ error: "server error" }), {
            status: 500
        })
    }
}