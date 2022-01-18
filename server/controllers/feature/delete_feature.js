const ErrorResponse = require("../../utils/errorResponse");
const crypto = require("crypto");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");
const Idea = require("../../models/Idea");

exports.delete_feature = async (req, res, next) => {
  try {
    const { id, idea_id } = req.body;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    const idea = await Idea.findById(idea_id);

    console.log(idea);

    const feature = await Feature.findById(id);

    if (
      feature.version_start === idea.ideas_details[req.user._id] + 1 ||
      feature.version_end === 0
    ) {
      const deleted_feature = await Feature.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        deleted_feature: deleted_feature,
      });
    } else {
      var deleted_feature = await Feature.findOneAndUpdate(
        {
          _id: id,
        },
        {
          deleted_version: idea.ideas_details[req.user._id] + 1,
          version_end: idea.ideas_details[req.user._id] + 1,
        }
      );

      deleted_feature = await Feature.findById(id);

      res.status(200).json({
        success: true,
        deleted_feature: deleted_feature,
      });
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
