const User = require("../../models/User");


exports.get_users = async (req, res, next) => {

    
    try { 
        const result = await User.find()
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