const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productCategorySchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'product',
                required: false,
                index: true,
            }
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


const Product_category = mongoose.model("product_category", productCategorySchema);
module.exports = Product_category
