const express = require("express");
const morgan = require("morgan");
const store = require("./routes/storeRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  res.status(200).send({ ping: "pong" });
});

app.use("/store", store);

module.exports = app;
// YOUR CODE HERE
