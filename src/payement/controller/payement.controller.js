require("dotenv").config();


const Payement = require('../model/payement.model');


exports.createPayement = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description ) {
            return res.status(422).json({ message: "Les champs title, description sont obligatoires." });
        }

        const payement = {
            title,
            description,
        };

        const PayementCreated = await Payement.create(payement);

        return res.status(201).json(
            {
                data: PayementCreated,
                success: true,
                message: "The product Payement has been successfully created",
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "The product Payement has only been created",
            }
        );
    }
}


exports.getAllPayement = async (req, res) => {
    await Payement.find((error, product) => {
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


exports.getPayement = async (req, res) => {
    await Payement.findById(req.params.id, (error, product) => {
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

exports.editPayement = async (req, res) => {
    await Payement.findByIdAndUpdate(req.params.id, {
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


exports.deletePayement = async (req, res) => {
    await Payement.findByIdAndRemove(req.params.id, (error, product) => {
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

