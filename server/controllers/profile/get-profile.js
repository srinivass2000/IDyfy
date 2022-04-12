const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
// const { protect } = require("../../middleware/auth");

exports.get_profile = async (req, res, next) => {
  try {
    user_id = req.query.id;
    var user, id, can_edit;
    if (user_id) {
      user = await User.findById(user_id);
      if (!user) {
        return next(new ErrorResponse("No User found", 404));
      }
      id = user_id;
      if (req.user._id.toString() == id) {
        can_edit = true;
      } else {
        can_edit = false;
      }
    } else {
      console.log(req.user._id);
      user = req.user;
      id = req.user._id.toString();
      can_edit = true;
    }
    const result = await Idea.find({
      contributors: {
        $in: [id],
      },
    }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      user,
      ideas: result,
      can_edit,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
