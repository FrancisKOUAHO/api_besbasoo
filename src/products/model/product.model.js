const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        SKU: {
            type: String,
            default: null
        },
        price: {
            type: Number,
            default: null
        },
        category: [
            {type: Schema.Types.ObjectId, ref: 'product_category'}
        ],
        inventory: [
            {type: Schema.Types.ObjectId, ref: 'product_inventory'}
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


const Product = mongoose.model("product", productSchema);
module.exports = Product
