const express = require("express");
const morgan = require("morgan");
const store = require("./routes/storeRoutes");
const product = require("./routes/products");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  res.status(200).send({ ping: "pong" });
});

app.use("/store", store);
app.use("/products", product);

// const response = GiftExchange.pairs(req.body.names);

module.exports = app;
// YOUR CODE HERE
