const Idea = require("../../models/Idea");
const ErrorResponse = require("../errorResponse");

exports.fake_idea = async (req, res, next) => {
    try {

        var faker = require('faker');

        var idea;

        var ideas = {};



        for (var i = 0; i < 100; i++) {

            var liked_users = []
            for (var i = 0; i < 6; i++) {
                liked_users.push(faker.name.firstName())
            }

            var contributors = []
            for (var i = 0; i < 3; i++) {
                contributors.push(faker.name.firstName())
            }

            var tags = [];
            for (var j = 0; j < 5; j++) {
                tags.push(faker.lorem.word())
            }

            idea = await Idea.create({
                title: faker.lorem.word(),
                description: faker.lorem.paragraph(),
                tags: tags,
                liked_users: liked_users,
                contributors: contributors,
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
}