const Feature = require("../../models/Feature");
const ErrorResponse = require("../../utils/errorResponse");

exports.create_feature = async(req, res, next) => {
    try {
        const {
            title,
            user_id,
            idea_id,
            parent_id,
            content,
            version_start
        } =
        req.body;

        const feature = await Feature.create({
            title,
            user_id,
            idea_id,
            parent_id,
            content,
            version_start,
        });
        res.status(200).json({
            success: true,
            feature
        });
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse("Oops Something went wrong!", 500));
    }
};