import express from "express";

const router = express.Router();

// Import Controller
import { createUser } from "../controllers/user.js";

router.route("/").post(createUser);

export default router;
