const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.get_contributed_ideas = async (req, res, next) => {
  try {
    console.log(req.user._id);
    var id = req.user._id;
    id = id.toString();
    const result = await Idea.find(
      {
        contributors: {
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

    var final = [];
    for await (var idea of result) {
      console.log(idea);
      var comment_count = await Comment.find({
        idea_id: idea._id.toString(),
        feature_id: null,
      }).count();
      if (idea.starred_by.includes(req.user._id.toString())) {
        obj = { comment_count: comment_count, starred: true };
      } else {
        obj = { comment_count: comment_count, starred: false };
      }
      if (idea.liked_users.includes(req.user._id.toString())) {
        obj = { ...obj, liked: true };
      } else {
        obj = { ...obj, liked: false };
      }
      // obj = { comment_count: comment_count };
      idea = { ...idea._doc, ...obj };
      final.push(idea);
    }
    res.status(200).json({
      success: true,
      ideas: final,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
