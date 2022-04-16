const express = require("express");
const router = express.Router();

//const { protect } = require("../middleware/auth");
const { get_details } = require("../controllers/admin/get_details");
const { get_ideas } = require("../controllers/admin/get_ideas");
const { login } = require("../controllers/admin/auth/auth");
const { register } = require("../controllers/admin/auth/auth");
const { get_users } = require("../controllers/admin/get_users");
const {
  send_warning_email,
} = require("../controllers/admin/send_warning_email/send_warning_email");
const { protect } = require("../middleware/auth");

router.route("/get-details").get(protect, get_details);
router.route("/get-ideas").get(protect, get_ideas);
router.route("/get-users").get(protect, get_users);
router.route("/admin-login").post(login);
router.route("/admin-signup").post(register);
router.route("/send-warning-email").get(send_warning_email);

module.exports = router;
