const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const noteSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 33,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Note", noteSchema);
