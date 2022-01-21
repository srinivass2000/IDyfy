const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
// const Comment = require("../../models/Comment");

exports.update_idea = async (req, res, next) => {
  try {
    const { title, description, tags, idea_id } = req.body;
    var idea = await Idea.findById(idea_id);
    var user_id = req.user._id.toString();
    if (idea.contributors.includes(user_id)) {
      idea = await Idea.findByIdAndUpdate(idea_id, {
        title,
        description,
        tags,
      });
      idea = await Idea.findById(idea_id);
      res.status(200).json({
        success: true,
        idea,
      });
    } else {
      return next(
        new ErrorResponse("You are not a contributor to this Idea", 403)
      );
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
