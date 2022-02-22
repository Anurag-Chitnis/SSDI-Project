import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import path from "path";
import dotenv from "dotenv";

// Config
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "backend/.env" });

export const dbConnect = asyncHandler(async () => {
  const { connections } = await mongoose.connect(
    process.env.MONGO_URL + process.env.MONGO_DB_NAME
  );
});
