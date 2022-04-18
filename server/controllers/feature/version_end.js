// const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.version_end = async (req, res, next) => {
  try {
    const { idea_id } = req.body;

    const idea = await Idea.findOne({
      _id: idea_id,
    });

    var user_id = req.user._id.toString();

    var latest_version = parseInt(idea.ideas_details[user_id]);
    // var latest_version = 30;

    console.log(latest_version);

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    var features_affected;
    try {
      features_affected = await Feature.updateMany(
        {
          $and: [
            {
              updated_feature: { $exists: false },
              deleted_version: { $exists: false },
              // version_end: latest_version,
              available: true,
              contributors: { $in: [req.user._id.toString()] },
            },
          ],
        },
        {
          version_end: ++latest_version,
          available: true,
        }
      );

      // console.log("here");
      var ideas_details = {};
      ideas_details = idea.ideas_details;
      ideas_details[user_id] = latest_version;

      console.log(ideas_details);

      const response = await Idea.findOneAndUpdate(
        {
          _id: idea_id,
        },
        {
          ideas_details,
        }
      );

      console.log(features_affected);
    } catch (error) {
      console.log(error);
      return next(new ErrorResponse(error.message, 500));
    }

    const features = await Feature.find({
      version_end: latest_version,
    });

    var user_scores = idea.user_scores;
    user_scores[req.user._id.toString()] =
      user_scores[req.user._id.toString()] + 0.75;

    await Idea.findByIdAndUpdate(idea_id, {
      user_scores,
    });

    res.status(200).json({
      success: true,
      features,
      features_affected: features_affected.modifiedCount,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
