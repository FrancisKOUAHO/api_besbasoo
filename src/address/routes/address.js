const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const AddressController = require("../controller/address.controller");


router.post("/create-address", cleanBody, AddressController.createAddress);
router.get("/get-address/:id", cleanBody, AddressController.getAddress);
router.get("/get-all-address", cleanBody, AddressController.getAllAddress);
router.patch("/edit-address/:id", cleanBody, AddressController.editAddress);
router.delete("/delete-address/:id", cleanBody, AddressController.deleteAddress);




module.exports = router;
