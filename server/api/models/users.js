const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userssSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 33,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("notes", notesSchema);
