const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const PayementController = require("../controller/payement.controller");



router.post("/create-payement", cleanBody, PayementController.createPayement);
router.get("/get-payement/:id", cleanBody, PayementController.getPayement);
router.get("/get-all-payement", cleanBody, PayementController.getAllPayement);
router.patch("/edit-payement/:id", cleanBody, PayementController.editPayement);
router.delete("/delete-payement/:id", cleanBody, PayementController.deletePayement);



module.exports = router;
