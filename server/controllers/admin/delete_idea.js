const Idea = require("../../models/Idea");
const User = require("../../models/User");
// const FeatureSchema = require("../../models/Feature");
const Comment = require("../../models/Comment");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.delete_idea = async (req, res, next) => {
  try {
    const { idea_id } = req.query;
    console.log(idea_id);
    var idea = await Idea.findById(idea_id);
    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);
    if (idea) {
      if (req.user.isAdmin == true) {
        if (Feature) {
          await Feature.remove();
        }
        for await (var user of idea.contributors) {
          var response = await User.findOneAndUpdate(
            { _id: user },
            {
              $pull: {
                ideas_contributed: idea._id.toString(),
              },
              $inc: { engagement_score: -50 },
            }
          );
          console.log(response);
        }
        await Idea.findOneAndDelete({ _id: idea._id.toString() });
        res.status(200).json({
          success: true,
          data: "Idea & its features Deleted Successfully!",
        });
      } else return next(new ErrorResponse("You are Not an Admin!", 403));
    } else return next(new ErrorResponse("Idea not found", 404));
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
