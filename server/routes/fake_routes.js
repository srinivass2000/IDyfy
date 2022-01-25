const express = require("express");
const router = express.Router();

const { fake_idea } = require("../utils/fake data/faker-ideas");

const { fake_features } = require("../utils/fake data/faker-features");

const { testing } = require("../utils/testing");

router.route("/create-fake-ideas").post(fake_idea);
router.route("/create-fake-features").post(fake_features);

router.route("/testing").post(testing);

module.exports = router;
