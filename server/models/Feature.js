const crypto = require("crypto");
const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide Title"],
  },
  user_id: {
    type: String,
    required: true,
  },
  idea_id: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  content_hash: {
    type: String,
  },
  updated_content: {
    type: Boolean,
  },
  version_start: {
    type: Number,
    default: 0,
  },
  version_end: {
    type: Number,
    default: 0,
  },
  updated_version: {
    type: Number,
  },
  updated_feature: {
    type: String,
  },
  deleted_version: {
    type: Number,
  },
});

FeatureSchema.pre("save", async function (next) {
  hashed_content = crypto
    .createHash("sha256")
    .update(this.content)
    .digest("hex");
  console.log(hashed_content);
  if (hashed_content === this.content_hash) {
    this.updated_content = 0;
    next();
  } else {
    this.updated_content = 1;
    this.content_hash = hashed_content;
    console.log("here");
    next();
  }
});

const Feature = mongoose.model("Feature", FeatureSchema);

module.exports = {
  Feature,
  FeatureSchema,
};
