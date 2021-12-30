const express = require("express");
const router = express.Router();

const {
    fake_idea
} = require('../utils/fake data/faker-ideas');

router.route("/create-fake-ideas").post(fake_idea);

module.exports = router;