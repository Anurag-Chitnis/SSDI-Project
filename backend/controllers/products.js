// Import Models
import asyncHandler from "express-async-handler";
import Product from "../model/product.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export const getProductId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});
