const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productInventorySchema = new Schema(
    {
        quantity: {
            type: String,
            unique: true
        },
        products: [
            {type: Schema.Types.ObjectId, ref: 'product'}
        ]
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            deleteAt: "deleteAt"
        },
    }
);


const Product_inventory = mongoose.model("product_inventory", productInventorySchema);
module.exports = Product_inventory
