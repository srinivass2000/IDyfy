const Idea = require("../../models/Idea");
const User = require("../../models/User");
const Comment = require("../../models/Comment");


exports.get_details = async (req, res, next) => {
  
  let count_ideas = await Idea.count();
  console.log(count_ideas);

  let count_users = await User.count();
  console.log(count_users);

  let count_comments = await Comment.count();
  console.log(count_comments);

  var active_users = await Idea.find().sort(
    {
      date:1
    }
  );
  console.log(active_users);

  var active_ideas = await User.find().sort(
    {
      engagement_score:1
    }
  );
  console.log(active_ideas);
  
  };
  