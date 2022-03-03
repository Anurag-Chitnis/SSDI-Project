import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.pre("save", function (req, res, next) {
  if (!this.isModified("password")) return next();
  bcrypt.genSalt(process.env.ROUNDS, function (err, salt) {
    bcrypt.hash(this.password, salt, function (err, hash) {
      this.password = hash;
    });
  });
});

export default mongoose.model("users", userSchema);
