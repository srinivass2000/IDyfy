// const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features = async (req, res, next) => {
  try {
    const idea_id = req.query.id;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    var results = await Feature.find({}).sort({
      version_end: "desc",
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
