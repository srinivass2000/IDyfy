const Idea = require("../../models/Idea");
const User = require("../../models/User");
const Comment = require("../../models/Comment");
const ErrorResponse = require("../../utils/errorResponse");
exports.get_ideas = async (req, res, next) => {
  try {
    var result = await Idea.find(
      {},
      {
        title: 1,
        contributors: 1,
        liked_users: 1,
        shares: 1,
      }
    )
      .sort({
        date: -1,
      })
      .limit(20);
    //  console.log(result);
    var final = [];
    for await (var idea of result) {
      //   console.log(idea);
      var comment_count = await Comment.find({
        idea_id: idea._id.toString(),
        feature_id: null,
      }).count();
      obj = { comment_count: comment_count };
      idea = { ...idea._doc, ...obj };
      final.push(idea);
      //console.log(comment_count);
    }

    res.status(200).json({
      success: true,
      final,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
