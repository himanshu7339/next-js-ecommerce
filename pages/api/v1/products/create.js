import { connectDB } from "@/utils/Mongodb";
import { Product } from "@/models/productModel";
import { ErrorHandler } from "@/utils/error";

export default async function handler(req, res) {
  // create new product
  if(req.method !== "POST"){
    return res.status(404).json({
      success:false,
      message:"Only allowed post method"
    })
  }
  try {
    await connectDB();
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message
    });
  }
}
