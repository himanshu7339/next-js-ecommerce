import { connectDB } from "@/utils/Mongodb";
import { User } from "@/models/userModel";
import { ErrorHandler } from "@/utils/error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(500).json({
      message: "Only Post Method is allowed",
    });
  }
  // connection with mongodb
  connectDB();
  // Register A User
  const { email, password } = req.body; // send email and password with req.body
  if ((!email, !password)) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }
  const user = await User.findOne({ email }).select("+password"); // check password and email is exist ?

  if (!user)
    return res.status(404).json({
      success: false,
      message: "invalid email or password",
    });

  const isMatch = await bcrypt.compare(password, user.password); // process beting isMatch
  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "invalid email or password",
    });
  // after matching done jwt token is set
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET); // create token and  set in cookie
  res
    .status(200)
    .setHeader(
      "Set-Cookie",
      serialize("token", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
      })
    )
    .json({
      success: true,
      message: "Login Successfully",
    });
}
