const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.add_to_bucket = async (req, res, next) => {
  try {
    var { idea_id, feature_id } = req.query;

    if (!idea_id || !feature_id) {
      return next(
        new ErrorResponse("Please provide valid Idea_id and Feature_id", 404)
      );
    }
    var idea = await Idea.findById(idea_id);

    if (!idea) {
      return next(new ErrorResponse("Idea not found", 404));
    }

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    if (!Feature) {
      return next(new ErrorResponse("Feature table not found", 404));
    }

    var feature = await Feature.findById(feature_id);

    if (!feature) {
      return next(new ErrorResponse("Feature not found", 404));
    }

    var temporaries = idea.temporaries;
    if (!temporaries) {
      temporaries = {};
    }

    user_id = req.user._id.toString();

    if (temporaries === undefined || temporaries[user_id] === undefined) {
      temporaries[user_id] = [feature];
    } else {
      let index = -1;
      let array = temporaries[user_id];
      for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i]._id.toString() === feature._id.toString()) {
          index = i;
        }
      }
      if (index != -1) {
        return next(new ErrorResponse("Feature Already Exists", 403));
      }
      temporaries[user_id].push(feature);
    }

    await Idea.findByIdAndUpdate(idea_id, {
      temporaries,
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
