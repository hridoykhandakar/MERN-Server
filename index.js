require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalRoutes"));

app.use(errorHandler);

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
