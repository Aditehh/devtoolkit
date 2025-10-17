import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true }
})

const User = model("User", UserSchema);
export default mongoose.models.User || User;