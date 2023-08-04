// Require Express
const express = require("express");
const { getProducts, createProduct } = require("../controllers/product");
// Create Express Rouer
const router = express.Router();
// 
router.route("/product").post(createProduct);
// 
router.route("/products").get(getProducts);
// Export Router
module.exports = router;