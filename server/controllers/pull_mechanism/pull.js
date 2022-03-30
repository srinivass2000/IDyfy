const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.version_end = async (req, res, next) => {
  try {
    const { idea_id, from } = req.body;

    res.status(200).json({
      // success: true,
      // features,
      // features_affected: features_affected.modifiedCount,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
