const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.get_idea = async (req, res, next) => {
  try {
    const id = req.params.id;

    const ideaId = await Idea.findById(id);

    //comments

    const comment = await Comment.find({
      idea_id: idea_id,
      feature_id: null,
    });

    res.status(200).json({
      success: true,
      idea: ideaId,
      comments: comment,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
