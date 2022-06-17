const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.get_notification = async (req, res, next) => {
  try {
    //console.log(1);
    var id = req.user._id;
    id = id.toString();
    
    const result = await User.find({
      _id: id
    },{
      events:1
    });

   console.log(result);

    res.status(200).json({
      success: true,
      events : result,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
