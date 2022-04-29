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

    
    // const result = await Idea.find({
    //   contributors: {
    //     $in: [id],
    //   },
    // },{
    //   title:1,
    //   liked_users:1,
    //   date:1
    // }).sort({ createdAt: -1 });
    // //console.log(result);
    

    // var liked_users= [{
    // }];
    // for await (var idea of result){
      
    //   var likedusers = idea.liked_users;
    //   //console.log(likedusers);
    //   var arr = []
    //   for await (var luser of likedusers){
    //     fuser = await User.find({
    //       _id: luser.toString() ,
    //     },{name:1});
    //     arr.push(fuser[0].name);
    //     //console.log(arr);
    //   //   //liked_users.push()
    //    }
    //    liked_users.push({
    //     name: idea.title,
    //     users : arr,
    //   }) 
    // }
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
