// Require Products Model
const Products = require("../models/products");
// Reuire Error Handler
const ErrorHandlerClass = require("../utils/error");
// Reuire Async Handler Middleware
const AsyncHandlerMiddleware = require("../middleware/async");
// Reuire Product Feature Class
const ProductFeatureClass = require("../utils/products");
//@description Create Product
//@route Create /api/vi/product
//@access private
const createProduct = AsyncHandlerMiddleware(async (request, response, next) => {
    const { name, description, price, images, category } = request.body;
    const product = await Products.create({
        name,
        description,
        price,
        images,
        category
    });
    response.status(201).json({
        success: true,
        data: product
    });
});
//@description Get All Products
//@route Get /api/vi/products
//@access public
const getProducts = AsyncHandlerMiddleware(async (request, response, next) => {
    const productFeatureClass = new ProductFeatureClass(Products.find(), request.query).search().filter().pagination(5);
    const counts = await Products.countDocuments();
    const product = await productFeatureClass.query;
    response.status(200).json({
        success: true,
        counts,
        data: product
    });
});
//@description Get Product
//@route Get /api/vi/product/:id
//@access public
const getProduct = AsyncHandlerMiddleware(async (request, response, next) => {
    const productID = request.params.id;
    const product = await Products.findById(productID);
    if (!product) {
        return next(new ErrorHandlerClass(404, "Product not found"));
    }
    response.status(200).json({
        success: true,
        data: product
    });
});
//@description Update Product
//@route Update /api/vi/product/:id
//@access private
const updateProduct = AsyncHandlerMiddleware(async (request, response, next) => {
    const productID = request.params.id;
    let product = await Products.findById(productID);
    if (!product) {
        return next(new ErrorHandlerClass(404, "Product not found"));
    }
    product = await Products.findByIdAndUpdate(productID, request.body, {
        new: true, runValidators: true, useFindAndModify: false
    });
    response.status(200).json({
        success: true,
        data: product
    });
})
//@description Delete Product
//@route Delete /api/vi/product/:id
//@access private
const deleteProduct = AsyncHandlerMiddleware(async (request, response, next) => {
    const productID = request.params.id;
    let product = await Products.findById(productID);
    if (!product) {
        return next(new ErrorHandlerClass(404, "Product not found"));
    }
    await product.deleteOne();
    response.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
})
// Export
module.exports = { createProduct, getProducts, getProduct, updateProduct, deleteProduct };