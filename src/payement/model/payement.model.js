const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;


const PayementDocument = Joi.object().keys({
    payement_type: Joi.string(),
    provider: Joi.string(),
    account_no: Joi.number(),
    expiry: Joi.date(),
});

const payementSchema = new Schema(
    {
        payement_type: {
            type: String,
            unique: true
        },
        provider: {
            type: String,
        },
        account_no: {
            type: Number,
        },
        expiry: {
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


const Payement = mongoose.model("Payement", payementSchema);
module.exports = {Payement, PayementDocument}
