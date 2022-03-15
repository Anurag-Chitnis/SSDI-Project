import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

export default mongoose.model("profile", ProfileSchema);
