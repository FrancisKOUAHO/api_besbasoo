const express = require("express");
const router = express.Router();

const cleanBody = require('../../../middlewares/cleanbody');
const CategoryController = require("../controller/category.controller");



router.post("/create-category", cleanBody, CategoryController.createCategory);
router.get("/get-category/:id", cleanBody, CategoryController.getCategory);
router.get("/get-all-category", cleanBody, CategoryController.getAllCategory);
router.patch("/edit-category/:id", cleanBody, CategoryController.editCategory);
router.delete("/delete-category/:id", cleanBody, CategoryController.deleteCategory);



module.exports = router;
