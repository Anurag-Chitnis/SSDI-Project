import express from "express";

const router = express.Router();

// Import Controller
import {
  getClothProducts,
  getClothProductById,
} from "../controllers/clothes.js";

router.route("/").get(getClothProducts);
router.route("/:id").get(getClothProductById);

export default router;
