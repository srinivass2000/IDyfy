const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api's are running absolutely fine!🔥");
});



//Routes section

app.use("/api/auth", require("./routes/auth"));



// Error Handler Middleware
app.use(errorHandler);


const port = process.env.PORT || 5000;

const server = app.listen(port, () => {console.log(`Server running on port ${port} 🔥`)});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
