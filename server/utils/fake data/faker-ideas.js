const Idea = require("../../models/Idea");
const ErrorResponse = require("../errorResponse");
var casual = require("casual");
exports.fake_idea = async (req, res, next) => {
  try {
    var idea;

    var ideas = {};

    for (var i = 0; i < 100; i++) {
      var liked_users = [];
      for (var i = 0; i < 6; i++) {
        liked_users.push(casual.random);
      }

      var contributors = ["623cb04aadbc01062f87fbca"];
      // for (var i = 0; i < 3; i++) {
      //   contributors.push(faker.name.firstName());
      // }

      var starred_by = ["61eee3b34e43b5903ff15d7e"];

      var tags = [];
      for (var j = 0; j < 5; j++) {
        tags.push(casual.word);
      }

      idea = await Idea.create({
        title: casual.title,
        description: casual.description,
        tags: tags,
        // liked_users: liked_users,
        contributors: contributors,
        starred_by,
        // latest_version: faker.random.number(),
        // date: faker.date.past(),
      });

      console.log(idea);
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
