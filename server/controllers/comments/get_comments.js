const Idea = require("../../models/Idea");
const Comment = require("../../models/Comment");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_comments = async (req, res, next) => {
  try {
    const { idea_id, feature_id } = req.body;
    console.log("here");
    if (!feature_id) {
      const result = await Comment.find({
        idea_id: idea_id,
        feature_id: null,
      });

      console.log(result);

      res.status(200).json({
        success: true,
        comments: result,
      });
    } else {
      const result = await Comment.find({
        idea_id: idea_id,
        feature_id: feature_id,
      });

      console.log(result);

      res.status(200).json({
        success: true,
        comments: result,
      });
    }

    //comments
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
