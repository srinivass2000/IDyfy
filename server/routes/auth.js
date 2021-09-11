const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth/auth");
const {
  forgotPassword,
  resetPassword,
} = require("../controllers/auth/forgot-password/forgotPassword");

const verifyEmail = require("../controllers/auth/email-verification/emailVerification");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/email/verify/:emailVerificationToken").post(verifyEmail);

module.exports = router;
