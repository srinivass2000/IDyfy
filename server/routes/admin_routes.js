const express = require("express");
const router = express.Router();

//const { protect } = require("../middleware/auth");
const { get_details } = require("../controllers/admin/get_details");
const { get_ideas } = require("../controllers/admin/get_ideas");
const {
  send_warning_email,
} = require("../controllers/admin/send_warning_email/send_warning_email");

router.route("/get-details").get(get_details);
router.route("/get-ideas").get(get_ideas);
router.route("/send-warning-email").get(send_warning_email);

module.exports = router;
