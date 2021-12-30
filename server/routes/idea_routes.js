const express = require("express");
const router = express.Router();

const {
    create_idea
} = require('../controllers/idea/create_idea');

const {
    get_idea
} = require('../controllers/idea/get_idea');

const {
    get_ideas
} = require('../controllers/home/feed-page');

const {
    get_contributed_ideas
} = require('../controllers/home/user_ideas');


router.route("/create-idea").post(create_idea);
router.route("/get-idea").get(get_idea);
router.route("/get-ideas").get(get_ideas);
router.route("/get-contributed-ideas").get(get_contributed_ideas);



module.exports = router;