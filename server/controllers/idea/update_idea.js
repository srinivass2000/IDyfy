const Idea = require("../../models/Idea");
const ErrorResponse = require("../../utils/errorResponse");
// const Comment = require("../../models/Comment");
const User = require("../../models/User");

exports.update_idea = async (req, res, next) => {
  // console.log("here");
  try {
    // console.log(req.body);
    const { title, description, tags, links, idea_id } = req.body;
    var idea = await Idea.findById(idea_id);
    var user_id = req.user._id.toString();
    if (idea.contributors.includes(user_id)) {
      console.log(req.files);
      var files = req.files;

      idea = await Idea.findById(idea_id);
      // console.log(idea.documents);
      if (idea.documents.length > 0) {
        var document = idea.documents[0];
      } else {
        var document = {};
      }
      if (req.files) {
        // const imgUrl = `https://idyfy.tech/file/${req.file.filename}`;
        files.filter(function (file) {
          console.log(file.filename);
          var name = file.filename;
          name = name.replace(/\s+/g, "");
          console.log(name);
          const split = name.split(".");
          const extension = split[1].toLowerCase();
          console.log(extension);
          if (
            extension !== "jpg" &&
            extension !== "jpeg" &&
            extension !== "png" &&
            extension !== "pdf" &&
            extension !== "doc" &&
            extension !== "docx"
          ) {
            res.status(405).json({
              success: false,
              error: `${extension} is not a valid extension`,
            });
          }
          document[`${file.originalname}`] = file.filename;
          // idea.documents[0].push(document);
          console.log("inserted");
        });
        var user_scores = idea.user_scores;
        user_scores[req.user._id.toString()] =
          user_scores[req.user._id.toString()] + 0.2;
        idea = await Idea.findByIdAndUpdate(idea_id, {
          title,
          description,
          tags,
          links,
          documents: document,
          user_scores,
        });
      } else {
        var user_scores = idea.user_scores;
        user_scores[req.user._id.toString()] =
          user_scores[req.user._id.toString()] + 0.2;
        idea = await Idea.findByIdAndUpdate(idea_id, {
          title,
          description,
          tags,
          links,
          user_scores,
        });
      }

      idea = await Idea.findById(idea_id);

      if (req.user.engagement_score == null) {
        var engagement_score = 0.5;
      } else {
        var engagement_score = req.user.engagement_score + 0.5;
      }

      await User.findByIdAndUpdate(req.user._id, {
        engagement_score,
      });

      var user = await User.findByIdAndUpdate(req.user._id,{
        $push:  {
          events: {
            type: "idea updated",
            detail: idea,
            time: new Date()
          }
        }
      });

      res.status(200).json({
        success: true,
        idea,
      });
    } else {
      return next(
        new ErrorResponse("You are not a contributor to this Idea", 403)
      );
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
