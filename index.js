const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.models.js')
const app = express();

app.use(express.json)

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose
  .connect(
    "mongodb+srv://plasmazen:M8fG1cSsdFF2AbwX@statsapptest.f3kco8v.mongodb.net/?retryWrites=true&w=majority&appName=statsapptest"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
