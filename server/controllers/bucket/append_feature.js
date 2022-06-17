const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.append_feature_from_bucket = async (req, res, next) => {
  try {
    var { idea_id, feature_id, parent_id } = req.query;

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
      return next(new ErrorResponse("Feature not found", 404));
    }

    user_id = req.user._id.toString();

    let new_feature;

    if (temporaries === undefined || temporaries[user_id] === undefined) {
      return next(new ErrorResponse("Feature not found", 404));
    } else {
      let index = -1;
      let array = temporaries[user_id];
      for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i]._id.toString() === feature._id.toString()) {
          index = i;
        }
      }
      if (index == -1) {
        return next(new ErrorResponse("Feature not found", 404));
      }

      var version = idea.ideas_details[req.user._id.toString()];
      console.log(version);
      new_feature = await Feature.create({
        title: feature.title,
        contributors: [req.user._id.toString()],
        idea_id: idea._id.toString(),
        parent_id,
        content: feature.content,
        version_start: ++version,
        available: true,
      });

      temporaries[user_id].splice(index, 1);
      //   temporaries[user_id].push(feature);
    }

    await Idea.findByIdAndUpdate(idea_id, {
      temporaries,
    });

    if (req.user.engagement_score == null) {
      var engagement_score = 0.2;
    } else {
      var engagement_score = req.user.engagement_score + 0.2;
    }
    await User.findByIdAndUpdate(req.user._id, {
      engagement_score,
    });

    var user_scores = idea.user_scores;
    user_scores[req.user._id.toString()] =
      user_scores[req.user._id.toString()] + 0.1;

    await Idea.findByIdAndUpdate(idea_id, {
      user_scores,
    });

    res.status(200).json({
      feature: new_feature,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
