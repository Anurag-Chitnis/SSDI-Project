// Default Import
import mongoose from "mongoose";

const ClothSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "products",
  },
  avail_size: {
    type: Array,
    default: ["S", "M", "L"],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  sleeve_length: {
    type: String,
    required: true,
  },
  collar: {
    type: String,
  },
  fit: {
    type: String,
    required: true,
  },
  occasion: {
    type: String,
  },
  pattern: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("clothes", ClothSchema);
