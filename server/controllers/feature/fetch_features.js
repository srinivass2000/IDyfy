const Feature = require("../../models/Feature");
const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");

exports.fetch_features = async(req, res, next) => {

    try {
        const {
            idea_id,
        } = req.body;
    } catch (err) {
        console.log(err)
    }
}