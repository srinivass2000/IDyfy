// const Feature = require("../../models/Feature");
const ErrorResponse = require("../../utils/errorResponse");
const crypto = require("crypto");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");
const Idea = require("../../models/Idea");

exports.update_feature = async (req, res, next) => {
  try {
    const { id, title, idea_id, parent_id, content, version_start, level } =
      req.body;

    // var user_id = req.user._id;

    var updated_content, content_hash;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    const idea = await Idea.findById(idea_id);

    console.log(idea);

    const initial = await Feature.findById(id);

    hashed_content = crypto.createHash("sha256").update(content).digest("hex");
    console.log(hashed_content);

    if (hashed_content === initial.content_hash) {
      updated_content = 0;
    } else {
      updated_content = 1;
      content_hash = hashed_content;
      console.log("here");
    }

    a = req.user._id;
    console.log(a);
    console.log(initial.version_start);
    console.log(idea.ideas_details[a] + 1);

    if (
      initial.version_start === idea.ideas_details[req.user._id] + 1 ||
      initial.version_end === 0
    ) {
      const response = await Feature.findOneAndUpdate(
        {
          _id: id,
        },
        {
          title: title,
          user_id: req.user._id,
          idea_id: idea_id,
          parent_id: parent_id,
          content: content,
          level,
          version_start: version_start,
          content_hash: content_hash,
          updated_content,
          available: true,
        }
      );

      const feature = await Feature.findById(id);
      res.status(200).json({
        success: true,
        feature: feature,
      });
    } else {
      const response = await Feature.create({
        title: title,
        user_id: req.user._id,
        idea_id: idea_id,
        parent_id: parent_id,
        content: content,
        level,
        version_start: version_start,
        content_hash: content_hash,
        updated_content,
        available: true,
        updated_version: version_start,
      });

      var prev_feature = await Feature.findOneAndUpdate(
        {
          _id: id,
        },
        {
          version_end: version_start,
          updated_version: version_start,
          updated_feature: response._id.toString(),
          available: undefined,
        }
      );
      prev_feature = await Feature.findById(id);
      res.status(200).json({
        success: true,
        new_feature: response,
        prev_feature: prev_feature,
      });
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
