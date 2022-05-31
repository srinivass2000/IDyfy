const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    idea_id: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    feature_id: {
      type: String,
      default: null,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
