// Require Products Model
const Users = require("../models/user");
// Reuire Error Handler
const ErrorHandlerClass = require("../utils/error");
// Reuire Async Handler Middleware
const AsyncHandlerMiddleware = require("../middleware/async");
//@description Create User
//@route Create /api/vi/user
//@access public
const createUser = AsyncHandlerMiddleware(async (request, response, next) => {
    const { name, email, password } = request.body;
    const user = await Users.create({
        name,
        email,
        password,
        avatar: {
            publicID: "be9c29b29330",
            publicURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        }
    });
    response.status(201).json({
        success: true,
        data: user
    });
});
// Export
module.exports = { createUser };