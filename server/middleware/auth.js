// Require Products Model
const Users = require("../models/user");
// Reuire Error Handler Class
const ErrorHandlerClass = require("../utils/error");
// Reuire Async Handler Middleware
const AsyncHandlerMiddleware = require("./async");
// Create Is Logged In Middleware
const authMiddleware = AsyncHandlerMiddleware(async (request, response, next) => {
    const token = request.cookies;
    console.log(token);
});
// Export
module.exports = authMiddleware;