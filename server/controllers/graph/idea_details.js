const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.idea_details = async (req, res, next) => {
  try {
    const { idea_id } = req.body;
    var idea = await Idea.findById(idea_id, {
      title: true,
      contributors: 1,
      ideas_details: 1,
    });

    // if (idea.idea_details) {
    //   var latest_version = idea.ideas_details[req.user._id.toString()];
    // }

    var contributor_names = [];

    for await (var contributor of idea.contributors) {
      console.log(contributor);
      var name = await User.findById(contributor, {
        name: 1,
      });
      contributor_names.push(name);
    }

    var highest_contributor = await User.find(
      {
        ideas_contributed: {
          $in: [idea_id],
        },
      },
      { name: 1, engagement_score: 1, profile_pic: 1 }
    ).sort({
      engagement_score: -1,
    });

    if (highest_contributor) {
      var latest_version =
        idea.ideas_details[highest_contributor[0]._id.toString()];
    }

    res.status(200).json({
      success: true,
      idea,
      latest_version,
      contributor_names,
      highest_contributor: highest_contributor[0],
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
