import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/product.route.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRouter);

// 
app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch(() => console.log("Connection failed"));
