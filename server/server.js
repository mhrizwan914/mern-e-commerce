// Require Express
const express = require("express");
const { dbConnectionHandle } = require("./configs/dbConnection");
// Create Express App
const app = express();
// Config dotenv
require("dotenv").config({ path: "server/configs/.env" });
// Data Handling Middleware
app.use(express.json());
// Require Products Route
app.use("/api/v1", require("./routes/product"));
// Create Port Variable
const port = process.env.PORT || 3000;
// Create Express Server
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
    dbConnectionHandle();
})