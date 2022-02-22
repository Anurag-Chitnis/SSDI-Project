// Default imports
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";

// Config
const __dist = path.resolve();
dotenv.config({ path: __dist + "/backend/.env" });

// initialized express
const app = express();

// Connect database
import { dbConnect } from "./connect/db.js";
dbConnect();

// Global Variables
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running at port: ${PORT}`.underline.bold.blue)
);
