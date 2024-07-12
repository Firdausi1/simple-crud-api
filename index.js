require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //allows form input

mongoose
  .connect(
    process.env.DATABASE_URI
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => console.log("Connection failed", err));

app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});
