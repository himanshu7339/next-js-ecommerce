import { User } from "@/models/userModel";
import { connectDB } from "@/utils/Mongodb";
import jwt from "jsonwebtoken";
import cookieParse from "cookie-parser";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(500).json({
      message: "Only GET Method is allowed",
    });
  }
    // Connect Mongodb
  connectDB();

  // call cookie Parse for access cookie
  cookieParse();
  const cookieToken = req.cookies;
  const token = JSON.stringify(cookieToken)
    .replace(/["{}"]/g, "")
    .split(":")[1];

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login First",
    });
  }
// decoded token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
// store user id
  const id = decoded._id;

  const user = await User.findById(id);

  res.status(200).json({
    success: true,
    user,
  });
}
