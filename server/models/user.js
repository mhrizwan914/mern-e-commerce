// Require Mongoose
const mongoose = require("mongoose");
// Require Email Validator
const { isEmail } = require("validator");
// Require Bcryptjs 
const bcryptjs = require("bcryptjs");
// Require JWT Token
const jwt = require("jsonwebtoken");
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
// Handle Before Save Schema 
schema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcryptjs.hash(this.password, 10);
});
// Generate JWT Access Token
schema.methods.generateAccessToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_TIME
    });
}
// Match Password
schema.methods.matchPassword = async function (e) {
    return await bcryptjs.compare(e, this.password);
}
// Export
module.exports = mongoose.model("user", schema);