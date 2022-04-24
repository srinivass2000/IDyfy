const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_user_latest_version = async (req, res, next) => {
  try {
    const { idea_id, user_id } = req.query;
    var idea = await Idea.findById(idea_id);
    if (!idea) {
      return next(new ErrorResponse("Idea does not exist!", 404));
    }
    var user = await User.findById(user_id);
    if (!user) {
      return next(new ErrorResponse("User does not exist!", 404));
    }
    var latest_version = idea.ideas_details[user.id.toString()];
    res.status(200).json({
      success: true,
      latest_version,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
