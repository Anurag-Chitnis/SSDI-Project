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
// Express middleware to make post req
app.use(express.json());

// Connect database
import { dbConnect } from "./connect/db.js";
dbConnect();

// Import Router
import ProductRoute from "./routes/products.js";
import ClothRoute from "./routes/clothes.js";
import UserRoute from "./routes/user.js";

app.use("/api/products", ProductRoute);
app.use("/api/clothes", ClothRoute);
app.use("/api/user", UserRoute);

// Global Variables
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running at port: ${PORT}`.underline.bold.blue)
);
