const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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


const Inventory = mongoose.model("Product_inventory", inventorySchema);
module.exports = Inventory
