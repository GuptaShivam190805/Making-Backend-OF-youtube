import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./src/.env"
});


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(` \n MongoDB connected ! DB host: ${connectionInstance.connection.host} `);
        
    } catch (error) {
        console.error("MoongoDB Connection error ", error);
        process.exit(1)
    }
}

export default connectDB