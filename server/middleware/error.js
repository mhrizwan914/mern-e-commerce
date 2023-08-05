const ErrorHandlerClass = require("../utils/error");

// Create Error Handler Middleware
const ErrorHandlerMiddleware = (error, request, response, next) => {
    error.status = error.status || 500;
    error.message = error.message || "Internal server error";
    // Cast Error For Mongoose
    if (error.name === "CastError") {
        const message = `Resouce Not Found, Invalid ${error.path}`;
        error = new ErrorHandlerClass(400, message);
    }
    response.status(error.status).json({
        success: false,
        message: error.message,
        stack: error.stack
    });
};
// Export
module.exports = ErrorHandlerMiddleware;