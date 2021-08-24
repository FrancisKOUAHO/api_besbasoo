const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;


const ProductDocument = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    sku: Joi.string(),
    image: Joi.string(),
    price: Joi.number(),
});

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
module.exports = {Product, ProductDocument}
