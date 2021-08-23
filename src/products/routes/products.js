const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const ProductController = require("../controller/product.controller");

router.post("/create-product", cleanBody, ProductController.Create_product);
router.get("/get-product", cleanBody, ProductController.Get_product);
router.put("/edit-product", cleanBody, ProductController.Edit_product);
router.delete("/delete-product", cleanBody, ProductController.Delete_product);




module.exports = router;
