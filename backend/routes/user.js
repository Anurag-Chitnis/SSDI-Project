import express from "express";

const router = express.Router();

// Import Controller
import { createUser, loginUser } from "../controllers/user.js";

router.route("/create").post(createUser);
router.route("/login").post(loginUser);

export default router;
