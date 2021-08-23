const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const ProductController = require("../controller/product.controller");
const ProductCategoryController = require("../controller/product_category.controller");


router.post("/create-product", cleanBody, ProductController.createProduct);
router.get("/get-all-product", cleanBody, ProductController.getAllProduct);
router.get("/get-product/:id", cleanBody, ProductController.getProduct);
router.patch("/edit-product/:id", cleanBody, ProductController.editProduct);
router.delete("/delete-product/:id", cleanBody, ProductController.deleteProduct);



router.post("/create-product-category", cleanBody, ProductCategoryController.createProductCategory);
router.get("/get-all-product-category", cleanBody, ProductCategoryController.getAllProductCategory);
router.get("/get-product-category/:id", cleanBody, ProductCategoryController.getProductCategory);
router.patch("/edit-product-category/:id", cleanBody, ProductCategoryController.editProductCategory);
router.delete("/delete-product-category/:id", cleanBody, ProductCategoryController.deleteProductCategory);




module.exports = router;
