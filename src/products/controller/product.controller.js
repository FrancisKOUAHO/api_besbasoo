const Joi = require("joi");
require("dotenv").config();


const Product_inventory = require('../model/product_inventory.model');
const Product_category = require('../model/product_category.model');
const Product = require('../model/product.model');



const productSchema = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    SKU: Joi.string(),
    price: Joi.number(),
    category: Joi.array(),
    inventory: Joi.array(),
});


exports.Create_product = async (req, res) => {
    try{
        const { name, description, SKU, price } = req.body;

        if (!name || !description || !SKU || !price) {
            return res.status(422).json({ message: "Les champs name, description, SKU, price sont obligatoires." });
        }

        const productCreated = new Product(productSchema);
        await productCreated.save();
        console.log(productCreated)
        return res.status(201).json(
            {
                data: productCreated,
                success: true,
                message: "The product has been successfully created",
            }
        );

    }catch (err) {
        return res.status(500).json(
            {
                success: false,
                message: "The product was not created",
            }
        );

    }


}


exports.Get_product = async (req, res) => {

}

exports.Edit_product = async (req, res) => {

}

exports.Delete_product = async (req, res) => {

}

