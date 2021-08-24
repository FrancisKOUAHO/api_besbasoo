const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;


const CategoryDocument = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
});

const categorySchema = new Schema(
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
module.exports = {Category, CategoryDocument}
