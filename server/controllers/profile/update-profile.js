// const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
// const { protect } = require("../../middleware/auth");

exports.update_profile = async (req, res, next) => {
  try {
    const { name, job, university, about } = req.body;

    var user = await User.findByIdAndUpdate(req.user._id, {
      name,
      job,
      university,
      about,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something Went Wrong", 500));
  }
};
