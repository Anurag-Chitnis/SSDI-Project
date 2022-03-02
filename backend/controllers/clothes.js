import express from "express";
import asyncHandler from "express-async-handler";

import Product from "../model/product.js";
import Cloth from "../model/cloth.js";

export const getClothProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  let clothesSET = [];
  products
    .filter((prod) => prod.category === "clothing")
    .forEach(async (prod, index, arr) => {
      const currentClProd = await Cloth.findOne({ product_id: prod._id });
      const clothData = {
        _id: currentClProd._id,
        product_id: currentClProd.product_id,
        user: prod.user,
        name: prod.name,
        image: prod.image,
        brand: prod.brand,
        description: prod.description,
        category: prod.category,
        sub_category: prod.sub_category,
        price: prod.price,
        countInStock: prod.countInStock,
        rating: prod.rating,
        numReviews: prod.numReviews,
        avail_size: currentClProd.avail_size,
        gender: currentClProd.gender,
        material: currentClProd.material,
        sleeve_length: currentClProd.sleeve_length,
        collar: currentClProd.collar,
        fit: currentClProd.fit,
        occasion: currentClProd.occasion,
        pattern: currentClProd.pattern,
        date: currentClProd.date,
      };
      clothesSET.push(clothData);

      if (arr.length === index + 1) {
        res.json(clothesSET);
      }
    });
});

export const getClothProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  const clothProduct = await Cloth.findOne({ product_id: product._id });

  res.json({
    product,
    clothProduct,
  });
});
