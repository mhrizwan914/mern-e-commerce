// Require Express
const express = require("express");
const { getProducts, createProduct, updateProduct, deleteProduct, getProduct } = require("../controllers/product");
// Create Express Rouer
const router = express.Router();
// 
router.route("/product").post(createProduct);
// 
router.route("/products").get(getProducts);
// 
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProduct);
// Export Router
module.exports = router;