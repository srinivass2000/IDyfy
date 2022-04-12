// const Idea = require("../../models/Idea");
const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
// const { protect } = require("../../middleware/auth");

exports.update_profile = async (req, res, next) => {
  try {
    const { name, job, university, about } = req.body;

    if (req.file) {
      // const imgUrl = `https://idyfy.tech/file/${req.file.filename}`;
      var file = req.file;
      console.log(file.filename);
      var file_name = file.filename;
      file_name = file_name.replace(/\s+/g, "");
      console.log(file_name);
      const split = file_name.split(".");
      const extension = split[1].toLowerCase();
      console.log(extension);
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        res.status(405).json({
          success: false,
          error: `${extension} is not a valid extension`,
        });
      }
      // idea.documents[0].push(document);
      console.log(file.filename);
      const imgUrl = `https://idyfy.tech/file/${req.file.filename}`;
      console.log("inserted");
      var user = await User.findByIdAndUpdate(req.user._id, {
        name,
        job,
        university,
        about,
        profile_pic: imgUrl,
      });
    } else {
      var user = await User.findByIdAndUpdate(req.user._id, {
        name,
        job,
        university,
        about,
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Oops Something Went Wrong", 500));
  }
};
