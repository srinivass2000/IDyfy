const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const { create_feature } = require("../controllers/feature/create_feature");

const { fetch_features } = require("../controllers/feature/fetch_features");

const { update_feature } = require("../controllers/feature/update_feature");

const { delete_feature } = require("../controllers/feature/delete_feature");

const {
  fetch_features_version_wise,
} = require("../controllers/feature/fetch_features_by_version");

const { version_end } = require("../controllers/feature/version_end");

router.route("/create-feature").post(protect, create_feature);
router.route("/update-feature").post(protect, update_feature);
router.route("/version-end").post(protect, version_end);
router.route("/fetch-features").get(protect, fetch_features);
router
  .route("/fetch-features-version-wise")
  .get(protect, fetch_features_version_wise);
router.route("/delete-feature").get(protect, delete_feature);

module.exports = router;
