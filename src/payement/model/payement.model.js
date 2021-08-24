const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const payementSchema = new Schema(
    {
        payement_type: {
            type: String,
        },
        provider: {
            type: String,
        },
        account_no: {
            type: String,
            unique: true
        },
        expiry: {
            type: String,
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
