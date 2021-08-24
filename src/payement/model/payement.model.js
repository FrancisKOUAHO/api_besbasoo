const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
module.exports = Payement
