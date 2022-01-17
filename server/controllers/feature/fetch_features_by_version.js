// const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
const mongoose = require("mongoose");
const {
    FeatureSchema
} = require("../../models/Feature");


exports.fetch_features_version_wise = async (req, res, next) => {

    try {
        const {
            idea_id,
            version_start,
            version_end
        } = req.body;

        var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

        console.log(Feature);

        var results = await Feature.find({
            version_start: {
                $lt: version_start
            },
            version_end: {
                $gte: version_end
            },
        });

        res.status(200).json({
            success: true,
            features: results,
        });

    } catch (err) {
        console.log(err);
        return next(new ErrorResponse(err.message, 500));
    }
}