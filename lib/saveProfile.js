import mongoose from "mongoose";
import Profile from "@/models/Profile";
import { connectToDB } from "@/lib/connectToDB";

export const saveProfile = async (email, username, bio, profileImage) => {

    await connectToDB();

    let existingProfile = await Profile.findOne({ email })

    if (existingProfile) {
        existingProfile.username = username,
            existingProfile.bio = bio,
            existingProfile.profileImage = profileImage,
            existingProfile.updatedAt = new Date();
        await existingProfile.save();
    }

    else {
        const newProfile = new Profile({ email, username, bio, profileImage })
        await newProfile.save();
    }
}