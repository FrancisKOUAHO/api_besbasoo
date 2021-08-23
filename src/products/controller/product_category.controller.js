require("dotenv").config();


const Product_category = require('../model/product_category.model');


exports.createProductCategory = async (req, res) => {
    await Product_category.create(req.body, (error, product) => {
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


exports.getAllProductCategory = async (req, res) => {
    await Product_category.find((error, product) => {
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


exports.getProductCategory = async (req, res) => {
    await Product_category.findById(req.params.id, (error, product) => {
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

exports.editProductCategory = async (req, res) => {
    await Product_category.findByIdAndUpdate(req.params.id, {
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


exports.deleteProductCategory = async (req, res) => {
    await Product_category.findByIdAndRemove(req.params.id, (error, product) => {
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

