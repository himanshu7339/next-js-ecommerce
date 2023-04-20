import { Product } from "@/models/productModel";
import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {

    // find single product find by id
  if (req.method === "GET") {
    try {
      await connectDB();
      const { product_id } = req.query;
      const product = await Product.findById(product_id);

      if (!product) {
        res.status(404).json({
          success: false,
          message: "Product is not found",
        });
      }
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    // update single product with id
  } else if (req.method === "PUT") {
    try {
      await connectDB();
      const { product_id } = req.query;
      let product = await Product.findById(product_id);
      if (!product) {
        res.status(404).json({
          message: "Product is not found",
        });
      }
      product = await Product.findByIdAndUpdate(product_id, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(201).json({
        message: "Your product update successfully",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    // Delete product
  } else if (req.method === "DELETE") {
    try {
      await connectDB();
      const { product_id } = req.query;
      let product = await Product.findById(product_id);
      if (!product) {
        res.status(404).json({
          message: "Product is not found",
        });
      }
      product = await Product.findByIdAndDelete(product_id);
      res.status(201).json({
        message: "Your product delete successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
