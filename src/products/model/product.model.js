const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        sku: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
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
module.exports = Product
