const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const path = require("path");

app.use(cors());

dotenv.config();

connectDB();

app.use(express.json());

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

// app.get("/", (req, res, next) => {
//   res.send("Api's are running absolutely fine!🔥");
// });

//Routes section

app.use("/api/auth", require("./routes/auth"));
app.use("/api/idea", require("./routes/idea_routes"));
app.use("/api/feature", require("./routes/feature_routes"));
app.use("/api/comment", require("./routes/comment_routes"));
app.use("/api/profile", require("./routes/profile_routes"));
app.use("/api/search", require("./routes/search_routes"));

app.use("/api/faker", require("./routes/fake_routes"));

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
