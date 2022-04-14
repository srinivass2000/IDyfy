const Idea = require("../../models/Idea");
const User = require("../../models/User");
const Comment = require("../../models/Comment");


exports.get_details = async (req, res, next) => {
  
  try{
    let count_ideas = await Idea.count();
    //console.log(count_ideas);

    let count_users = await User.count();
    //console.log(count_users);

    let count_comments = await Comment.count();
    //console.log(count_comments);

    var active_ideas = await Idea.find({},{
      title:1,
      contributors:1,
      liked_users:1
    }).sort(
      {
        date:-1
      }
    ).limit( 10 );

    var active_users = await User.find({},{
      name:1,
      engagement_score:1
    }).sort(
      {
        engagement_score:-1
      }
    ).limit( 10 );
    
    res.status(200).json({
      success: true,
      count_ideas,
      count_users,
      count_comments,
      active_ideas,
      active_users
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
}
};
  