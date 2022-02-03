const express = require("express");
const router = express.Router();

const { fake_idea } = require("../utils/fake data/faker-ideas");

const { fake_features } = require("../utils/fake data/faker-features");

const { testing } = require("../tests/testing");

// const { testing_model } = require("../utils/model_testing");

router.route("/create-fake-ideas").post(fake_idea);
router.route("/create-fake-features").post(fake_features);

router.route("/testing").post(testing);

// router.route("/testing-model").post(testing_model);

module.exports = router;
