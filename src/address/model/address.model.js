const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;


const AddressDocument = Joi.object().keys({
    address_line: Joi.string(),
    city: Joi.string(),
    postal_code: Joi.number(),
    country: Joi.string(),
    telephone: Joi.number(),
    mobile: Joi.number(),
});

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
module.exports = {Address, AddressDocument}
