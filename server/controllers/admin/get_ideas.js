const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_ideas = async (req, res, next) => {
    try { 
        const result = await Idea.find()
          .sort({ createdAt: -1 });
        res.status(200).json({
          success: true,
          ideas: result,
        });
      } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));
    }
};
