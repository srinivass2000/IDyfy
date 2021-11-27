const crypto = require("crypto");
const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide Title"],
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    idea_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Idea",
    },
    parent_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Feature",
    },
    content: {
        type: String,
    },
    content_hash: {
        type: String,
    },
    updated_content: {
        type: Boolean,
    },
    version_start: Number,
    version_end: Number,
});


FeatureSchema.pre("save", async function(next) {
    // if (!this.isModified("content")) {
    //     next();
    // }
    hashed_content = crypto.createHash("sha256").update(this.content).digest("hex");
    console.log(hashed_content)
    if (hashed_content === this.content_hash) {
        this.updated_content = 0;
        next();
    } else {
        this.updated_content = 1;
        this.content_hash = hashed_content;
        console.log("here");
        next();
    }
});


// FeatureSchema.pre("updateOne", async function(next) {
//     if (!this.isModified("content")) {
//         console.log("not modified")
//         next();
//     }
//     const data = this.getUpdate()
//     console.log(data);
//     hashed_content = crypto.createHash("sha256");
//     console.log(hashed_content)
//     if (hashed_content === this.content_hash) {
//         this.updated_content = 0;
//         next();
//     } else {
//         this.updated_content = 1;
//         this.content_hash = hashed_content;
//         console.log("here");
//         next();
//     }
// });

const Feature = mongoose.model("Feature", FeatureSchema);

module.exports = Feature;