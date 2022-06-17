const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.get_notification = async (req, res, next) => {
  try {
    
    var graph = await Idea.aggregate([
        {
            $group: {
                _id : { $substr : ['$Date',5,2]},
                c : { $sum: 1}
            }
        }
    ]);

    res.status(200).json({
      success: true,
      graph
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
