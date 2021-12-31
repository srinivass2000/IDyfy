const Idea = require("../../models/Idea");
const Comment = require("../../models/Comment");
const ErrorResponse = require("../../utils/errorResponse");

exports.post_comment = async (req, res, next) => {
    try {
        const {
            idea_id,
            feature_id,
            content
        } = req.body;

        console.log(req.user._id)
        try {
            const comment = await Comment.create({
                user_id: req.user._id,
                idea_id,
                content,
                feature_id
            });
            res.status(200).json({
                success: true,
                comment
            });
        } catch (err) {
            console.log(err);
            // next(err)
            return next(new ErrorResponse("Oops Something went wrong!", 500));
        }
    } catch (err) {
        console.log(err);
        // next(err)
        return next(new ErrorResponse(err.message, 500));
    }
};