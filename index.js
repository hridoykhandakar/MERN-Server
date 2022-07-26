require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");

connectDB();
console.log(process.env.SECRET);

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
