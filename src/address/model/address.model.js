const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const addressSchema = new Schema(
    {
        address_line: {
            type: String,
            required: true,
            unique: true
        },
        city: {
            type: String,
            required: true
        },
        postal_code: {
            type: Number,
        },
        country: {
            type: String,
        },
        telephone: {
            type: Number,
        },
        mobile: {
            type: Number,
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
