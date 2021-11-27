const express = require("express");
const router = express.Router();

const {
    create_idea
} = require('../controllers/idea/create_idea');

router.route("/create-idea").post(create_idea);


module.exports = router;