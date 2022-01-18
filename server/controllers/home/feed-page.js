const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_ideas = async (req, res, next) => {
  try {
    var skip = req.params.skip;
    // var { skip } = req.body;
    skip = parseInt(skip);
    // console.log(skip);
    const PAGE_SIZE = 10;
    const result = await Idea.find({}).skip(skip).limit(PAGE_SIZE);

    res.status(200).json({
      success: true,
      ideas: result,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
