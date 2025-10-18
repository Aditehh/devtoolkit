import mongoose from "mongoose";
import { Schema, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },

})

const User = models.User || mongoose.model("User", UserSchema)
export default User;