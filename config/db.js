const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/goal");
    console.log("database is connected");
  } catch (e) {
    console.log(e);
  }
}
module.exports = connectDB;
