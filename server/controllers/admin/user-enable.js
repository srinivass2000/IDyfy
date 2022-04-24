const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.user_enable = async (req, res, next) => {
  try {
    const { user_id } = req.query;
    var user = await User.findById(user_id);
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    if (!req.user.isAdmin === true) {
      return next(new ErrorResponse("You are not an admin", 403));
    }
    await User.findByIdAndUpdate(user_id.toString(), {
      suspended: undefined,
    });
    console.log("User Enabled");
    res.status(200).json({
      success: true,
      data: "User Account Enabled Successfully!",
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
