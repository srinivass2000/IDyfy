const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    idea_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Idea",
    },
    content: {
        type: String,
    },
    feature_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feature",
    },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;