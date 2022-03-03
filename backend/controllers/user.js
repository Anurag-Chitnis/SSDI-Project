import asyncHandler from "express-async-handler";

// Import Model
import User from "../model/user.js";

export const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const exists = await User.findOne({ email });

  if (exists) return res.json({ error: "User already exists" });
});
