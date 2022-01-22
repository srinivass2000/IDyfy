const express = require("express");
const router = express.Router();

const { search_all } = require("../controllers/search/all");

const { search_by_tags } = require("../controllers/search/by_tags");

const { search_by_title } = require("../controllers/search/by_title");

const { search_by_user } = require("../controllers/search/by_user");

// const { protect } = require("../middleware/auth");

router.route("/all").get(search_all);
router.route("/people").get(search_by_user);
router.route("/tags").get(search_by_tags);
router.route("/title").get(search_by_title);

module.exports = router;