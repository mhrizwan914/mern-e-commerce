// Create Async Handler Middleware
const AsyncHandlerMiddleware = (func) => {
    return (request, response, next) => {
        Promise.resolve(func(request, response, next)).catch(next);
    }
}
// Export
module.exports = AsyncHandlerMiddleware;