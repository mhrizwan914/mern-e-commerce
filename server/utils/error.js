// Create Error Handler Class
class ErrorHandlerClass extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}
// Export
module.exports = ErrorHandlerClass;