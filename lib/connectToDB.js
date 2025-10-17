import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Mongoose already connected")
            return
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "devtoolkit",
        });
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Mongodb connection error", error)
        throw new Error("mongodb connection failed")
    }
}
