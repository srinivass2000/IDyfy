const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_users = async (req, res, next) => {
  try {
    const result = await User.find(
      {},
      {
        name: 1,
        email: 1,
        ideas_contributed: 1,
        followers: 1,
        following: 1,
        engagement_score: 1,
      }
    ).sort({ createdAt: -1 });
    //console.log(result);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
