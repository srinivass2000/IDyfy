const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const {
    FeatureSchema
} = require("../../models/Feature");
const mongoose = require("mongoose");



function createModelForName(name) {
    console.log(name);
    console.log(FeatureSchema);
    try {
        var name_updated = mongoose.model(name, FeatureSchema);
        console.log(name_updated);
        return name_updated;
    } catch (err) {
        console.log(err);
        console.log("here");
        // next(err)
        return new ErrorResponse("Oops Something went wrong!", 500);
    }
}

exports.create_idea = async (req, res, next) => {
    try {
        const {
            title,
            description,
            tags
        } = req.body;
        console.log(req.user._id)
        try {
            const idea = await Idea.create({
                title,
                description,
                tags,
                contributors: [req.user._id],
            });

            var table_name = createModelForName(`features_${idea._id}`);

            console.log(table_name)


            res.status(200).json({
                success: true,
                idea
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