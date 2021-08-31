const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        sku: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        price: {
            type: Number,
            default: null
        },
        product_category: [
            {type: Schema.Types.ObjectId, ref: 'Product_category'}
        ],
        product_inventory: [
            {type: Schema.Types.ObjectId, ref: 'Product_inventory'}
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


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
