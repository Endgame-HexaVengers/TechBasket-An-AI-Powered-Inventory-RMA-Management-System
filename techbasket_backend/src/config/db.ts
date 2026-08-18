import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI as string);

        console.log("MongoDB Connected");
    } catch(error){
        console.log(error);
        process.exit(1);
    }
};