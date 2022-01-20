const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.get_idea = async (req, res, next) => {
  try {
    const id = req.query.id;

    console.log(id);

    const idea = await Idea.findById(id);
    //comments
    console.log(idea);

    if (!idea) {
      return next(new ErrorResponse("Idea not found", 404));
    }

    //give names for contributors

    var idea_id = idea._id;
    idea_id = idea_id.toString();
    const comments = await Comment.find({
      idea_id: idea_id,
      feature_id: null,
    });

    res.status(200).json({
      success: true,
      idea,
      comments,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
