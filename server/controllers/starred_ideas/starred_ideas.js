const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_starred_ideas = async (req, res, next) => {
  try {
    console.log(req.user._id);
    var id = req.user._id;
    id = id.toString();
    const result = await Idea.find({
      starred_by: {
        $in: [id],
      },
    });
    res.status(200).json({
      success: true,
      ideas: result,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
