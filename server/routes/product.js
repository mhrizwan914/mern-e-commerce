// Require Express
const express = require("express");
// Require Product Controllers
const { getProducts, createProduct, updateProduct, deleteProduct, getProduct } = require("../controllers/product");
// Require Logged In Middleware
const loggedInMiddleware = require("../middleware/loggedin");
// Create Express Rouer
const router = express.Router();
// 
router.route("/product").post(createProduct);
// 
router.route("/products").get(loggedInMiddleware, getProducts);
// 
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProduct);
// Export
module.exports = router;