const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const InventoryDocument = Joi.object().keys({
    quantity: Joi.number(),
});

const inventorySchema = new Schema(
    {
        quantity: {
            type: Number,
            default: null,
            unique: true
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
module.exports = {Inventory, InventoryDocument}
