import { Product } from "@/models/productModel";
import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {
  //Get All Products
  await connectDB();

  if (req.method === "GET") {
    try {
      const product = await Product.find();
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
