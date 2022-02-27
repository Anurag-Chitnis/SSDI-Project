import express from "express";

// Init router
const router = express.Router();

// Import Controllers
import { getProducts, getProductId } from "../controllers/products.js";

router.route("/").get(getProducts);

router.route("/:id").get(getProductId);

export default router;
