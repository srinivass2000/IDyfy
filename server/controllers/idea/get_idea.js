const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.get_idea = async (req, res, next) => {
    try {
        const id = req.params.id;

        const ideaId = await Idea.findById(id);

        //comments

        res.status(200).json({
            success: true,
            idea: ideaId,
        });



    } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));

    }
}