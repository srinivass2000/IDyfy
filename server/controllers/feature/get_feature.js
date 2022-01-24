const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.get_feature = async (req, res, next) => {
  try {
    const idea_id = req.query.idea_id;
    const feature_id = req.query.feature_id;

    console.log(idea_id.toString());
    console.log(feature_id.toString());

    if (!idea_id || !feature_id) {
      return next(
        new ErrorResponse("Please Provide Idea Id and Feature Id", 404)
      );
    }

    const idea = await Idea.findById(idea_id);

    if (!idea) {
      return next(new ErrorResponse("Idea not found", 404));
    }

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    const feature = await Feature.findById(feature_id);

    console.log(feature);

    if (feature) {
      var can_edit;

      if (feature.user_id === req.user._id.toString()) {
        can_edit = true;
      } else {
        can_edit = false;
      }
    }

    const comments = await Comment.find({
      idea_id: idea_id,
      feature_id: feature_id,
    });

    var user_id = req.user._id.toString();

    console.log(user_id);

    // var can_edit = idea.contributors.includes(user_id);

    res.status(200).json({
      success: true,
      feature,
      comments,
      can_edit,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
