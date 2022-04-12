const User = require("../../models/User");


exports.get_users = async (req, res, next) => {

    
    try { 
        const result = await User.find({},{
          name:1,
          email:1,
          ideas_contributed:1,
          engagement_score:1 
        })
          .sort({ createdAt: -1 });
        res.status(200).json({
          success: true,
          users: result,
        });
      } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));
    }
}