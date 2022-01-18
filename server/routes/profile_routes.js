const express = require("express");
const router = express.Router();

const { get_profile } = require("../controllers/home/get-profile");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, get_profile);

module.exports = router;
