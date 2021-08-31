const express = require("express");
const router = express.Router();
const cors = require("cors");

const cleanBody = require("../../../middlewares/cleanbody");
const {validateToken} = require("../../../middlewares/validateToken");

const AuthController = require("../controller/user.controller");

router.post("/signup", cleanBody, AuthController.SignUp);

router.post("/signin", cleanBody, AuthController.SignIn);

router.get("/me", cleanBody, AuthController.getUserDetails);

router.patch("/activate", cleanBody, AuthController.Activate);

router.patch("/forgot", cleanBody, AuthController.ForgotPassword);

router.patch("/reset", cleanBody, AuthController.ResetPassword);

router.get("/referred", validateToken, AuthController.ReferredAccounts);

router.patch("/update-user/:id", validateToken, AuthController.updateUser);

router.patch("/logout", validateToken, AuthController.Logout);


module.exports = router;
