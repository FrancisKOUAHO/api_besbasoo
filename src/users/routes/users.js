const express = require("express");
const router = express.Router();

const cleanBody = require("../../../middlewares/cleanbody");
const { validateToken } = require("../../../middlewares/validateToken");

const AuthController = require("../controller/user.controller");

router.post("/signup", cleanBody, AuthController.Signup);
router.post("/signin", cleanBody, AuthController.Login);

router.get("/profile", cleanBody, AuthController.SerializeUser);

router.patch("/activate", cleanBody, AuthController.Activate);

router.patch("/forgot", cleanBody, AuthController.ForgotPassword);

router.patch("/reset", cleanBody, AuthController.ResetPassword);

router.get("/referred", validateToken, AuthController.ReferredAccounts);

router.get("/logout", validateToken, AuthController.Logout);

module.exports = router;