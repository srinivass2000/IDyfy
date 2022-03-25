const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const ErrorResponse = require("../../utils/errorResponse");
const gfs = require("../../index");

exports.get_doc = async (req, res, next) => {
  try {
    console.log(req.params.filename);
    var type = req.params.filename;
    type = type.replace(/\s+/g, "");
    console.log(type);
    const split = type.split(".");
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
    } else {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      console.log(file);
      if (!file) {
        return next(new ErrorResponse("Not found", 404));
      }
      const readStream = gfs.createReadStream(file.filename);
      console.log("here");
      readStream.pipe(res);
    }
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse("Oops Something went wrong!", 500));
  }
};
