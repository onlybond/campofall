import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }
 
  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "",{
        
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    throw new Error("Database connection failed");
  }
}

export default dbConnect;
