const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

// async function get_comments(result) {
//   var comments_final = [];
//   result.map(async (idea, i) => {
//     var idea_id = idea._id.toString();
//     idea_id = idea_id.toString();
//     var comment_count = await Comment.find({
//       idea_id: idea_id,
//       feature_id: null,
//     }).count();
//     comments_final.push(comment_count);
//     console.log(comments_final);
//   });
//   console.log(comments_final);
//   return comments_final;
// }

exports.get_ideas = async (req, res, next) => {
  try {
    var skip = req.params.skip;
    // var { skip } = req.body;
    skip = parseInt(skip);
    // console.log(skip);
    const PAGE_SIZE = 10;

    var result = await Idea.find(
      {},
      {
        title: 1,
        description: 1,
        contributors: 1,
        tags: 1,
        liked_users: 1,
        starred_by: 1,
      }
    )
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(PAGE_SIZE);

    var final = [];
    for await (var idea of result) {
      console.log(idea);
      var comment_count = await Comment.find({
        idea_id: idea._id.toString(),
        feature_id: null,
      }).count();
      obj = { comment_count: comment_count };
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
