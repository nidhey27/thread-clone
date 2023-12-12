import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
    // Set strict query mode for Mongoose to prevent unknown field queries.
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) return console.log("Missing Database connection URL");

    // If the connection is already established, return without creating a new connection.
    if (isConnected) {
        console.log("Database connection already established");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true; // Set the connection status to true
        console.log("Database connection successful!");
    } catch (error: any) {
        console.log(`Failed to connect to Database: ${error.message}`);
    }
};
