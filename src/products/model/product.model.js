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
        SKU: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
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
