import mongoose from "mongoose";

let isConnected = false;
const URI = process.env.MONGO_URI;

export async function ConnectDb() {
  console.log(URI);
  if (isConnected) {
    return;
  }
  if (!URI) {
    throw new Error("Mongo Uri not provided");
  }

  try {
    await mongoose.connect(URI);
    isConnected = true;
    console.log("MongoDb Connected Succesfully");
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
}
