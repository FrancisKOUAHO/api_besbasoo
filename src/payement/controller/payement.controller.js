require("dotenv").config();
const Payement = require('../model/payement.model');


exports.createPayement = async (req, res) => {
    try {
        const { payement_type, provider, account_no, expiry } = req.body;

        if (!payement_type || !provider || !account_no || !expiry  ) {
            return res.status(422).json({ message: "Les champs title, description sont obligatoires." });
        }

        const PayementDocument = {
            payement_type,
            provider,
            account_no,
            expiry,
        };

        console.log(PayementDocument)

        const PayementCreated = await Payement.create(PayementDocument);


        return res.status(201).json(
            {
                data: PayementCreated,
                success: true,
                message: "The payement has been successfully created",
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "The payement has only been created",
            }
        );
    }
}


exports.getAllPayement = async (req, res) => {
    await Payement.find((error, payement) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "Unable to retrieve payements!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: payement,
                    success: true,
                    message: "All payements were successfully recovered!",
                }
            );
        }
    })
}


exports.getPayement = async (req, res) => {
    await Payement.findById(req.params.id, (error, payement) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The payement was not recovered!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: payement,
                    success: true,
                    message: "The payement has been successfully recovered!",
                }
            );
        }
    })
}

exports.editPayement = async (req, res) => {
    await Payement.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, payement) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "the payement has not been updated!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: payement,
                    success: true,
                    message: "the payement has been successfully updated!",
                }
            );
        }
    })
}


exports.deletePayement = async (req, res) => {
    await Payement.findByIdAndRemove(req.params.id, (error, payement) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The payement has not been removed!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: payement,
                    success: true,
                    message: "The payement has been successfully removed!",
                }
            );
        }
    })
}

