// const Feature = require("../../models/Feature");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");
const User = require("../../models/User");
const Idea = require("../../models/Idea");

exports.create_feature = async (req, res, next) => {
  try {
    const { title, idea_id, parent_id, content } = req.body;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    if (req.user.engagement_score == null) {
      var engagement_score = 0.2;
    } else {
      var engagement_score = req.user.engagement_score + 0.2;
    }

    var user = await User.findByIdAndUpdate(req.user._id, {
      engagement_score,
    });

    const idea = await Idea.findById(idea_id);

    var version = idea.ideas_details[req.user._id.toString()];

    const feature = await Feature.create({
      title,
      contributors: [req.user._id.toString()],
      idea_id,
      parent_id,
      content,
      version_start: ++version,
      available: true,
    });
    res.status(200).json({
      success: true,
      feature,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
