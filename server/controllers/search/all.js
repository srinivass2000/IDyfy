const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
// const Comment = require("../../models/Comment");

exports.search_all = async (req, res, next) => {
  try {
    var query = req.query.query;
    if (query) {
      var search_by_title = await Idea.find({
        $text: { $search: `${query}` },
      }).limit(5);

      var search_user = await User.find({
        $text: { $search: `${query}` },
      }).limit(5);

      var search_by_tags = await Idea.find({
        tags: {
          $in: [query],
        },
      }).limit(5);

      res.send({
        success: true,
        search_by_title,
        search_user,
        search_by_tags,
      });
    } else {
      return next(new ErrorResponse("Please provide a Query!", 404));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
