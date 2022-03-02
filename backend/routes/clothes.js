import express from "express";

const router = express.Router();

// Import Controller
import { getClothProducts } from "../controllers/clothes.js";

router.route("/").get(getClothProducts);

export default router;
