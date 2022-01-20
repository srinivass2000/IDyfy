const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
// const { protect } = require("../../middleware/auth");

exports.get_profile = async (req, res, next) => {
  try {
    user_id = req.query.id;
    var user, id;
    if (user_id) {
      user = await User.findById(user_id);
      id = user_id;
    } else {
      console.log(req.user._id);
      user = req.user;
      id = req.user._id;
      id = id.toString();
    }
    //user specific using query
    const result = await Idea.find({
      contributors: {
        $in: [id],
      },
    }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      user,
      ideas: result,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
