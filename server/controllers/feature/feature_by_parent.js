const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features_by_parent = async (req, res, next) => {
  try {
    const { idea_id, parent_id } = req.body;

    if (parent_id == null) {
      parent_id = idea_id;
    }

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    var idea = await Idea.findById(idea_id, { title: true });

    obj2 = { show: true };

    idea = { ...idea._doc, ...obj2 };

    console.log(idea);

    var results = await Feature.find(
      {
        parent_id,
      },
      { title: 1, parent_id: 1, version_start: 1, version_end: 1, available: 1 }
    );

    if (results == []) {
      return next(
        new ErrorResponse("This Parent does'nt have any children", 204)
      );
    }
    var array = [];

    obj3 = { show: false };

    results.forEach(function (feature) {
      result = { ...feature._doc, ...obj3 };
      array.push(result);
    });

    array.unshift(idea);

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
