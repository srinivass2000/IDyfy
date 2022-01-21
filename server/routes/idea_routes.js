const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const { create_idea } = require("../controllers/idea/create_idea");

const { get_idea } = require("../controllers/idea/get_idea");

const { update_idea } = require("../controllers/idea/update_idea");

const { get_ideas } = require("../controllers/home/feed-page");

const { get_contributed_ideas } = require("../controllers/home/user_ideas");

const { star_idea } = require("../controllers/starred_ideas/star_idea");

const { unstar_idea } = require("../controllers/starred_ideas/unstar_idea");

const {
  get_starred_ideas,
} = require("../controllers/starred_ideas/starred_ideas");

router.route("/create-idea").post(protect, create_idea);
router.route("/get-idea").get(protect, get_idea);
router.route("/update-idea").post(protect, update_idea);
router.route("/get-ideas/:skip").get(protect, get_ideas);
router.route("/get-contributed-ideas").get(protect, get_contributed_ideas);
router.route("/star-idea").get(protect, star_idea);
router.route("/unstar-idea").get(protect, unstar_idea);
router.route("/starred-ideas").get(protect, get_starred_ideas);

module.exports = router;
