require("dotenv").config();


const {Inventory, InventoryDocument} = require('../model/inventory.model');


exports.createInventory = async (req, res) => {
    try {
        const {quantity} = req.body;

        if (!quantity) {
            return res.status(422).json({message: "Le champ quantity est obligatoires."});
        }

        const inventory = await Inventory.create(InventoryDocument);

        return res.status(201).json(
            {
                data: inventory,
                success: true,
                message: "The inventory has been successfully created",
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "The inventory has only been created",
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
                    message: "All inventories were successfully recovered!",
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
                    message: "The inventory was not recovered!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: inventory,
                    success: true,
                    message: "The inventory has been successfully recovered!",
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
                    message: "the inventory has not been updated!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: inventory,
                    success: true,
                    message: "the inventory has been successfully updated!",
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
                    message: "The inventory has not been removed!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: inventory,
                    success: true,
                    message: "The inventory has been successfully removed!",
                }
            );
        }
    })
}

