const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const db = process.env.MONGO_URI;

// console.log(db);

const storage = new GridFsStorage({
  url: db,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    file.originalname = file.originalname.replace(/\s+/g, "");

    // console.log(file.originalname);
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "documents",
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

// app.get("/file/:filename", async(req, res) => {

module.exports = multer({ storage });
