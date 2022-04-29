const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.get_idea = async (req, res, next) => {
  try {
    const id = req.query.id;

    console.log(id);

    var idea = await Idea.findById(id);
    //comments
    console.log(idea);

    if (!idea) {
      return next(new ErrorResponse("Idea not found", 404));
    }


    //give names for contributors

    var contributed_users = await User.find(
      {
        ideas_contributed: {
          $in: [id],
        },
      },
      { name: 1 }
    );

    const comments = await Comment.find({
      idea_id: id,
      feature_id: null,
    });

    var user_id = req.user._id.toString();

    console.log(user_id);

    var can_edit = idea.contributors.includes(user_id);

    if (idea.liked_users.includes(req.user._id)) {
      idea = { ...idea._doc, liked: true };
    } else {
      idea = { ...idea._doc, liked: false };
    }

    res.status(200).json({
      success: true,
      idea,
      comments,
      can_edit,
      contributed_users,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
