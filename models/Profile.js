import mongoose from "mongoose";
import { Schema, models } from "mongoose";

const ProfileSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    bio: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});

let Profile = models.Profile || mongoose.model("Profile", ProfileSchema);
export default Profile;