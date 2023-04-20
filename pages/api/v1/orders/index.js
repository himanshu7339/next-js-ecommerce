import { Order } from "@/models/orderModel";
import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {

  // Get all Users --- Admin
  await connectDB();

  if (req.method === "GET") {
    try {
      const order = await Order.find();
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}