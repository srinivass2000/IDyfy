const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_users = async (req, res, next) => {

    
    try { 
        const result = await User.find({},{
          name:1,
          email:1,
          ideas_contributed:1,
          followers:1,
          following:1,
          engagement_score:1,
          university:1,
          job:1,
          profile_pic:1,
          email:1
        })
          .sort({ engagement_score:1 });
        //console.log(result);
        res.status(200).json({
          success: true,
          result,
        });
      } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));
    }
}
