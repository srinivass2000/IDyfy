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
  ideas_details: Object,
});

const Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;
