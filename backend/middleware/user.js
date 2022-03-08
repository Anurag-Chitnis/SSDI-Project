import jwt from "jsonwebtoken";
// IMPORT USER MODEL
import User from "../model/user.js";

export const verify = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    const decodedUser = await jwt.verify(token, process.env.SECRET);

    const user = await User.findById(decodedUser._id);

    if (!user) return res.json({ error: "User not found, wrong token" });

    req.user = user;

    console.log(req.user);

    next();
  } else {
    res.status(400);
    res.json({ error: "Invalid or missing token" });
  }
};
