require("dotenv").config();


const {Product, ProductDocument} = require('../model/product.model');


exports.createProduct = async (req, res) => {
    try {
        const {title, description, sku, image, price} = req.body;

        if (!title || !description || !sku || !image || !price) {
            return res.status(422).json({message: "Les champs title, description, sku, image, price sont obligatoires."});
        }

        const productCreated = await Product.create(ProductDocument);

        return res.status(201).json(
            {
                data: productCreated,
                success: true,
                message: "The product has been successfully created",
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "The product has only been created",
            }
        );
    }
}


exports.getAllProduct = async (req, res) => {

    await Product.find({}).populate("Product_category, Product_inventory").exec((error, product) => {
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
    await Product.findById(req.params.id).populate("Product_category, Product_inventory").exec((error, product) => {
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
    await Product.findByIdAndUpdate(req.params.id, {
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
    await Product.findByIdAndRemove(req.params.id, (error, product) => {
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

