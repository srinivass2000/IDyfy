const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.pull_idea = async (req, res, next) => {
  try {
    const { idea_id, from } = req.query;

    var idea = await Idea.findById(idea_id);
    if (idea) {
      if (idea.contributors.includes(req.user._id.toString())) {
        return next(
          new ErrorResponse(
            "You cannot pull this Idea as you are already a contributor! Kindly edit your owm Graph!",
            403
          )
        );
      }
      var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

      console.log(Feature);
      console.log(idea);
      let contributors;
      contributors = idea.contributors;
      contributors.push(req.user._id.toString());
      // console.log(contributors);
      let ideas_details;
      ideas_details = idea.ideas_details;
      console.log(ideas_details);
      ideas_details[req.user._id.toString()] = ideas_details[from.toString()];
      var idea = await Idea.findByIdAndUpdate(idea._id, {
        // $push: { contributers: [req.user._id.toString()] },
        contributors,
        ideas_details,
      });

      await User.findByIdAndUpdate(req.user._id, {
        $push: { ideas_contributed: idea._id.toString() },
      });

      await User.findByIdAndUpdate(from.toString(), {
        $inc: { engagement_score: 5 },
      });

      var user_scores = idea.user_scores;
      if (user_scores[from.toString()]) {
        user_scores[from.toString()] = user_scores[from.toString()] + 0.75;
      } else {
        user_scores[from.toString()] = 0.75;
      }
      await Idea.findByIdAndUpdate(idea_id, {
        user_scores,
      });
      var result = await Feature.updateMany(
        {
          version_end: { $ne: 0 },
          contributors: { $in: [from.toString()] },
        },
        {
          $push: { contributors: [req.user._id.toString()] },
          // contributors: { $push: req.user._id.toString() },
        }
      );

      res.status(200).json({
        success: true,
        idea,
        result,
      });
    } else {
      return next(new ErrorResponse("Idea does not exist!", 404));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
