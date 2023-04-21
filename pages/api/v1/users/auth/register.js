import { connectDB } from "@/utils/Mongodb";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  //Connection with MongoDb
  connectDB();
  // Register A User

  const { firstName, lastName, email, password } = req.body; // taking data from post request

  let user = await User.findOne({ email }); //check user is exist ?
  if (user)
    return res.status(404).json({
      success: false,
      message: "User Already Exist",
    });
  const hashedPassword = await bcrypt.hash(password, 10); // doing hash password with using bcrypt
  user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  }); // after check all things  lets create new user in Mongo db

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET); // create token and  set in cookie
  res
    .status(201)
    .setHeader(
      "Set-Cookie",
      serialize("token", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
      })
    )
    .json({
      success: true,
      message: "Registered Successfully",
    });
}
