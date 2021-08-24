require("dotenv").config();


const Inventory = require('../model/inventory.model');


exports.createInventory = async (req, res) => {
    try {
        const {quantity} = req.body;

        if (!quantity) {
            return res.status(422).json({message: "Les champs title, description sont obligatoires."});
        }

        const productInventory = {quantity};

        const inventory = await Inventory.create(productInventory);

        return res.status(201).json(
            {
                data: inventory,
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


exports.getAllInventory = async (req, res) => {
    await Inventory.find((error, inventory) => {
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
                    data: inventory,
                    success: true,
                    message: "All products were successfully recovered!",
                }
            );
        }
    })
}


exports.getInventory = async (req, res) => {
    await Inventory.findById(req.params.id, (error, inventory) => {
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
                    data: inventory,
                    success: true,
                    message: "The product has been successfully recovered!",
                }
            );
        }
    })
}

exports.editInventory = async (req, res) => {
    await Inventory.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, inventory) => {
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
                    data: inventory,
                    success: true,
                    message: "the product has been successfully updated!",
                }
            );
        }
    })
}


exports.deleteInventory = async (req, res) => {
    await Inventory.findByIdAndRemove(req.params.id, (error, inventory) => {
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
                    data: inventory,
                    success: true,
                    message: "The product has been successfully removed!",
                }
            );
        }
    })
}

