const express = require("express");
const router = express.Router();

const {
    protect
} = require("../middleware/auth");

const {
    create_feature
} = require('../controllers/feature/create_feature');

const {
    update_feature
} = require('../controllers/feature/update_feature');

const {
    version_end
} = require('../controllers/feature/version_end');


router.route("/create-feature").post(protect, create_feature);
router.route("/update-feature").post(protect, update_feature);
router.route("/version-end").post(protect, version_end);

module.exports = router;