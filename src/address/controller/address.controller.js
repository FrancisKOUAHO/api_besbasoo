require("dotenv").config();

const {Address, AddressDocument} = require('../model/address.model');


exports.createAddress = async (req, res) => {
    try {
        const {address_line, city, postal_code, country, telephone, mobile} = req.body;

        if (!address_line || !city || !postal_code || !country || !telephone || !mobile) {
            return res.status(422).json({message: "Les champs address_line, city, postal_code, country, telephone, mobile sont obligatoires."});
        }

        const AddressCreated = await Address.create(AddressDocument);

        return res.status(201).json(
            {
                data: AddressCreated,
                success: true,
                message: "The address has been successfully created",
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "The address has only been created",
            }
        );
    }
}


exports.getAllAddress = async (req, res) => {
    await Address.find((error, address) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "Unable to retrieve addresss!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: address,
                    success: true,
                    message: "All addresss were successfully recovered!",
                }
            );
        }
    })
}


exports.getAddress = async (req, res) => {
    await Address.findById(req.params.id, (error, address) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The address was not recovered!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: address,
                    success: true,
                    message: "The address has been successfully recovered!",
                }
            );
        }
    })
}

exports.editAddress = async (req, res) => {
    await Address.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, address) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "the address has not been updated!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: address,
                    success: true,
                    message: "the address has been successfully updated!",
                }
            );
        }
    })
}


exports.deleteAddress = async (req, res) => {
    await Address.findByIdAndRemove(req.params.id, (error, address) => {
        if (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "The address has not been removed!",
                }
            );
        } else {
            return res.status(201).json(
                {
                    data: address,
                    success: true,
                    message: "The address has been successfully removed!",
                }
            );
        }
    })
}

