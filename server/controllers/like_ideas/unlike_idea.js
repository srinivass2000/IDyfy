const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.unlike_idea = async (req, res, next) => {
  try {
    const { idea_id } = req.query;
    // var idea = await Idea.find({ _id: idea_id });
    // idea.starred_by = idea.starred_by.push(req.user._id);

    var id = req.user._id.toString();
    // id = id.toString();

    var response = await Idea.findOneAndUpdate(
      { _id: idea_id },
      {
        $pull: {
          liked_users: id,
        },
      }
    );

    res.status(200).json({
      success: true,
      idea: response,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
