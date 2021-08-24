const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const ProductController = require("../controller/product.controller");


router.post("/create-product", cleanBody, ProductController.createProduct);
router.get("/get-product/:id", cleanBody, ProductController.getProduct);
router.get("/get-all-product", cleanBody, ProductController.getAllProduct);
router.patch("/edit-product/:id", cleanBody, ProductController.editProduct);
router.delete("/delete-product/:id", cleanBody, ProductController.deleteProduct);



module.exports = router;
