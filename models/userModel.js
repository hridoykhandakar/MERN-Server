const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add a Username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add a Email"],
    },
    password: {
      type: String,
      required: [true, "Please Add a Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
