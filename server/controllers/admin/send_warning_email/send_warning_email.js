const Idea = require("../../../models/Idea");
const User = require("../../../models/User");
const ErrorResponse = require("../../../utils/errorResponse");
const sendEmail = require("../../../utils/sibEmail");
const template = require("./template");

exports.send_warning_email = async (req, res, next) => {
  try {
    const { idea_id } = req.query;

    console.log(idea_id);
    var idea = await Idea.findById(idea_id);
    if (idea) {
      if (req.user.isAdmin == true) {
        for await (var contributor of idea.contributors) {
          var user = await User.findById(contributor.toString());
          if (user) {
            const message = template(user, idea);
            // console.log(message);
            await sendEmail({
              to: user.email,
              to_name: user.name,
              subject:
                "Warning for overstepping acceptable conduct of terms and conditions of IDyfy͏‌ ͏‌ ͏‌ ͏",
              text: message,
            });
            var engagement_score = user.engagement_score - 10;
            await User.findByIdAndUpdate(user._id.toString(), {
              engagement_score,
            });
          } else {
            return next(new ErrorResponse("No User found", 500));
          }
        }
      } else {
        return next(new ErrorResponse("You are Not an Admin!", 403));
      }
    } else {
      return next(new ErrorResponse("Idea not found", 404));
    }
    res.status(200).json({ success: true, data: "Mails Sent" });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
