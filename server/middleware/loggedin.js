// Require Products Model
const Users = require("../models/user");
// Reuire Error Handler Class
const ErrorHandlerClass = require("../utils/error");
// Reuire Async Handler Middleware
const AsyncHandlerMiddleware = require("../middleware/async");
// Create Is Logged In Middleware
const loggedInMiddleware = AsyncHandlerMiddleware(async (request, response, next) => {
    // const { token } = request.cookies;
    console.log(request.cookies);
});
// Export
module.exports = loggedInMiddleware;