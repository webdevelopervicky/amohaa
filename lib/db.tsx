import mongoose from "mongoose";

const ConnectToDatabase = async () => {
  try {
    if (!process.env.MongoURL) {
      throw new Error("MongoURL is not defined in environment variables.");
    }
    await mongoose.connect(process.env.MongoURL);
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};

export default ConnectToDatabase;
