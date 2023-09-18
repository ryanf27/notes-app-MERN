const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 33,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
