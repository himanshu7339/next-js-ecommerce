import { connectDB } from "@/utils/Mongodb";
import { Order } from "@/models/orderModel";
import { ErrorHandler } from "@/utils/error";

export default async function handler(req, res) {

  // Register A User
  if (req.method !== "POST") {
    return res.status(404).json({
      success: false,
      message: "Only allowed post method",
    });
  }
  try {
    await connectDB();
    const order = await Order.create(req.body);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
