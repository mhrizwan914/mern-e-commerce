// Require Products Model
const Products = require("../models/products");
//@description Create Product
//@route Create /api/vi/products
//@access public
const createProduct = async (request, response) => {
    try {
        const { name, description, price, images, category } = request.body;
        const product = await Products.create({
            name,
            description,
            price,
            images,
            category
        });
        response.status(201).json({
            message: "Product create successfully",
            data: product
        });
    } catch (error) {
        console.log(error);
    }
}
//@description Get All Products
//@route Get /api/vi/products
//@access public
const getProducts = async (request, response) => {
    try {
        const product = await Products.find();
        response.status(201).json({
            message: "Product get successfully",
            data: product
        });
    } catch (error) {
        console.log(error);
    }
}

// Export
module.exports = { createProduct, getProducts };