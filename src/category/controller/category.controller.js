require("dotenv").config();


const {category, CategoryDocument} = require('../model/category.model');


exports.createCategory = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description ) {
            return res.status(422).json({ message: "Les champs title, description sont obligatoires." });
        }

        const categoryCreated = await category.create(CategoryDocument);

        return res.status(201).json(
            {
                data: categoryCreated,
                success: true,
                message: "The product category has been successfully created",
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "The product category has only been created",
            }
        );
    }
}


exports.getAllCategory = async (req, res) => {
    await category.find((error, product) => {
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


exports.getCategory = async (req, res) => {
    await category.findById(req.params.id, (error, product) => {
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

exports.editCategory = async (req, res) => {
    await category.findByIdAndUpdate(req.params.id, {
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


exports.deleteCategory = async (req, res) => {
    await category.findByIdAndRemove(req.params.id, (error, product) => {
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

