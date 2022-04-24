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
const { delete_idea } = require("../controllers/admin/delete_idea");
const { protect } = require("../middleware/auth");
const { user_enable } = require("../controllers/admin/user-enable");
const { user_suspend } = require("../controllers/admin/user-suspend");

router.route("/get-details").get(protect, get_details);
router.route("/get-ideas").get(protect, get_ideas);
router.route("/get-users").get(protect, get_users);
router.route("/admin-login").post(login);
router.route("/admin-signup").post(register);
router.route("/send-warning-email").get(protect, send_warning_email);
router.route("/delete-idea").get(protect, delete_idea);
router.route("/user-suspend").get(protect, user_suspend);
router.route("/user-enable").get(protect, user_enable);

module.exports = router;
