const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_contributed_ideas = async (req, res, next) => {
    try {
        console.log(req.user);
        const result = await Idea.find({
            contributors: {
                $in: ["Abby"]
            }
        })
        res.status(200).json({
            success: true,
            ideas: result
        });

    } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));
    }
}