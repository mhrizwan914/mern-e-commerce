// Require Mongoose
const mongoose = require("mongoose");
// Create Schema
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product Price"],
        maxLength: [8, "Price can not exceed 8 digits"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            publicID: {
                type: String,
                required: [true, "Please enter Product image public ID"],
            },
            publicURL: {
                type: String,
                required: [true, "Please enter Product image public URL"],
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please select product Category"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter product Stock"],
        maxLength: [4, "Stock can not exceed 4 digits"],
        default: 1
    },
    totalReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                default: 0
            },
            comment: {
                type: String,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
// Export Model
module.exports = mongoose.model("product", schema);