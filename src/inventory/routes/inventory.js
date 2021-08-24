const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const InventoryController = require("../controller/inventory.controller");


router.post("/create-inventory", cleanBody, InventoryController.createInventory);
router.get("/get-inventory/:id", cleanBody, InventoryController.getInventory);
router.get("/get-all-inventory", cleanBody, InventoryController.getAllInventory);
router.patch("/edit-inventory/:id", cleanBody, InventoryController.editInventory);
router.delete("/delete-inventory/:id", cleanBody, InventoryController.deleteInventory);




module.exports = router;
