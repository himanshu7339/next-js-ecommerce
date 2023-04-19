import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ name: "John Doe" });
}
