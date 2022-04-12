const express = require("express");
const router = express.Router();
const upload = require("../utils/uploads");

const { get_profile } = require("../controllers/profile/get-profile");
const { update_profile } = require("../controllers/profile/update-profile");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, get_profile);

router
  .route("/update-profile")
  .put(protect, upload.single("file"), update_profile);

module.exports = router;
