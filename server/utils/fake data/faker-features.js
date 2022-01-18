const Idea = require("../../models/Idea");
const ErrorResponse = require("../errorResponse");
const { FeatureSchema } = require("../../models/Feature");
const mongoose = require("mongoose");

exports.fake_features = async (req, res, next) => {
  try {
    var faker = require("faker");

    var idea;

    var ideas = {};

    var Feature = mongoose.model(
      `features_61e63a0d4eaa5fe821f6df84`,
      FeatureSchema
    );

    for (var i = 0; i < 10000; i++) {
      feature = await Feature.create({
        title: faker.lorem.word(),
        // content: faker.lorem.paragraph(),
        content: faker.lorem.paragraphs(3),
        idea_id: "61e63a0d4eaa5fe821f6df84",
        parent_id: "61e44f4a9e5a42bb8be391a3",
        user_id: "61cd6d1f8fca5f2c130865a7",
        version_start: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        version_end: faker.datatype.number({
          min: 10,
          max: 30,
        }),
      });

      console.log(feature);
    }

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    // next(err)
    return next(new ErrorResponse(err.message, 500));
  }
};
