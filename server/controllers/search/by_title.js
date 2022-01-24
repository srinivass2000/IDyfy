const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
// const Comment = require("../../models/Comment");

exports.search_by_title = async (req, res, next) => {
  try {
    var query = req.query.query;
    if (query) {
      var search_by_title = await Idea.find({
        $text: { $search: `${query}` },
      });

      res.send({
        success: true,
        search_by_title,
      });
    } else {
      return next(new ErrorResponse("Please provide a Query!", 404));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
