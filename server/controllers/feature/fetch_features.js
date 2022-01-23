// const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const { FeatureSchema } = require("../../models/Feature");

exports.fetch_features = async (req, res, next) => {
  try {
    const idea_id = req.query.id;

    var idea = await Idea.findById(idea_id, { title: 1 });

    var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

    console.log(Feature);

    var results = await Feature.find(
      {},
      { content: 0, idea_id: 0, user_id: 0, content_hash: 0 }
    ).sort({
      version_end: "desc",
    });

    var limit = await Feature.find().sort({ level: -1 }).limit(1);

    if (limit[0].level) {
      limit = limit[0].level;
    } else {
      limit = 1;
    }

    var newfea = [];

    featureTree = {
      id: "root",
      name: idea.title,
      children: [],
    };

    console.log("Starts frm here");
    results.map((fea, i) => {
      if (fea.parent_id.toString() === idea._id.toString()) {
        // children.push({ id: fea._id.toString(), name: fea.title });
        featureTree.children.push({
          id: fea._id.toString(),
          name: fea.title,
          children: [],
        });
        // console.log("children pushed")
        // console.log(children)
        newfea.push(fea);
        // result.features.splice(result.features.findIndex(e => e._id.toString() === fea._id.toString()), 1);
      }

      // children = [];

      for (var i = 1; i <= limit; i++) {
        results.map((f, i) => {
          if (fea._id.toString() === f.parent_id.toString()) {
            console.log("im level 2 feature");
            featureTree.children.map((prem, i) => {
              if (prem.id === f.parent_id) {
                prem.children.push({
                  id: f._id,
                  name: f.title,
                  children: [],
                });
              }
            });
          }
        });
      }
    });

    console.log(newfea);
    console.log(featureTree);

    // var prem = JSON.stringify(featureTree);
    // console.log(prem);

    res.status(200).json({
      success: true,
      idea: idea,
      features: featureTree,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
};
