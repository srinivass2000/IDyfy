const crypto = require("crypto");
const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    liked_users: Array,
    contributors: Array,
    shares: Array,
    tags: Array,
    date: {
        type: Date,
        default: Date.now(),
    },
    latest_version: {
        type: Number,
        default: 0,
    }
});

const Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;