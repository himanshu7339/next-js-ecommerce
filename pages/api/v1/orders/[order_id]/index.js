import { Order } from "@/models/orderModel";
import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {

    // Get single orders --- Admin
  if (req.method === "GET") {
    try {
      await connectDB();
      const { order_id } = req.query;
      const order = await Order.findById(order_id);

      if (!order) {
        res.status(404).json({
          success: false,
          message: "order is not found",
        });
      }
      res.status(200).json({
        success: true,
        order,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    // Update order 
  } else if (req.method === "PUT") {
    try {
      await connectDB();
      const { order_id } = req.query;
      let order = await Order.findById(order_id);
      if (!order) {
        res.status(404).json({
          message: "order is not found",
        });
      }
      order = await Order.findByIdAndUpdate(order_id, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(201).json({
        message: "Your order update successfully",
        order,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    // Delete order -- Admin
  } else if (req.method === "DELETE") {
    try {
      await connectDB();
      const { order_id } = req.query;
      let order = await Order.findById(order_id);
      if (!order) {
        res.status(404).json({
          message: "Order is not found",
        });
      }
      order = await Order.findByIdAndDelete(order_id);
      res.status(201).json({
        message: "Your order delete successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
