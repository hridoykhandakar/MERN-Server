require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalRoutes"));
app.use("/api/user", require("./routers/userRoutes"));

app.get("/api/goals", function (req, res) {});

app.use(errorHandler);

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
