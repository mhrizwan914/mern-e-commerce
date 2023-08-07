// Require Mongoose
const mongoose = require("mongoose");
// Require Email Validator
const { isEmail } = require("validator");
// Create Schema
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Name"],
        maxLength: [30, "Name can not exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your Email"],
        unique: true,
        validate: [isEmail, "Please enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your Password"],
        minLength: [8, "Password should have more than 8 characters"],
        select: false
    },
    avatar: {
        publicID: {
            type: String,
            required: [true, "Please enter Avatar image public ID"],
        },
        publicURL: {
            type: String,
            required: [true, "Please enter Avatar image public URL"],
        }
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
// Export Model
module.exports = mongoose.model("user", schema);