const crypto = require("crypto");
const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema(
  {
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
    starred_by: Array,
    ideas_details: Object,
    links: Array,
  },
  { timestamps: true }
);

IdeaSchema.index({
  title: "text",
});

const Idea = mongoose.model("Idea", IdeaSchema);

Idea.createIndexes();
module.exports = Idea;
