import { Product } from "@/models/productModel";
import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {
  //Get All Products
  await connectDB();

  if (req.method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
