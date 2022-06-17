const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const Comment = require("../../models/Comment");

exports.search_all = async (req, res, next) => {
  try {
    var query = req.query.query;
    console.log(query);
    if (query) {
      var search_by_title = await Idea.find({
        $text: { $search: `${query}` },
      });

      var final_search_by_title = [];
      for await (var idea of search_by_title) {
        // console.log(idea);
        var comment_count = await Comment.find({
          idea_id: idea._id.toString(),
          feature_id: null,
        }).count();
        if (idea.starred_by.includes(req.user._id.toString())) {
          obj = { comment_count: comment_count, starred: true };
        } else {
          obj = { comment_count: comment_count, starred: false };
        }
        if (idea.liked_users.includes(req.user._id.toString())) {
          obj = { ...obj, liked: true };
        } else {
          obj = { ...obj, liked: false };
        }
        // obj = { comment_count: comment_count };
        idea = { ...idea._doc, ...obj };
        final_search_by_title.push(idea);
      }

      var search_user = await User.find({
        $text: { $search: `${query}` },
      });

      var search_by_tags = await Idea.find({
        tags: {
          // $in: [query],
          $regex: `${query}`,
          $options: "i",
        },
        // tags: /query/,
      });

      var final_search_by_tags = [];
      for await (var idea of search_by_tags) {
        // console.log(idea);
        var comment_count = await Comment.find({
          idea_id: idea._id.toString(),
          feature_id: null,
        }).count();
        if (idea.starred_by.includes(req.user._id.toString())) {
          obj = { comment_count: comment_count, starred: true };
        } else {
          obj = { comment_count: comment_count, starred: false };
        }
        if (idea.liked_users.includes(req.user._id.toString())) {
          obj = { ...obj, liked: true };
        } else {
          obj = { ...obj, liked: false };
        }
        // obj = { comment_count: comment_count };
        idea = { ...idea._doc, ...obj };
        final_search_by_tags.push(idea);
      }

      var search_by_description = await Idea.find({
        $or: [
          {
            description: {
              // $in: [query],
              $regex: query,
              $options: "i",
            },
          },
          {
            tags: {
              // $in: [query],
              $regex: `${query}`,
              $options: "i",
            },
          },
        ],
      });

      // console.log(search_by_description);
      var final_search_by_description = [];
      for await (var idea of search_by_description) {
        console.log(idea);
        var comment_count = await Comment.find({
          idea_id: idea._id.toString(),
          feature_id: null,
        }).count();
        if (idea.starred_by.includes(req.user._id.toString())) {
          obj = { comment_count: comment_count, starred: true };
        } else {
          obj = { comment_count: comment_count, starred: false };
        }
        if (idea.liked_users.includes(req.user._id.toString())) {
          obj = { ...obj, liked: true };
        } else {
          obj = { ...obj, liked: false };
        }
        // obj = { comment_count: comment_count };
        idea = { ...idea._doc, ...obj };
        final_search_by_description.push(idea);
      }

      res.send({
        success: true,
        search_by_title: final_search_by_title,
        search_user,
        search_by_tags: final_search_by_tags,
        similar_ideas: final_search_by_description,
      });
    } else {
      return next(new ErrorResponse("Please provide a Query!", 404));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
