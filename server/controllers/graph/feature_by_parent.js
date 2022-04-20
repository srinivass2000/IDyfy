const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features_by_parent = async (req, res, next) => {
  try {
    var { idea_id, parent_id, version, whosegraph } = req.query;

    obj3 = { show: false };
    obj4 = { show: "nothing" };
    obj5 = { canEdit: true };
    obj6 = { canEdit: false };

    var user;
    if (whosegraph == "null" || whosegraph == undefined) {
      // console.log(whosegraph);
      console.log("here");
      // user = req.user._id.toString();
      idea = await Idea.findById(idea_id);

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

      var highest_contributor = await User.findById(sortable[0][0]);

      user = highest_contributor._id.toString();

      console.log("highest contributor" + user);
    } else {
      console.log("whosegraph :" + whosegraph);
      user = whosegraph.toString();
    }

    console.log("----------------------------------------");
    console.log(user);
    console.log("----------------------------------------");

    if (parent_id == null) {
      if (idea_id != null) {
        var idea = await Idea.findById(idea_id, {
          title: true,
          contributors: 1,
        });
        var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);
        var test = await Feature.find(
          {
            parent_id: idea_id.toString(),
          },
          {
            _id: 1,
            contributors: 1,
          }
        );

        if (test.length === 0) {
          idea = { ...idea._doc, ...obj4 };
          if (
            idea.contributors.includes(req.user._id.toString()) &&
            user === req.user._id.toString()
          ) {
            idea = { ...idea, ...obj5 };
          } else {
            idea = { ...idea, ...obj6 };
          }
        } else {
          idea = { ...idea._doc, ...obj3 };
        }

        var counter = 0;
        test.forEach(function (feature) {
          if (
            feature.contributors.includes(req.user._id.toString()) &&
            idea.contributors.includes(req.user._id.toString()) &&
            user === req.user._id.toString()
          ) {
            // idea = { ...idea, ...obj5 };
            counter++;
          }
        });

        if (counter == test.length) {
          if (
            idea.contributors.includes(req.user._id.toString()) &&
            user === req.user._id.toString()
          )
            idea = { ...idea, ...obj5 };
        } else {
          idea = { ...idea, ...obj6 };
        }

        // idea = { ...idea._doc, ...obj2 };

        console.log(idea);

        idea.contributors = undefined;

        return res.status(200).json({
          success: true,
          features: [idea],
          whose_id: user._id.toString(),
        });
      }
    }

    // if (parent_id == idea_id) {
    //   if (idea_id != null) {
    //     var idea = await Idea.findById(idea_id, { title: true });

    //     obj2 = { show: false };

    //     idea = { ...idea._doc, ...obj2 };

    //     return res.status(200).json({
    //       success: true,
    //       features: [idea],
    //     });
    //   }
    // }

    //if idea_id isequal to parent_id
    if (idea_id != null) {
      var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

      if (version == "null" || version == undefined) {
        var results = await Feature.find(
          {
            parent_id,
            version_start: {
              $lte: version,
            },
            version_end: {
              $gte: version,
            },
            contributors: { $in: [user.toString()] },
          },
          {
            title: 1,
            parent_id: 1,
            version_start: 1,
            version_end: 1,
            available: 1,
            updated_feature: 1,
            // user_id: 1,
          }
        );
      } else {
        var results = await Feature.find(
          {
            parent_id,
            version_start: {
              $lte: version,
            },
            version_end: {
              $gte: version,
            },
            contributors: { $in: [user.toString()] },
          },
          {
            title: 1,
            parent_id: 1,
            version_start: 1,
            version_end: 1,
            available: 1,
            updated_feature: 1,
            // user_id: 1,
          }
        );
      }

      // console.log("initial" + results);
      if (results.length == 0) {
        return res.status(204).json({
          success: false,
          note: "This Parent does'nt have any children",
        });
        // new ErrorResponse("This Parent does'nt have any children", 204);
      }

      var array = [];

      for await (const feature of results) {
        // console.log(feature);
        var test = await Feature.find(
          {
            parent_id: feature._id.toString(),
          },
          {
            _id: 1,
          }
        );

        if (test.length === 0) {
          result = { ...feature._doc, ...obj4 };
        } else {
          result = { ...feature._doc, ...obj3 };
        }

        // console.log(result);

        // if (
        //   req.user._id.toString() == feature.user_id &&
        //   idea.contributors.includes(req.user._id.toString())
        // ) {
        //   var final = { ...result, ...obj5 };
        // } else {
        //   var final = { ...result, ...obj6 };
        // }
        array.push(result);
      }

      // if (parent_id == idea_id) {
      //   if (idea_id != null) {
      //     var idea = await Idea.findById(idea_id, { title: true });

      //     obj2 = { show: true };

      //     idea = { ...idea._doc, ...obj2 };

      //     console.log(idea);
      //     array.unshift(idea);
      //   }
      // }

      //user names

      console.log("here");
      res.status(200).json({
        success: true,
        features: array,
      });
    } else {
      return next(new ErrorResponse("Idea Id is required", 500));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
