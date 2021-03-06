import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import asyncHandler from "express-async-handler";

const app = express();
const __dirname = path.resolve();

// Config
dotenv.config({ path: __dirname + "/backend/.env" });

// Connect Database
import { dbConnect } from "./connect/db.js";
dbConnect();

// Import Default Data
import users from "./data/users.js";
import products from "./data/products.js";
import clothes from "./data/clothes.js";

// Import Mongoose Models
import User from "./model/user.js";
import Product from "./model/product.js";
import Cloth from "./model/cloth.js";

const importData = asyncHandler(async (req, res) => {
  // Clear data
  await User.deleteMany({});
  await Product.deleteMany({});

  const sampleUsers = await User.insertMany(users);
  const adminUserId = sampleUsers[0]._id;

  const dbProducts = products.map((product) => {
    return { ...product, user: adminUserId };
  });

  const createdProducts = await Product.insertMany(dbProducts);

  const clothProducts = createdProducts.filter(
    (prod) => prod.category == "clothing"
  );

  for (let i = 0; i < clothProducts.length; i++) {
    clothes[i].product_id = clothProducts[i]._id;
  }

  await Cloth.insertMany(clothes);

  console.log("Data Imported".underline.yellow.bold);
  process.exit(1);
});

const deleteData = asyncHandler(async (req, res) => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Cloth.deleteMany({});
  console.log("Data Deleted".underline.bold.yellow);
  process.exit(1);
});

if (process.argv[2] == "-d") {
  deleteData();
} else {
  importData();
}
