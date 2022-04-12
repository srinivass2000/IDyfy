const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_ideas = async (req, res, next) => {
    try { 
        const result = await Idea.find({},{
          title:1,
          contributors:1,
          liked_users:1
        })
          .sort({ date: -1 });

        var final = [];
        for await (var idea of result) {
          console.log(idea);
          var comment_count = await Comment.find({
            idea_id: idea._id.toString(),
            feature_id: null,
          }).count();
          obj = { comment_count: comment_count };
          idea = { ...idea._doc, ...obj };
          final.push(idea);
        }
        
        res.status(200).json({
          success: true,
          ideas: final,
        });
      } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));
    }
};
