// Require Express
const express = require("express");
// Require DatabaseConnection
const { dbConnectionHandle } = require("./configs/dbConnection");
// Require Error Handler Middleware
const ErrorHandlerMiddleware = require("./middleware/error");
// Require Cookie Parser
const cookieParser = require("cookie-parser");
// Create Express App
const app = express();
// Config dotenv
require("dotenv").config({ path: "server/configs/.env" });
// Handling Uncaught Error
process.on("uncaughtException", (error) => {
    console.log(`Error: ${error.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    process.exit(1);
});
// Data Handling Middleware
app.use(express.json());
// Cookie Handing Middleware
app.use(cookieParser());
// Require Products Route
app.use("/api/v1", require("./routes/product"));
// Require Users Route
app.use("/api/v1/user", require("./routes/user"));
// Error Handler Middleware
app.use(ErrorHandlerMiddleware);
// Create Port Variable
const port = process.env.PORT || 3000;
// Create Express Server
const server = app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
    dbConnectionHandle();
});
// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
    console.log(`Error: ${error.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    })
});