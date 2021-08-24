const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const inventorySchema = new Schema(
    {
        quantity: {
            type: Number,
            unique: true
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            deleteAt: "deleteAt"
        },
    }
);


const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory
