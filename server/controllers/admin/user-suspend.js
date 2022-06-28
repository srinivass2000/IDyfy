const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.user_suspend = async (req, res, next) => {
  try {
    const { user_id } = req.query;
    console.log(user_id);
    var user = await User.findById(user_id);
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    if (!req.user.isAdmin === true) {
      return next(new ErrorResponse("You are not an admin", 403));
    }
    await User.findByIdAndUpdate(user_id.toString(), {
      suspended: true,
    });
    var user = await User.findByIdAndUpdate(user_id,{
      $push:  {
        events: {
          type: "user suspended",
          detail: user,
          time: new Date()
        }
      }
    });
    console.log("User Suspended");
    res.status(200).json({
      success: true,
      data: "User Account Suspended Successfully!",
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
