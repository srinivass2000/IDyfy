const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.version_end = async (req, res, next) => {
  try {
    const { idea_id } = req.body;

    const idea = await Idea.findOne({
      _id: idea_id,
    });

    const user = await User.findOne({
      _id: user_id,
    });

    const response = await Idea.findOneAndUpdate(
      {
        _id: idea_id,
      },
      {
        latest_version: ++idea.latest_version,
      }
    );

    // const response = await User.idea_detials.findOneAndUpdate({
    //     _id: idea_id
    // }, {
    //     latest_version: ++User.idea_detials.latest_version,
    // });

    const final = await user.idea_details.findOne({
      _id: idea_id,
    });

    // const final = await user.idea_detials.findOne({
    //     _id: idea_id
    // });

    console.log(req.user);
    var features_affected;
    try {
      features_affected = await Feature.updateMany(
        {
          idea_id: idea_id,
          version_end: 0,
        },
        {
          version_end: final.latest_version,
        }
      );
      console.log(features_affected);
    } catch (error) {
      console.log(error);
      return next(new ErrorResponse(error.message, 500));
    }

    const features = await Feature.find({
      idea_id: final._id,
      version_end: final.latest_version,
    });

    res.status(200).json({
      success: true,
      idea: final,
      features,
      features_affected: features_affected.modifiedCount,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
