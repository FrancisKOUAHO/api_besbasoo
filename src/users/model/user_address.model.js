const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAddressSchema = new Schema(
    {
        adress_line1: {
            type: String,
            required: true,
            unique: true
        },
        city: {
            type: String,
            required: true
        },
        postal_code: {
            type: String,
            default: null
        },
        country: {
            type: String,
            default: null
        },
        telephone: {
            type: Number,
            default: null
        },
        mobile: {
            type: Number,
            default: null
        },
        user_address: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
        ]
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
);


const User_address = mongoose.model("user_address", userAddressSchema);
module.exports = User_address
