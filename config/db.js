const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected on ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
module.exports = connectDB;
