import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(500).json({
      message: "Only Get Method is allowed",
    });
  }
  // Logout user

  try {
    res
      .status(201)
      .setHeader(
        "Set-Cookie",
        serialize("token", null, {
          httpOnly: true,
          expires: new Date(Date.now()),
        })
      )
      .json({
        success: true,
        message: "Logged Out",
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
