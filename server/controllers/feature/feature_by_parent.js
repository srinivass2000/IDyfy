const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features_by_parent = async (req, res, next) => {
  try {
    var { idea_id, parent_id } = req.query;

    if (parent_id == null) {
      parent_id = idea_id;
    }

    if (parent_id == idea_id) {
      if (idea_id != null) {
        var idea = await Idea.findById(idea_id, { title: true });

        obj2 = { show: false };

        idea = { ...idea._doc, ...obj2 };

        return res.status(200).json({
          success: true,
          features: idea,
        });
      }
    }

    //if idea_id isequal to parent_id

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    var results = await Feature.find(
      {
        parent_id,
      },
      {
        title: 1,
        parent_id: 1,
        version_start: 1,
        version_end: 1,
        available: 1,
        updated_feature: 1,
      }
    );

    console.log("initial" + results);
    if (results.length == 0) {
      return res.status(204).json({
        success: false,
        note: "This Parent does'nt have any children",
      });
      // new ErrorResponse("This Parent does'nt have any children", 204);
    }

    var array = [];

    obj3 = { show: false };
    obj4 = { show: "nothing" };

    results.forEach(async function (feature) {
      // console.log(feature);
      // var test = await Feature.find(
      //   {
      //     parent_id: feature._id.toString(),
      //   },
      //   {
      //     _id: 1,
      //   }
      // );
      // if (test.length == 0) {
      result = { ...feature._doc, ...obj4 };
      // } else {
      //   result = { ...feature._doc, ...obj3 };
      // }
      array.push(result);
    });

    // if (parent_id == idea_id) {
    //   if (idea_id != null) {
    //     var idea = await Idea.findById(idea_id, { title: true });

    //     obj2 = { show: true };

    //     idea = { ...idea._doc, ...obj2 };

    //     console.log(idea);
    //     array.unshift(idea);
    //   }
    // }

    console.log("here");
    res.status(200).json({
      success: true,
      features: array,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
