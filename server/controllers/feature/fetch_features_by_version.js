// const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features_version_wise = async (req, res, next) => {
  try {
    const { idea_id, version } = req.body;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    // console.log(Feature);

    var results = await Feature.find({
      //   $and: [
      //     {
      version_start: {
        $lte: version,
      },
      version_end: {
        $gte: version,
      },

      contributors: { $in: [req.user._id.toString()] },
    });

    res.status(200).json({
      success: true,
      features: results,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
