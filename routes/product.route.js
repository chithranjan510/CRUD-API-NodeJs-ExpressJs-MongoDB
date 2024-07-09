import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", addProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

export default productRouter;
