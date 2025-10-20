import { connectToDB } from "@/lib/connectToDB";
import Profile from "@/models/Profile";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await connectToDB();

        const { username } = params;
        const email = request.nextUrl.searchParams.get("email"); // get email if username not provided

        let profile;
        if (username) {
            profile = await Profile.findOne({ username });
        } else if (email) {
            profile = await Profile.findOne({ email });
        } else {
            return NextResponse.json({ error: "Username or email required" }, { status: 400 });
        }

        if (!profile) {
            return NextResponse.json({ error: "Profile not found" }, { status: 404 });
        }

        return NextResponse.json(profile, { status: 200 });
    } catch (error) {
        console.error("Error fetching profile:", error);
        return NextResponse.json(
            { error: "Server error", details: error.message },
            { status: 500 }
        );
    }
}
