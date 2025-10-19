import { connectToDB } from "@/lib/connectToDB";
import { saveProfile } from "@/lib/saveProfile";
import Profile from "@/models/Profile";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST(req) {


    const session = await getServerSession(authOptions)


    await connectToDB();


    const currentProfile = await Profile.findOne({ email: session.user.email })

    if (currentProfile) {
        return new Response(JSON.stringify({ profileExists: true, profile: currentProfile }))
    }

    else {
        return new Response({ "profileExists": false })
    }

}

