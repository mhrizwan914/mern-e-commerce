// Require Mongoose
const mongoose = require("mongoose");
// Connect Mongoose
const dbConnectionHandle = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URI);
        console.log("Database Connected Succeessfully", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
// Export Connection
module.exports = { dbConnectionHandle };