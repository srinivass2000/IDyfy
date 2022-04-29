const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const { create_feature } = require("../controllers/feature/create_feature");

const { fetch_features } = require("../controllers/feature/fetch_features");

const { get_feature } = require("../controllers/feature/get_feature");

const { update_feature } = require("../controllers/feature/update_feature");

const { delete_feature } = require("../controllers/feature/delete_feature");

const {
  fetch_features_by_parent,
} = require("../controllers/graph/feature_by_parent");

const {
  fetch_features_version_wise,
} = require("../controllers/feature/fetch_features_by_version");

const { version_end } = require("../controllers/feature/version_end");

const { idea_details } = require("../controllers/graph/idea_details");

const { pull_idea } = require("../controllers/graph/pull");
const {
  get_user_latest_version,
} = require("../controllers/graph/get_latest_version");

const { add_to_bucket } = require("../controllers/bucket/add_to_bucket");
const {
  delete_from_bucket,
} = require("../controllers/bucket/delete-from-bucket");

const {
  get_features_from_bucket,
} = require("../controllers/bucket/get_features_from_bucket");

const {
  append_feature_from_bucket,
} = require("../controllers/bucket/append_feature");

router.route("/create-feature").post(protect, create_feature);
router.route("/get-feature").get(protect, get_feature);
router.route("/update-feature").put(protect, update_feature);
router.route("/version-end").get(protect, version_end);
router.route("/fetch-features").get(protect, fetch_features);
router
  .route("/fetch-features-version-wise")
  .get(protect, fetch_features_version_wise);
router.route("/delete-feature").get(protect, delete_feature);
router.route("/features-by-parent").get(protect, fetch_features_by_parent);
router.route("/idea-details").get(protect, idea_details);
router.route("/get-latest-version").get(protect, get_user_latest_version);
router.route("/pull").get(protect, pull_idea);
router.route("/add-to-bucket").get(protect, add_to_bucket);
router.route("/delete-from-bucket").get(protect, delete_from_bucket);
router
  .route("/append-feature-from-bucket")
  .get(protect, append_feature_from_bucket);
router
  .route("/get-features-from-bucket")
  .get(protect, get_features_from_bucket);

module.exports = router;
