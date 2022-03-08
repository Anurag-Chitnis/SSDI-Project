import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  token: {
    type: String,
    default: null,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 128,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (req, res, next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(Number(process.env.ROUNDS));
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  console.log(match);
  return match;
};

userSchema.methods.generateToken = async ({ _id, email, password }) => {
  return await jwt.sign({ _id, email, password }, process.env.SECRET);
};

export default mongoose.model("users", userSchema);
