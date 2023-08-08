// Require Products Model
const Users = require("../models/user");
// Reuire Error Handler Class
const ErrorHandlerClass = require("../utils/error");
// Reuire Async Handler Middleware
const AsyncHandlerMiddleware = require("../middleware/async");
// Require Send Token Handle
const sendTokenHandle = require("../utils/token");
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
    sendTokenHandle(user, 201, response);
});
//@description Create User
//@route Create /api/vi/user
//@access public
const loginUSer = AsyncHandlerMiddleware(async (request, response, next) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return next(new ErrorHandlerClass(400, "Please enter Email and Password"));
    }
    const user = await Users.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandlerClass(401, "Invalid Email and Password"));
    }
    console.log(user);
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
        return next(new ErrorHandlerClass(401, "Invalid Email and Password"));
    }
    sendTokenHandle(user, 200, response);
});
// Export
module.exports = { createUser, loginUSer };