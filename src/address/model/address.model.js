const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema(
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
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
);


const Address = mongoose.model("Address", addressSchema);
module.exports = Address
