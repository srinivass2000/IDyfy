const express = require("express");
const router = express.Router();

const {
    create_feature
} = require('../controllers/feature/create_feature');

const {
    update_feature
} = require('../controllers/feature/update_feature');

router.route("/create-feature").post(create_feature);
router.route("/update-feature").post(update_feature);

module.exports = router;