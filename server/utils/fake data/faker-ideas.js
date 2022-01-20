const Idea = require("../../models/Idea");
const ErrorResponse = require("../errorResponse");

exports.fake_idea = async (req, res, next) => {
  try {
    var faker = require("faker");

    var idea;

    var ideas = {};

    for (var i = 0; i < 1000; i++) {
      var liked_users = [];
      for (var i = 0; i < 6; i++) {
        liked_users.push(faker.name.firstName());
      }

      var contributors = [
        "61cd6d1f8fca5f2c130865a7",
        "61e55c97e4f68488d6b5e189",
        "61e7a0b0f43857ea78a9fd5a",
        "61e704b16d19c8177f7a54c1",
      ];
      // for (var i = 0; i < 3; i++) {
      //   contributors.push(faker.name.firstName());
      // }

      var starred_by = [
        "61cd6d1f8fca5f2c130865a7",
        "61e55c97e4f68488d6b5e189",
        "61e7a0b0f43857ea78a9fd5a",
        "61e704b16d19c8177f7a54c1",
      ];

      var tags = [];
      for (var j = 0; j < 5; j++) {
        tags.push(faker.lorem.word());
      }

      idea = await Idea.create({
        title: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        tags: tags,
        liked_users: liked_users,
        contributors: contributors,
        starred_by,
        latest_version: faker.random.number(),
        date: faker.date.past(),
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
