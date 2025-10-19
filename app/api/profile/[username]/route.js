import { connectToDB } from "@/lib/connectToDB";
import Profile from "@/models/Profile";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await connectToDB();

        const { username } = params; // no await

        if (!username) {
            return NextResponse.json({ error: "Username required" }, { status: 400 });
        }

        const profile = await Profile.findOne({ username });

        if (!profile) {
            return NextResponse.json({ error: "Profile not found" }, { status: 404 });
        }

        // ✅ Send clean JSON
        return NextResponse.json(profile, { status: 200 });
    } catch (error) {
        console.error("Error fetching profile:", error);
        return NextResponse.json(
            { error: "Server error", details: error.message },
            { status: 500 }
        );
    }
}
