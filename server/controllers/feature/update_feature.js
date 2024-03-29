// const Feature = require("../../models/Feature");
const ErrorResponse = require("../../utils/errorResponse");
const crypto = require("crypto");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");
const Idea = require("../../models/Idea");
const User = require("../../models/User");

exports.update_feature = async (req, res, next) => {
  try {
    const { id, title, idea_id, parent_id, content } = req.body;

    var updated_content, content_hash, version;

    const idea = await Idea.findById(idea_id);

    if (!idea) {
      return next(new ErrorResponse("Idea not found!", 404));
    }

    version = idea.ideas_details[req.user._id.toString()] + 1;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(idea);
    console.log(Feature);

    const initial = await Feature.findById(id);

    hashed_content = crypto.createHash("sha256").update(content).digest("hex");

    // console.log("----------------------------------------------------");

    // console.log(hashed_content);

    // console.log("----------------------------------------------------");

    // console.log(initial.content_hash);

    // console.log("----------------------------------------------------");

    if (hashed_content === initial.content_hash) {
      updated_content = 0;
      return next(new ErrorResponse("No Change Detected", 500));
    } else {
      updated_content = 1;
      content_hash = hashed_content;
      console.log("here");
    }

    console.log(initial.version_start);
    console.log(idea.ideas_details[req.user._id.toString()] + 1);

    if (
      initial.version_start ===
        idea.ideas_details[req.user._id.toString()] + 1 ||
      initial.version_end === 0
    ) {
      await Feature.findOneAndUpdate(
        {
          _id: id,
        },
        {
          title: title,
          // user_id: req.user._id.toString(),
          // $push: { contributors: req.user._id.toString() },
          // idea_id: idea_id,
          // parent_id: parent_id,
          content: content,
          // level,
          // version_start: version_start,
          content_hash: content_hash,
          updated_content,
          // available: true,
        }
      );
      if (req.user.engagement_score == null) {
        var engagement_score = 0.1;
      } else {
        var engagement_score = req.user.engagement_score + 0.1;
      }

      await User.findByIdAndUpdate(req.user._id, {
        engagement_score,
      });

      var user_scores = idea.user_scores;
      user_scores[req.user._id.toString()] =
        user_scores[req.user._id.toString()] + 0.1;

      await Idea.findByIdAndUpdate(idea_id, {
        user_scores,
      });

      const feature = await Feature.findById(id);
      res.status(200).json({
        success: true,
        feature: feature,
      });
    } else {
      const response = await Feature.create({
        title: title,
        contributors: [req.user._id.toString()],
        idea_id: idea_id,
        parent_id: parent_id,
        content: content,
        version_start: version,
        content_hash: content_hash,
        updated_content,
        available: true,
        updated_version: version,
      });

      var prev_feature = await Feature.findOneAndUpdate(
        {
          _id: id,
        },
        {
          version_end: version,
          updated_version: version,
          updated_feature: response._id.toString(),
          available: undefined,
        }
      );
      prev_feature = await Feature.findById(id);
      if (req.user.engagement_score == null) {
        var engagement_score = 0.1;
      } else {
        var engagement_score = req.user.engagement_score + 0.1;
      }

      await User.findByIdAndUpdate(req.user._id, {
        engagement_score,
      });

      var user_scores = idea.user_scores;
      user_scores[req.user._id.toString()] =
        user_scores[req.user._id.toString()] + 0.1;

      await Idea.findByIdAndUpdate(idea_id, {
        user_scores,
      });

      var user = await User.findByIdAndUpdate(req.user._id,{
        $push:  {
          events: {
            type: "feature updated",
            detail: response,
            time: new Date()
          }
        }
      });

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
