// Require Mongoose
const mongoose = require("mongoose");
// Connect Mongoose
const dbConnectionHandle = async () => {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((data) => {
            console.log(`Mongo DB connected with server : ${data.connection.host}`);
        });
    // .catch((error) => {
    //     console.log(error);
    // });
    // try {
    //     const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    //     console.log("Database Connected Succeessfully", connect.connection.host, connect.connection.name);
    // } catch (error) {
    //     console.log(error);
    //     process.exit(1);
    // }
}
// Export
module.exports = { dbConnectionHandle };