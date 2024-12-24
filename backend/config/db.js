import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("MongoDB connection string is missing in environment variables.");
        process.exit(1);
    }

    await mongoose.connect(uri).then(() => console.log("DB Connected")).catch(err => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });
};



// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.