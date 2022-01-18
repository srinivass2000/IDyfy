const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const { post_comment } = require("../controllers/comments/post_comment");

const { get_comments } = require("../controllers/comments/get_comments");

router.route("/post-comment").post(protect, post_comment);
router.route("/get-comments").get(protect, get_comments);

module.exports = router;
