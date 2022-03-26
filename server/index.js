const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const errorHandler = require("./middleware/error");
const cors = require("cors");
const path = require("path");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const ErrorResponse = require("./utils/errorResponse");
// var bodyParser = require("body-parser");

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

connectDB();

app.use(express.json());

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
  url = process.env.MONGO_URI;
  console.log("ran once");
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("documents");
});

//Routes section
app.use("/api/auth", require("./routes/auth"));
app.use("/api/idea", require("./routes/idea_routes"));
app.use("/api/feature", require("./routes/feature_routes"));
app.use("/api/comment", require("./routes/comment_routes"));
app.use("/api/profile", require("./routes/profile_routes"));
app.use("/api/search", require("./routes/search_routes"));

app.use("/api/faker", require("./routes/fake_routes"));

app.get("/file/:filename", async (req, res) => {
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
});

const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : "production";

if (env === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("/", (req, res, next) => {
    res.send("Api's are running absolutely fine!🔥");
  });
}

// Error Handler Middleware
app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
  console.log(`Server is running in ${env} Mode 🏃`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
