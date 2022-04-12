const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.pull_idea = async (req, res, next) => {
  try {
    const { idea_id, from } = req.body;

    var idea = await Idea.findById(idea_id);
    if (idea) {
      var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

      var idea = await Idea.findByIdAndUpdate(idea._id, {
        $push: { contributers: req.user._id.toString() },
      });

      var user = await User.findByIdAndUpdate(req.user._id, {
        $push: { ideas_contributed: idea._id.toString() },
      });

      var result = await Feature.updateMany(
        {
          version_end: { $ne: 0 },
          contributors: { $in: [from.toString()] },
        },
        {
          $push: { contributors: req.user._id.toString() },
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
