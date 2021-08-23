const Joi = require("joi");
require("dotenv").config();


const Product_inventory = require('../model/product_inventory.model');
const Product_category = require('../model/product_category.model');
const Product = require('../model/product.model');


exports.createProduct = async (req, res) => {
    Product.create(req.body, (error, product) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The product was not created",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: product,
                    success: true,
                    message: "The product has been successfully created",
                }
            );
        }
    })
}


exports.getAllProduct = async (req, res) => {
    await Product.find((error, product) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "Unable to retrieve products!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: product,
                    success: true,
                    message: "All products were successfully recovered!",
                }
            );
        }
    })
}


exports.getProduct = async (req, res) => {
    await Product.findById(req.params.id, (error, product) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The product was not recovered!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: product,
                    success: true,
                    message: "The product has been successfully recovered!",
                }
            );
        }
    })
}

exports.editProduct = async (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, product) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "the product has not been updated!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: product,
                    success: true,
                    message: "the product has been successfully updated!",
                }
            );
        }
    })
}


exports.deleteProduct = async (req, res) => {
    Product.findByIdAndRemove(req.params.id, (error, product) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The product has not been removed!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: product,
                    success: true,
                    message: "The product has been successfully removed!",
                }
            );
        }
    })
}

