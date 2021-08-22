const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPayementSchema = new Schema(
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
        user: [
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


const User_payement = mongoose.model("user_payement", userPayementSchema);
module.exports = User_payement
