const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const { protect } = require("../../middleware/auth");

exports.get_profile = async (req, res, next) => {
  try {
    console.log(req.user._id);
    const user = req.user;
    var id = req.user._id;
    id = id.toString();
    const result = await Idea.find({
      contributors: {
        $in: [id],
      },
    });
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
