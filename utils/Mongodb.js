import mongoose from "mongoose";
export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URL, {
    dbName: "next-Ecommerce",
  });
  console.log(`Database Connected on ${connection.host}`);
};
