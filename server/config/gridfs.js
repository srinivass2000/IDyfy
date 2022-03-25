const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

const runGRIDFS = async () => {
  let gfs;
  const conn = mongoose.connection;
  conn.once("open", function () {
    url = process.env.MONGO_URI;
    console.log("ran once");
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("documents");
  });
};

module.exports = runGRIDFS;
