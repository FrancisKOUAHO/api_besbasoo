const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;


const CategoryDocument = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
});

const categorySchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        title: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
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


const Category = mongoose.model("Category", categorySchema);
module.exports = Category
