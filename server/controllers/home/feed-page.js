const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

const get_comments = async (idea) => {
  // var comment_count;
  // result.forEach(async (idea) => {
  var idea_id = idea._id;
  idea_id = idea_id.toString();
  console.log(idea_id);
  const comment_count = await Comment.find({
    idea_id: idea_id,
    feature_id: null,
  }).count();

  console.log(comment_count);
  // Object.assign(comments, { [idea_id]: comment_count });
  // comments.idea_id = comment_count;
  // console.log(comments);
  return comment_count;
  // });
};

exports.get_ideas = async (req, res, next) => {
  try {
    var skip = req.params.skip;
    // var { skip } = req.body;
    skip = parseInt(skip);
    // console.log(skip);
    const PAGE_SIZE = 10;

    const result = await Idea.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(PAGE_SIZE);

    // console.log(result);
    // const comments = get_comments(result);
    comments_final = {};
    var me;
    console.log(result);
    const comments = result.forEach(async (idea) => {
      // var comment_count = get_comments();
      var idea_id = idea._id;
      idea_id = idea_id.toString();
      console.log(idea_id);
      const comment_count = await Comment.find({
        idea_id: idea_id,
        feature_id: null,
      }).count();
      // console.log(idea);
      // console.log(comment_count);
      Object.assign(comments_final, { [idea._id]: comment_count });
      // console.log(comments_final);
      // return comments_final;
      me = comments_final;
    });

    console.log(comments);
    console.log(comments_final);
    console.log(me);
    res.status(200).json({
      success: true,
      ideas: result,
      comments: comments_final,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
