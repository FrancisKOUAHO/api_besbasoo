const express = require("express");
const router = express.Router();
const cors = require("cors");

const cleanBody = require("../../../middlewares/cleanbody");
const {validateToken} = require("../../../middlewares/validateToken");

const AuthController = require("../controller/user.controller");

router.post("/signup", cors(corsOptions), cleanBody, AuthController.SignUp);
router.post("/signin", cors(corsOptions), cleanBody, AuthController.SignIn);

router.get("/profile", cors(corsOptions), cleanBody, AuthController.SerializeUser);

router.patch("/activate", cors(corsOptions),  cleanBody, AuthController.Activate);

router.patch("/forgot", cors(corsOptions), cleanBody, AuthController.ForgotPassword);

router.patch("/reset", cors(corsOptions),  cleanBody, AuthController.ResetPassword);

router.get("/referred", cors(corsOptions), validateToken, AuthController.ReferredAccounts);

router.get("/logout", cors(corsOptions),  validateToken, AuthController.Logout);

module.exports = router;
