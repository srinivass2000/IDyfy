const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features_by_parent = async (req, res, next) => {
  try {
    const { idea_id, parent_id } = req.body;

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    var results = await Feature.find(
      {
        parent_id,
      },
      { content: 0, content_hash: 0 }
    );

    res.status(200).json({
      success: true,
      features: results,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
