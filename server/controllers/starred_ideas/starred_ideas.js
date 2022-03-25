const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_starred_ideas = async (req, res, next) => {
  try {
    console.log(req.user._id);
    var id = req.user._id;
    id = id.toString();
    const result = await Idea.find(
      {
        starred_by: {
          $in: [id],
        },
      },
      {
        title: 1,
        description: 1,
        contributors: 1,
        tags: 1,
        liked_users: 1,
        starred_by: 1,
      }
    ).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      ideas: result,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
