// const Feature = require("../../models/Feature");
const ErrorResponse = require("../../utils/errorResponse");
const crypto = require('crypto')
const mongoose = require("mongoose");
const {
    FeatureSchema
} = require("../../models/Feature");

exports.update_feature = async (req, res, next) => {
    try {
        const {
            id,
            title,
            idea_id,
            parent_id,
            content,
            version_start
        } = req.body;

        var updated_content, content_hash;

        var Feature = mongoose.model(`features_${idea_id}`, FeatureSchema);

        console.log(Feature);

        const initial = await Feature.findById(id);

        hashed_content = crypto.createHash("sha256").update(content).digest("hex");
        console.log(hashed_content);

        if (hashed_content === initial.content_hash) {
            updated_content = 0;
        } else {
            updated_content = 1;
            content_hash = hashed_content;
            console.log("here");
        }


        const response = await Feature.findOneAndUpdate({
            _id: id
        }, {
            title: title,
            user_id: req.user._id,
            idea_id: idea_id,
            parent_id: parent_id,
            content: content,
            version_start: version_start,
            content_hash: content_hash,
            updated_content,
        });

        const feature = await Feature.findById(id);
        res.status(200).json({
            success: true,
            feature: feature
        });
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse("Oops Something went wrong!", 500));
    }
}