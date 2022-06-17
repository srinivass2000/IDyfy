const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.idea_details = async (req, res, next) => {
  try {
    var id = req.user._id;
    id = id.toString();
    const { idea_id } = req.query;
    var idea = await Idea.findById(idea_id, {
      title: true,
      contributors: 1,
      ideas_details: 1,
      user_scores: 1,
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

    let sortable = [];
    for (var user in idea.user_scores) {
      sortable.push([user, idea.user_scores[user]]);
    }

    sortable.sort(function (a, b) {
      return a[1] - b[1];
    });

    console.log(idea.user_scores);
    console.log(sortable);
    console.log(sortable[0]);

    console.log(sortable[0][0]);
    console.log(sortable[0][1]);

    var highest_contributor = await User.findById(sortable[0][0], {
      name: 1,
      profile_pic: 1,
    });

    if (highest_contributor) {
      var latest_version =
        idea.ideas_details[highest_contributor._id.toString()];
    }

    var your_latest_version;

    if (idea.contributors.includes(req.user.id.toString())) {
      your_latest_version = idea.ideas_details[req.user.id.toString()];
    }

    console.log(latest_version);

    var temp = { user_score: sortable[0][1], latest_version: latest_version };

    highest_contributor = { ...highest_contributor._doc, ...temp };

    res.status(200).json({
      success: true,
      id,
      contributor_names,
      highest_contributor,
      your_latest_version,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
