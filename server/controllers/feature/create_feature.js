// const Feature = require("../../models/Feature");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.create_feature = async (req, res, next) => {
  try {
    const { title, idea_id, parent_id, content, version_start, level } =
      req.body;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    const feature = await Feature.create({
      title,
      user_id: req.user._id.toString(),
      idea_id,
      parent_id,
      content,
      version_start,
      level,
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
