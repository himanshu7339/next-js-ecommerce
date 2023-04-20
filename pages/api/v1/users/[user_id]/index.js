import { User } from "@/models/userModel";
import { connectDB } from "@/utils/Mongodb";

export default async function handler(req, res) {

    // Get single Users --- Admin
  if (req.method === "GET") {
    try {
      await connectDB();
      const { user_id } = req.query;
      const user = await User.findById(user_id);

      if (!user) {
        res.status(404).json({
          success: false,
          message: "User is not found",
        });
      }
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    // Update User Profile
  } else if (req.method === "PUT") {
    try {
      await connectDB();
      const { user_id } = req.query;
      let user = await User.findById(user_id);
      if (!user) {
        res.status(404).json({
          message: "User is not found",
        });
      }
      user = await User.findByIdAndUpdate(user_id, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(201).json({
        message: "Your user update successfully",
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    // Delete user -- Admin
  } else if (req.method === "DELETE") {
    try {
      await connectDB();
      const { user_id } = req.query;
      let user = await User.findById(user_id);
      if (!user) {
        res.status(404).json({
          message: "User is not found",
        });
      }
      user = await User.findByIdAndDelete(user_id);
      res.status(201).json({
        message: "Your user delete successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
