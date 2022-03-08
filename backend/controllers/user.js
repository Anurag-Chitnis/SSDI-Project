import asyncHandler from "express-async-handler";
import gravatar from "gravatar";

// Import Model
import User from "../model/user.js";

export const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const exists = await User.findOne({ email });

  if (exists) return res.json({ error: "User already exists" });

  const avatar = gravatar.url(email, { r: "x", d: "retro" });

  const user = await User.create({
    firstName,
    lastName,
    email,
    avatar,
    password,
  });

  return res.json(user);
});
