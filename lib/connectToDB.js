// import mongoose from "mongoose";


// let isConnected = false;

// export const connectToDB = async () => {

//     if (isConnected) return console.log("Monogodb already connected");

//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: "devtoolkit"
//         })
//         isConnected = true;
//         console.log("mongodb connected")

//     } catch (error) {
//         console.error("mongodb connection error", error)
//     }




// }