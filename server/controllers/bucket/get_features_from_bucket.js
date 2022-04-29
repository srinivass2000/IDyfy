const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.get_features_from_bucket = async (req, res, next) => {
  try {
    var { idea_id } = req.query;

    if (!idea_id) {
      return next(new ErrorResponse("Please provide valid Idea_id", 404));
    }
    var idea = await Idea.findById(idea_id);

    if (!idea) {
      return next(new ErrorResponse("Idea not found", 404));
    }

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    if (!Feature) {
      return next(new ErrorResponse("Feature table not found", 404));
    }

    var temporaries = idea.temporaries;
    if (!temporaries) {
      res.status(200).json({
        success: true,
        features: [],
      });
      // temporaries = {};
    }

    user_id = req.user._id.toString();

    if (temporaries === undefined || temporaries[user_id] === undefined) {
      res.status(200).json({
        success: true,
        features: [],
      });
    } else {
      let array = temporaries[user_id];
      res.status(200).json({
        success: true,
        features: array,
      });
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
