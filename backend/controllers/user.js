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

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json({ error: "User does not exists" });

  if (user && (await user.comparePassword(password))) {
    const token = await user.generateToken({ _id: user._id, email, password });

    user.token = token;

    user.save();

    res.json(user);
  } else {
    return res.json({ error: "Invalid email or password" });
  }
});
